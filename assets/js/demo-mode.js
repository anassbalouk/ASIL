/*!
 * ASIL CAISSE — Demo Mode (self-contained)
 *
 * Enforces a time-limited demo of the application:
 *   - Starts a 1-hour timer the first time the page is loaded.
 *   - Persists the start timestamp in multiple browser stores
 *     (localStorage, cookie, IndexedDB) so it survives reloads
 *     and is harder to reset accidentally.
 *   - Displays a small badge in a corner of the screen with the
 *     remaining time while the demo is active.
 *   - When the timer expires, shows a fullscreen overlay
 *     ("Demo expired") in FR / EN / AR, blocks the underlying
 *     app, and tries to call the app's own logout function.
 *   - Re-attaches the overlay if it is removed from the DOM.
 *
 * The module is self-contained: it does not need to read or
 * modify the existing app.js. To enable, include
 * `<meta name="demo-mode" content="true">` in the document head
 * and load this script before the main app script.
 *
 * Bonus: when running on a static host without the Python
 * backend (e.g. GitHub Pages, Vercel, Netlify), this script
 * also intercepts fetch() calls to `/api/state` and serves them
 * from localStorage / the bundled `app_state.json`, so the demo
 * works without any server-side component.
 */
(function () {
    'use strict';

    // ───── Configuration ───────────────────────────────────────
    var DEMO_DURATION_MS = 60 * 60 * 1000; // 1 hour
    var STORAGE_KEY = 'asil_demo_started_at';
    var STATE_KEY = 'asil_demo_app_state';
    var COOKIE_NAME = 'asil_demo_started_at';
    var IDB_NAME = 'asil_demo_db';
    var IDB_STORE = 'demo_meta';
    var CHECK_INTERVAL_MS = 5 * 1000;
    var BANNER_TICK_MS = 1000;
    var OVERLAY_ID = 'asil-demo-expired-overlay';
    var BANNER_ID = 'asil-demo-banner';

    // ───── Detect activation ───────────────────────────────────
    function readMeta(name) {
        var m = document.querySelector('meta[name="' + name + '"]');
        return m ? (m.getAttribute('content') || '').trim() : '';
    }
    var enabled = readMeta('demo-mode').toLowerCase() === 'true';
    if (!enabled) return;

    // Allow overriding the duration from the meta tag for testing,
    // e.g. <meta name="demo-duration-seconds" content="30">.
    var override = parseInt(readMeta('demo-duration-seconds'), 10);
    if (Number.isFinite(override) && override > 0) {
        DEMO_DURATION_MS = override * 1000;
    }

    // ───── Translations ────────────────────────────────────────
    var I18N = {
        fr: {
            title: 'Démonstration expirée',
            subtitle: 'La période de démonstration de 1 heure est terminée.',
            desc: 'Pour accéder à la version complète d\u2019ASIL CAISSE, merci de nous contacter.',
            contact: 'Nous contacter',
            bannerPrefix: 'Démo : ',
            bannerSuffix: ' restantes',
            badge: 'DÉMO'
        },
        en: {
            title: 'Demo expired',
            subtitle: 'The 1-hour demo period has ended.',
            desc: 'To access the full version of ASIL CAISSE, please contact us.',
            contact: 'Contact us',
            bannerPrefix: 'Demo: ',
            bannerSuffix: ' remaining',
            badge: 'DEMO'
        },
        ar: {
            title: 'انتهت الفترة التجريبية',
            subtitle: 'انتهت فترة التجربة المجانية لمدة ساعة.',
            desc: 'للوصول إلى النسخة الكاملة من ASIL CAISSE، يرجى التواصل معنا.',
            contact: 'تواصل معنا',
            bannerPrefix: 'تجريبي: ',
            bannerSuffix: ' متبقية',
            badge: 'تجريبي'
        }
    };

    function detectLang() {
        try {
            if (typeof window.currentLang === 'string' && I18N[window.currentLang]) {
                return window.currentLang;
            }
        } catch (e) { /* ignore */ }
        var htmlLang = (document.documentElement.getAttribute('lang') || '').toLowerCase();
        if (I18N[htmlLang]) return htmlLang;
        return 'fr';
    }

    function t(key) {
        var lang = detectLang();
        return (I18N[lang] && I18N[lang][key]) || I18N.fr[key] || '';
    }

    // ───── Storage helpers ─────────────────────────────────────
    function readCookie(name) {
        var parts = (document.cookie || '').split(';');
        for (var i = 0; i < parts.length; i++) {
            var p = parts[i].trim();
            if (p.indexOf(name + '=') === 0) return p.substring(name.length + 1);
        }
        return null;
    }

    function writeCookie(name, value, days) {
        try {
            var exp = new Date(Date.now() + days * 86400000).toUTCString();
            document.cookie = name + '=' + encodeURIComponent(value)
                + '; expires=' + exp + '; path=/; SameSite=Lax';
        } catch (e) { /* ignore */ }
    }

    function idbGet(key) {
        return new Promise(function (resolve) {
            try {
                var req = indexedDB.open(IDB_NAME, 1);
                req.onupgradeneeded = function (e) {
                    var db = e.target.result;
                    if (!db.objectStoreNames.contains(IDB_STORE)) {
                        db.createObjectStore(IDB_STORE);
                    }
                };
                req.onerror = function () { resolve(null); };
                req.onsuccess = function (e) {
                    var db = e.target.result;
                    try {
                        var tx = db.transaction(IDB_STORE, 'readonly');
                        var store = tx.objectStore(IDB_STORE);
                        var g = store.get(key);
                        g.onsuccess = function () { resolve(g.result || null); };
                        g.onerror = function () { resolve(null); };
                    } catch (err) { resolve(null); }
                };
            } catch (err) { resolve(null); }
        });
    }

    function idbPut(key, value) {
        try {
            var req = indexedDB.open(IDB_NAME, 1);
            req.onupgradeneeded = function (e) {
                var db = e.target.result;
                if (!db.objectStoreNames.contains(IDB_STORE)) {
                    db.createObjectStore(IDB_STORE);
                }
            };
            req.onsuccess = function (e) {
                var db = e.target.result;
                try {
                    var tx = db.transaction(IDB_STORE, 'readwrite');
                    tx.objectStore(IDB_STORE).put(value, key);
                } catch (err) { /* ignore */ }
            };
        } catch (err) { /* ignore */ }
    }

    function readStartTimeSync() {
        var earliest = null;
        try {
            var ls = localStorage.getItem(STORAGE_KEY);
            if (ls) {
                var n = parseInt(ls, 10);
                if (Number.isFinite(n) && n > 0) earliest = n;
            }
        } catch (e) { /* ignore */ }
        try {
            var ck = readCookie(COOKIE_NAME);
            if (ck) {
                var nc = parseInt(decodeURIComponent(ck), 10);
                if (Number.isFinite(nc) && nc > 0) {
                    earliest = earliest === null ? nc : Math.min(earliest, nc);
                }
            }
        } catch (e) { /* ignore */ }
        return earliest;
    }

    function writeStartTime(value) {
        try { localStorage.setItem(STORAGE_KEY, String(value)); } catch (e) { /* ignore */ }
        writeCookie(COOKIE_NAME, String(value), 30);
        idbPut('startedAt', value);
    }

    // ───── Lifecycle ───────────────────────────────────────────
    var startedAt = readStartTimeSync();
    if (!startedAt) {
        startedAt = Date.now();
        writeStartTime(startedAt);
    }
    // Async: also reconcile with IndexedDB (may have an earlier value)
    idbGet('startedAt').then(function (v) {
        var n = typeof v === 'number' ? v : parseInt(v, 10);
        if (Number.isFinite(n) && n > 0 && n < startedAt) {
            startedAt = n;
            writeStartTime(startedAt);
        }
    });

    function elapsed() { return Date.now() - startedAt; }
    function isExpired() { return elapsed() >= DEMO_DURATION_MS; }
    function remainingMs() { return Math.max(0, DEMO_DURATION_MS - elapsed()); }

    function fmtMMSS(ms) {
        var total = Math.floor(ms / 1000);
        var m = Math.floor(total / 60);
        var s = total % 60;
        return (m < 10 ? '0' + m : '' + m) + ':' + (s < 10 ? '0' + s : '' + s);
    }

    // ───── UI: Overlay ─────────────────────────────────────────
    function ensureBody(cb) {
        if (document.body) { cb(); return; }
        document.addEventListener('DOMContentLoaded', cb, { once: true });
    }

    var overlayObserver = null;

    function buildOverlay() {
        var lang = detectLang();
        var strings = I18N[lang] || I18N.fr;
        var rtl = lang === 'ar';

        var overlay = document.createElement('div');
        overlay.id = OVERLAY_ID;
        overlay.className = 'asil-demo-overlay';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-labelledby', 'asil-demo-title');
        overlay.dir = rtl ? 'rtl' : 'ltr';
        overlay.innerHTML = ''
            + '<div class="asil-demo-card">'
            + '  <div class="asil-demo-icon" aria-hidden="true">'
            + '    <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'
            + '      <circle cx="12" cy="13" r="8"></circle>'
            + '      <path d="M12 9v4l2.5 2.5"></path>'
            + '      <path d="M9 2h6"></path>'
            + '      <path d="M12 2v3"></path>'
            + '    </svg>'
            + '  </div>'
            + '  <h1 id="asil-demo-title" class="asil-demo-title"></h1>'
            + '  <p class="asil-demo-sub"></p>'
            + '  <p class="asil-demo-desc"></p>'
            + '  <button type="button" class="asil-demo-btn" id="asil-demo-contact"></button>'
            + '  <div class="asil-demo-langs" role="group" aria-label="Language">'
            + '    <button type="button" data-lang="fr">FR</button>'
            + '    <button type="button" data-lang="en">EN</button>'
            + '    <button type="button" data-lang="ar">AR</button>'
            + '  </div>'
            + '</div>';

        var titleEl = overlay.querySelector('.asil-demo-title');
        var subEl = overlay.querySelector('.asil-demo-sub');
        var descEl = overlay.querySelector('.asil-demo-desc');
        var btnEl = overlay.querySelector('.asil-demo-btn');
        if (titleEl) titleEl.textContent = strings.title;
        if (subEl) subEl.textContent = strings.subtitle;
        if (descEl) descEl.textContent = strings.desc;
        if (btnEl) btnEl.textContent = strings.contact;

        // Highlight active language
        var langBtns = overlay.querySelectorAll('.asil-demo-langs button');
        for (var i = 0; i < langBtns.length; i++) {
            if (langBtns[i].getAttribute('data-lang') === lang) {
                langBtns[i].classList.add('is-active');
            }
            langBtns[i].addEventListener('click', function (ev) {
                var newLang = ev.currentTarget.getAttribute('data-lang');
                document.documentElement.setAttribute('lang', newLang);
                try { window.currentLang = newLang; } catch (e) { /* ignore */ }
                rebuildOverlay();
            });
        }

        var contactBtn = overlay.querySelector('#asil-demo-contact');
        if (contactBtn) {
            contactBtn.addEventListener('click', function () {
                // Try common contact channels in order: data-* on meta, then mailto fallback.
                var url = readMeta('demo-contact-url');
                var email = readMeta('demo-contact-email');
                if (url) { window.open(url, '_blank', 'noopener'); return; }
                if (email) { window.location.href = 'mailto:' + email; return; }
                // No-op: just keep the overlay; the message itself instructs the user.
            });
        }

        return overlay;
    }

    function rebuildOverlay() {
        var existing = document.getElementById(OVERLAY_ID);
        if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
        showExpired();
    }

    function showExpired() {
        ensureBody(function () {
            if (document.getElementById(OVERLAY_ID)) return;
            var overlay = buildOverlay();
            document.body.appendChild(overlay);

            // Hide any banner since demo is over
            var banner = document.getElementById(BANNER_ID);
            if (banner && banner.parentNode) banner.parentNode.removeChild(banner);

            // Lock body scroll
            try {
                document.body.style.overflow = 'hidden';
                document.documentElement.style.overflow = 'hidden';
            } catch (e) { /* ignore */ }

            // Try to log out from the app, if it exposes a logout fn
            try { if (typeof window.doLogout === 'function') window.doLogout(); } catch (e) { /* ignore */ }

            // Re-attach if removed
            if (overlayObserver) overlayObserver.disconnect();
            overlayObserver = new MutationObserver(function () {
                if (!document.getElementById(OVERLAY_ID)) {
                    showExpired();
                }
            });
            overlayObserver.observe(document.body, { childList: true, subtree: false });
        });
    }

    // ───── UI: Live banner ─────────────────────────────────────
    function showBanner() {
        ensureBody(function () {
            if (document.getElementById(BANNER_ID)) return;
            var banner = document.createElement('div');
            banner.id = BANNER_ID;
            banner.className = 'asil-demo-banner';
            banner.innerHTML = ''
                + '<span class="asil-demo-banner-dot" aria-hidden="true"></span>'
                + '<span class="asil-demo-banner-badge"></span>'
                + '<span class="asil-demo-banner-time" aria-live="polite"></span>';
            document.body.appendChild(banner);
            updateBanner();
        });
    }

    function updateBanner() {
        var banner = document.getElementById(BANNER_ID);
        if (!banner) return;
        var lang = detectLang();
        var strings = I18N[lang] || I18N.fr;
        banner.dir = lang === 'ar' ? 'rtl' : 'ltr';
        var badge = banner.querySelector('.asil-demo-banner-badge');
        var time = banner.querySelector('.asil-demo-banner-time');
        if (badge) badge.textContent = strings.badge;
        if (time) time.textContent = strings.bannerPrefix + fmtMMSS(remainingMs()) + strings.bannerSuffix;
    }

    // ───── Boot ────────────────────────────────────────────────
    function tick() {
        if (isExpired()) {
            showExpired();
        } else {
            updateBanner();
        }
    }

    function boot() {
        if (isExpired()) {
            showExpired();
            return;
        }
        showBanner();
        setInterval(tick, CHECK_INTERVAL_MS);
        setInterval(updateBanner, BANNER_TICK_MS);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot, { once: true });
    } else {
        boot();
    }

    // ───── /api/state shim for static hosts ────────────────────
    // When deployed without `server.py` (e.g. GitHub Pages, Vercel),
    // intercept the app's GET/POST calls to `/api/state` and serve
    // them from localStorage. Initial GET falls back to the bundled
    // `app_state.json` so the demo starts with sample data.
    if (typeof window.fetch === 'function') {
        var origFetch = window.fetch.bind(window);
        window.fetch = function (input, init) {
            try {
                var url = typeof input === 'string' ? input : (input && input.url) || '';
                var method = ((init && init.method) || (input && input.method) || 'GET').toUpperCase();
                if (url.indexOf('/api/state') !== -1) {
                    if (method === 'GET') {
                        var stored = null;
                        try { stored = localStorage.getItem(STATE_KEY); } catch (e) { /* ignore */ }
                        if (stored) {
                            return Promise.resolve(new Response(stored, {
                                status: 200,
                                headers: { 'Content-Type': 'application/json' }
                            }));
                        }
                        return origFetch('./app_state.json', { cache: 'no-store' }).then(function (r) {
                            if (r.ok) {
                                return r.text().then(function (text) {
                                    return new Response(text, {
                                        status: 200,
                                        headers: { 'Content-Type': 'application/json' }
                                    });
                                });
                            }
                            return new Response('{"error":"state-not-found"}', {
                                status: 404,
                                headers: { 'Content-Type': 'application/json' }
                            });
                        }).catch(function () {
                            return new Response('{"error":"state-not-found"}', {
                                status: 404,
                                headers: { 'Content-Type': 'application/json' }
                            });
                        });
                    }
                    if (method === 'POST') {
                        try {
                            var body = init && init.body;
                            var text = typeof body === 'string' ? body : '';
                            if (text) localStorage.setItem(STATE_KEY, text);
                        } catch (e) { /* ignore */ }
                        return Promise.resolve(new Response('{"ok":true}', {
                            status: 200,
                            headers: { 'Content-Type': 'application/json' }
                        }));
                    }
                }
            } catch (e) { /* fall through to original fetch */ }
            return origFetch(input, init);
        };
    }
}());

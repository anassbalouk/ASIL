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
            whatsapp: 'WhatsApp',
            email: 'E-mail',
            bannerPrefix: 'Démo : ',
            bannerSuffix: ' restantes',
            badge: 'DÉMO'
        },
        en: {
            title: 'Demo expired',
            subtitle: 'The 1-hour demo period has ended.',
            desc: 'To access the full version of ASIL CAISSE, please contact us.',
            whatsapp: 'WhatsApp',
            email: 'Email',
            bannerPrefix: 'Demo: ',
            bannerSuffix: ' remaining',
            badge: 'DEMO'
        },
        ar: {
            title: 'انتهت الفترة التجريبية',
            subtitle: 'انتهت فترة التجربة المجانية لمدة ساعة.',
            desc: 'للوصول إلى النسخة الكاملة من ASIL CAISSE، يرجى التواصل معنا.',
            whatsapp: 'واتساب',
            email: 'البريد الإلكتروني',
            bannerPrefix: 'تجريبي: ',
            bannerSuffix: ' متبقية',
            badge: 'تجريبي'
        }
    };

    // Resolve a WhatsApp meta value into an https://wa.me/<digits> URL.
    // Accepts:
    //   - already-formed wa.me / api.whatsapp.com / https URLs (returned as-is)
    //   - phone numbers in any common format (digits extracted)
    //   - numbers with leading zero -> assumed Moroccan, prefixed with 212
    function buildWhatsAppUrl(raw) {
        if (!raw) return '';
        var v = String(raw).trim();
        if (!v) return '';
        if (/^https?:\/\//i.test(v)) return v;
        if (/^wa\.me\//i.test(v)) return 'https://' + v;
        var digits = v.replace(/[^0-9]/g, '');
        if (!digits) return '';
        if (digits.charAt(0) === '0') digits = '212' + digits.slice(1);
        return 'https://wa.me/' + digits;
    }

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
    // The trial timer does NOT start on page load. It starts only
    // after the user successfully logs in (detected by the host
    // app's login screen disappearing). Once started, the start
    // timestamp is persisted across reloads.
    var startedAt = readStartTimeSync();
    // Async: reconcile with IndexedDB (may hold an earlier value).
    idbGet('startedAt').then(function (v) {
        var n = typeof v === 'number' ? v : parseInt(v, 10);
        if (Number.isFinite(n) && n > 0 && (startedAt === null || n < startedAt)) {
            startedAt = n;
            writeStartTime(startedAt);
        }
    });

    function hasStarted() { return startedAt !== null && startedAt > 0; }
    function elapsed() { return hasStarted() ? Date.now() - startedAt : 0; }
    function isExpired() { return hasStarted() && elapsed() >= DEMO_DURATION_MS; }
    function remainingMs() {
        if (!hasStarted()) return DEMO_DURATION_MS;
        return Math.max(0, DEMO_DURATION_MS - elapsed());
    }

    function startTimer() {
        if (hasStarted()) return;
        startedAt = Date.now();
        writeStartTime(startedAt);
        showBanner();
        armIntervals();
    }

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
        var whatsappRaw = readMeta('demo-contact-whatsapp') || readMeta('demo-contact-url');
        var whatsappUrl = buildWhatsAppUrl(whatsappRaw);
        var emailAddr = readMeta('demo-contact-email');

        // SVG icons used inside the contact buttons.
        var iconWhatsApp = ''
            + '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor">'
            + '<path d="M19.05 4.91A10 10 0 0 0 4.91 19.05L4 22l3.05-.91a10 10 0 0 0 12-16.18Zm-1.46 13.55a8.3 8.3 0 0 1-12.42 0l-.3-.3-1.81.55.55-1.77-.31-.32a8.3 8.3 0 1 1 14.29 1.84Zm-3.74-3.05c-.2-.1-1.18-.58-1.36-.65s-.32-.1-.45.1-.52.65-.64.78-.23.15-.43.05a6.8 6.8 0 0 1-2-1.23 7.5 7.5 0 0 1-1.39-1.73c-.15-.25 0-.39.11-.5s.25-.28.37-.42.16-.23.24-.39a.45.45 0 0 0 0-.43c0-.1-.45-1.08-.62-1.49s-.33-.34-.45-.35h-.39a.74.74 0 0 0-.54.25 2.26 2.26 0 0 0-.7 1.66 3.91 3.91 0 0 0 .82 2.07 9 9 0 0 0 3.45 3.05c.48.21.86.34 1.16.43a2.78 2.78 0 0 0 1.28.08 2.1 2.1 0 0 0 1.37-.97 1.69 1.69 0 0 0 .12-.96c-.05-.09-.18-.14-.38-.24Z"/>'
            + '</svg>';
        var iconMail = ''
            + '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'
            + '<rect x="3" y="5" width="18" height="14" rx="2"/>'
            + '<path d="M3 7l9 6 9-6"/>'
            + '</svg>';

        var actionsHtml = '';
        if (whatsappUrl || emailAddr) {
            actionsHtml += '<div class="asil-demo-actions">';
            if (whatsappUrl) {
                actionsHtml += '<a class="asil-demo-btn asil-demo-btn--whatsapp" '
                    + 'href="' + whatsappUrl + '" target="_blank" rel="noopener">'
                    + iconWhatsApp
                    + '<span class="asil-demo-btn-label">' + strings.whatsapp + '</span>'
                    + '</a>';
            }
            if (emailAddr) {
                actionsHtml += '<a class="asil-demo-btn asil-demo-btn--email" '
                    + 'href="mailto:' + emailAddr + '">'
                    + iconMail
                    + '<span class="asil-demo-btn-label">' + strings.email + '</span>'
                    + '</a>';
            }
            actionsHtml += '</div>';
        }

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
            +    actionsHtml
            + '  <div class="asil-demo-langs" role="group" aria-label="Language">'
            + '    <button type="button" data-lang="fr">FR</button>'
            + '    <button type="button" data-lang="en">EN</button>'
            + '    <button type="button" data-lang="ar">AR</button>'
            + '  </div>'
            + '</div>';

        var titleEl = overlay.querySelector('.asil-demo-title');
        var subEl = overlay.querySelector('.asil-demo-sub');
        var descEl = overlay.querySelector('.asil-demo-desc');
        if (titleEl) titleEl.textContent = strings.title;
        if (subEl) subEl.textContent = strings.subtitle;
        if (descEl) descEl.textContent = strings.desc;

        // Highlight active language and wire switcher
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

            // The fullscreen overlay already blocks every interaction with the
            // host app, so we deliberately do NOT call window.doLogout() here:
            // the host's logout flow uses confirm() which would pop up on top
            // of the expired card on every language switch (rebuildOverlay).

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
    var intervalsArmed = false;
    function tick() {
        if (!hasStarted()) return;
        if (isExpired()) {
            showExpired();
        } else {
            updateBanner();
        }
    }

    function armIntervals() {
        if (intervalsArmed) return;
        intervalsArmed = true;
        setInterval(tick, CHECK_INTERVAL_MS);
        setInterval(updateBanner, BANNER_TICK_MS);
    }

    // Watch the host app's login screen. When it transitions to
    // hidden (login success), start the trial timer. We detect
    // "hidden" via getComputedStyle so we don't depend on the
    // exact mechanism the app uses (display:none, hidden attr,
    // class change, removal from the DOM, etc.).
    function loginScreenIsHidden(el) {
        if (!el || !el.isConnected) return true;
        if (el.hasAttribute && el.hasAttribute('hidden')) return true;
        try {
            var cs = window.getComputedStyle(el);
            if (cs.display === 'none' || cs.visibility === 'hidden') return true;
            if (parseFloat(cs.opacity) === 0) return true;
        } catch (e) { /* ignore */ }
        if (el.style && (el.style.display === 'none' || el.style.visibility === 'hidden')) return true;
        return false;
    }

    function watchForLogin() {
        var loginScreen = document.getElementById('login-screen');
        if (!loginScreen) {
            // Login screen isn't in the DOM yet; observe body for it.
            if (!document.body) return;
            var bodyObs = new MutationObserver(function () {
                var ls = document.getElementById('login-screen');
                if (ls) {
                    bodyObs.disconnect();
                    watchForLogin();
                }
            });
            bodyObs.observe(document.body, { childList: true, subtree: true });
            return;
        }

        if (loginScreenIsHidden(loginScreen)) {
            startTimer();
            return;
        }

        var observer = new MutationObserver(function () {
            if (loginScreenIsHidden(loginScreen)) {
                observer.disconnect();
                if (parentObs) parentObs.disconnect();
                startTimer();
            }
        });
        observer.observe(loginScreen, {
            attributes: true,
            attributeFilter: ['style', 'class', 'hidden'],
            childList: false,
            subtree: false
        });
        // Also watch the parent for outright removal of the login screen.
        var parentObs = null;
        if (loginScreen.parentNode) {
            parentObs = new MutationObserver(function () {
                if (!loginScreen.isConnected) {
                    parentObs.disconnect();
                    observer.disconnect();
                    startTimer();
                }
            });
            parentObs.observe(loginScreen.parentNode, { childList: true });
        }
    }

    function boot() {
        // If a previous session already started the timer:
        if (hasStarted()) {
            if (isExpired()) {
                showExpired();
                return;
            }
            showBanner();
            armIntervals();
            return;
        }
        // Otherwise, stay invisible and wait for login to start the timer.
        watchForLogin();
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

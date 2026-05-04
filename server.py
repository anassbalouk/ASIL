#!/usr/bin/env python3
"""Local app server with file-backed state API.

- Serves static files from the app directory.
- GET /api/state -> returns JSON snapshot if present.
- POST /api/state -> writes snapshot to app_state.json in this folder.
"""

from __future__ import annotations

import json
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent
STATE_FILE = ROOT / "app_state.json"
HOST = "127.0.0.1"
PORT = 8080


class AppHandler(SimpleHTTPRequestHandler):
    def _set_json(self, status: HTTPStatus = HTTPStatus.OK) -> None:
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()

    def do_OPTIONS(self) -> None:  # noqa: N802
        self.send_response(HTTPStatus.NO_CONTENT)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_GET(self) -> None:  # noqa: N802
        if self.path == "/api/state":
            if not STATE_FILE.exists():
                self._set_json(HTTPStatus.NOT_FOUND)
                self.wfile.write(b'{"error":"state-not-found"}')
                return
            try:
                payload = STATE_FILE.read_text(encoding="utf-8")
                json.loads(payload)
                self._set_json(HTTPStatus.OK)
                self.wfile.write(payload.encode("utf-8"))
            except Exception:
                self._set_json(HTTPStatus.INTERNAL_SERVER_ERROR)
                self.wfile.write(b'{"error":"state-read-failed"}')
            return
        return super().do_GET()

    def do_POST(self) -> None:  # noqa: N802
        if self.path == "/api/state":
            try:
                length = int(self.headers.get("Content-Length", "0"))
                raw = self.rfile.read(length)
                payload = json.loads(raw.decode("utf-8"))
                STATE_FILE.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
                self._set_json(HTTPStatus.OK)
                self.wfile.write(b'{"ok":true}')
            except Exception:
                self._set_json(HTTPStatus.BAD_REQUEST)
                self.wfile.write(b'{"error":"state-write-failed"}')
            return
        self.send_error(HTTPStatus.NOT_FOUND)


if __name__ == "__main__":
    server = ThreadingHTTPServer((HOST, PORT), AppHandler)
    print(f"Serving {ROOT} at http://{HOST}:{PORT}")
    print(f"State file: {STATE_FILE}")
    server.serve_forever()

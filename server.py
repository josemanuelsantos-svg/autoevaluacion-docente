# -*- coding: utf-8 -*-
# ==========================================================================
# SERVIDOR CLOUD REST API ZERO-DEPENDENCY (PYTHON)
# Plataforma de Autoevaluación Docente - Colegio San Buenaventura
# ==========================================================================

from http.server import HTTPServer, SimpleHTTPRequestHandler
import json
import os
import sys

PORT = int(os.environ.get("PORT", 3000))
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_FILE = os.path.join(BASE_DIR, "db.json")
SEED_FILE = os.path.join(BASE_DIR, "teachers_db_2627.json")

def init_db():
    if not os.path.exists(DB_FILE):
        seed = []
        if os.path.exists(SEED_FILE):
            with open(SEED_FILE, "r", encoding="utf-8") as f:
                seed = json.load(f)
        initial = {
            "teachers": seed,
            "evaluations": {}
        }
        for t in seed:
            initial["evaluations"][t["name"]] = {
                "status": "not_started",
                "updatedAt": None,
                "answers": {},
                "directorAnswers": {},
                "reflections": {},
                "directorNotes": ""
            }
        with open(DB_FILE, "w", encoding="utf-8") as f:
            json.dump(initial, f, ensure_ascii=False, indent=2)
        return initial
    else:
        with open(DB_FILE, "r", encoding="utf-8") as f:
            return json.load(f)

init_db()

class CloudDBHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def do_GET(self):
        if self.path == "/api/health":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            res = {
                "status": "ok",
                "server": "Colegio San Buenaventura Cloud REST API (Python)",
                "database": "db.json"
            }
            self.wfile.write(json.dumps(res).encode("utf-8"))
        elif self.path == "/api/db":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            with open(DB_FILE, "r", encoding="utf-8") as f:
                self.wfile.write(f.read().encode("utf-8"))
        else:
            if self.path == "/" or self.path == "":
                self.path = "/previsualizacion-autoevaluacion.html"
            super().do_GET()

    def do_POST(self):
        if self.path == "/api/db":
            length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(length).decode("utf-8")
            data = json.loads(body)
            with open(DB_FILE, "w", encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(json.dumps({"success": True, "message": "Sincronizado en la nube"}).encode("utf-8"))
        else:
            self.send_response(404)
            self.end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

if __name__ == "__main__":
    print(f"===========================================================")
    print(f"🚀 SERVIDOR CLOUD REST API ACTIVO (Zero-Dependency Python)")
    print(f"🏫 Colegio San Buenaventura — Autoevaluación Docente")
    print(f"🌐 Servidor escuchando en: http://localhost:{PORT}")
    print(f"===========================================================")
    httpd = HTTPServer(("0.0.0.0", PORT), CloudDBHandler)
    httpd.serve_forever()

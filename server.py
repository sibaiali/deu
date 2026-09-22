import http.server
import socketserver
import os

os.chdir(r'c:\deu_notes')
PORT = 3000

class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        super().do_GET()

if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    httpd = socketserver.TCPServer(('127.0.0.1', PORT), Handler)
    print(f"Serving at http://127.0.0.1:{PORT}")
    httpd.serve_forever()

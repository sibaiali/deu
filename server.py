import http.server
import socketserver
import os

os.chdir(r'c:\deu_notes')
PORT = 3000

Handler = http.server.SimpleHTTPRequestHandler

if __name__ == '__main__':
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Platform server running at http://localhost:{PORT}")
        httpd.serve_forever()

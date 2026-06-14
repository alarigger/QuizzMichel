# launcher.py
import http.server
import socketserver
import webbrowser
import threading
import sys
import time

PORT = 8000


# ----------------------------
# CONFIG: default page
# ----------------------------
DEFAULT_PAGE = "index.html"


def open_browser(page):
    time.sleep(0.5)  # wait server start
    url = f"http://localhost:{PORT}/{page}"
    webbrowser.open(url)


def run_server():
    handler = http.server.SimpleHTTPRequestHandler

    with socketserver.TCPServer(("", PORT), handler) as httpd:
        print(f"🚀 Server running at http://localhost:{PORT}")
        httpd.serve_forever()


if __name__ == "__main__":

    # -----------------------------------
    # ARG = which quiz HTML to open
    # python launcher.py JTB1.html
    # -----------------------------------
    page = DEFAULT_PAGE

    if len(sys.argv) > 1:
        page = "quizz_"+sys.argv[1]+".html"
        
    page = "index.html"

    print(f"🎮 Opening: {page}")

    # start browser in background
    threading.Thread(target=open_browser, args=(page,), daemon=True).start()

    # start server (blocking)
    run_server()
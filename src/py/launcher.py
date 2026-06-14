# launcher.py
import http.server
import socketserver
import webbrowser
import threading
import sys
import time
import os 


from parser import generate_data_json

PORT = 8000


# ----------------------------
# CONFIG: default page
# ----------------------------
DEFAULT_PAGE = "index.html"

class QuizzManager():
    
    def parse_quizz_data():
        root = os.getenv("QMROOT")+"/quizzes"
        for dir in os.listdir(root):
            name = dir
            folder = root+"/"+dir
            generate_data_json(name,folder)


def open_browser(page):
    time.sleep(0.5)  # wait server start
    url = f"http://localhost:{PORT}/{page}"
    webbrowser.open(url)


def run_server():
    handler = http.server.SimpleHTTPRequestHandler

    with socketserver.TCPServer(("", PORT), handler) as httpd:
        print(f" Server running at http://localhost:{PORT}")
        httpd.serve_forever()


if __name__ == "__main__":

    # -----------------------------------
    # ARG = which quiz HTML to open
    # python launcher.py JTB1.html
    # -----------------------------------
        
    QuizzManager.parse_quizz_data()

    page = "index.html"
    print(f"🎮 Opening: {page}")

    # start browser in background
    threading.Thread(target=open_browser, args=(page,), daemon=True).start()

    # start server (blocking)
    run_server()

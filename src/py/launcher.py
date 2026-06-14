from functools import partial
import http.server
import socketserver
import webbrowser
import threading
import time
import os

PORT = 8000

from parser import generate_data_json,generate_data_js



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
            generate_data_js(name,folder)


def open_browser(page):
    time.sleep(0.5)  # wait server start
    url = f"http://localhost:{PORT}/{page}"
    webbrowser.open(url)



def run_server():
    root = os.getenv("QMROOT")

    handler = partial(
        http.server.SimpleHTTPRequestHandler,
        directory=root
    )

    with socketserver.TCPServer(("", PORT), handler) as httpd:
        print(f"Server running at http://localhost:{PORT}")
        print("SERVING FROM:", os.path.abspath(root))
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

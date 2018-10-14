from flask import Blueprint

class Client:
    def __init__(self):
        self.blueprint = Blueprint("client", __name__, static_folder="../webclient/dist", static_url_path="/")
        self.routes(self.blueprint)

    def routes(self, client):
        @client.route("/")
        def client_root():
            return client.send_static_file("index.html")
import os

from flask import Flask

from wms.server import ApiBlueprint, ClientBlueprint

class WillsMediaServer:
    def __init__(self):
        self.app = Flask(__name__)
        self.register_blueprints()
        self.startup_checks()
        self.start_server()
    
    def register_blueprints(self):
        self.app.register_blueprint(ApiBlueprint().blueprint, url_prefix="/api/v1")
        self.app.register_blueprint(ClientBlueprint().blueprint, url_prefix="/")
    
    def startup_checks(self):

        if not os.path.exists("./wms/server/webclient/dist/"):
            print("WebClient does not exist")
            print("Please refer to documentation on how to build")
            exit()
        
        # TODO: Perform database check
        # TODO: Perform non-python requirements check

    def start_server(self):
        self.app.run()

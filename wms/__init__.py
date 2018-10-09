from flask import Flask


class WillsMediaServer:
    def __init__(self):
        self.app = Flask(__name__)

        self.register_blueprints()
        
        self.start_server()
    
    def register_blueprints(self):
        from wms.server.views import api, client

        self.app.register_blueprint(api.API().blueprint, url_prefix="/api")
        self.app.register_blueprint(client.Client().blueprint, url_prefix="/")
    
    def start_server(self):
        self.app.run()

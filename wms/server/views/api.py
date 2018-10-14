from flask import Blueprint, jsonify

"""
API Documentation Located at: 
    https://app.swaggerhub.com/apis-docs/WillsMediaServer/WMS-API/1.0.0
"""

class Responses:
    OK = 200
    CREATED = 201
    BAD_REQUEST = 400
    UNAUTHORISED = 401
    NOT_FOUND = 404
    METHOD_NOT_ALLOWED = 405
    INTERNAL_SERVER_ERROR = 500
    NOT_IMPLEMENTED = 501


class API:
    def __init__(self):
        self.blueprint = Blueprint("api", __name__)
        
        self.film_endpoints()
        self.music_endpoints()
        self.tv_endpoints()
        self.user_endpoints()

    def film_endpoints(self):
        pass

    def music_endpoints(self):
        pass
    
    def tv_endpoints(self):
        pass
    
    def user_endpoints(self):
        pass

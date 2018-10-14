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
        
        self.filmEndpoints()
        self.musicEndpoints()
        self.tvEndpoints()
        self.userEndpoints()

    def filmEndpoints(self):
        pass

    def musicEndpoints(self):
        pass
    
    def tvEndpoints(self):
        pass
    
    def userEndpoints(self):
        pass

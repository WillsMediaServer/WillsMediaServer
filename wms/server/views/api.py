from flask import Blueprint, jsonify

BAD_REQUEST = 400
UNAUTHORISED = 401
FORBIDDEN = 403
NOT_FOUND = 404
METHOD_NOT_ALLOWED = 405

"""
|========================================================|===============================|
| URL                                                    | Name                          |
|========================================================|===============================|
| wms.url/                                               | Web Client                    |
| wms.url/api                                            | API Root                      |
| wms.url/api/v1                                         | API V1 Root                   |
| wms.url/api/v1/films                                   | Films Endpoint                |
| wms.url/api/v1/films/film/{id}                         | Film Endpoint                 |
| wms.url/api/v1/music                                   | Music Root                    |
| wms.url/api/v1/music/albums                            | Albums Endpoint               |
| wms.url/api/v1/music/album/{id}                        | Album Endpoint                |
| wms.url/api/v1/music/album/{id}/songs                  | Album Songs Endpoint          |
| wms.url/api/v1/music/artists                           | Artists Endpoint              |
| wms.url/api/v1/music/artist/{id}                       | Artist Endpoint               |
| wms.url/api/v1/music/artist/{id}/songs                 | Artist Songs Endpoint         |
| wms.url/api/v1/music/genres                            | Genres Endpoint               |
| wms.url/api/v1/music/genre/{id}                        | Genre Endpoint                |
| wms.url/api/v1/music/genre/{id}/songs                  | Genre Songs Endpoint          |
| wms.url/api/v1/music/songs                             | Songs Endpoint                |
| wms.url/api/v1/music/song/{id}                         | Song Endpoint                 |
| wms.url/api/v1/tv                                      | TV Endpoint                   |
| wms.url/api/v1/tv/shows                                | TV Shows Endpoint             |
| wms.url/api/v1/tv/show/{id}                            | TV Show Endpoint              |
| wms.url/api/v1/tv/show/{id}/seasons                    | TV Show Seasons Endpoint      |
| wms.url/api/v1/tv/show/{id}/season/{num}               | TV Show Season Endpoint       |
| wms.url/api/v1/tv/show/{id}/season/{num}/episodes      | TV Show Season Endpoint       |
| wms.url/api/v1/tv/show/{id}/season/{num}/episode/{num} | TV Show Season Endpoint       |
| wms.url/api/v1/users                                   | Users Endpoint                |
| wms.url/api/v1/users/authentication                    | Users Authentication Endpoint |
| wms.url/api/v1/user/{id}                               | User Endpoint                 |
| wms.url/api/v1/user/{id}/settings                      | User Settings Endpoint        |
|========================================================|===============================|
"""


class API:
    def __init__(self):
        self.blueprint = Blueprint("api", __name__)
        self.routes(self.blueprint)

    def routes(self, api):
        @api.route("/")
        def apiRoot():
            returnError = {
                "status": BAD_REQUEST,
                "message": "No API version specified"
            }
            return jsonify(error=returnError), BAD_REQUEST
        
        @api.route("/v1")
        def apiV1Root():
            returnError = {
                "status": BAD_REQUEST,
                "message": "No Endpoint specified"
            }
            return jsonify(error=returnError), BAD_REQUEST
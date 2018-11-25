import logging
import os
import sys
import time

from logging.config import dictConfig

from cheroot import wsgi

from flask import Flask, request

from flask_graphql import GraphQLView

from wms.server import ClientBlueprint
from wms.database.base import (MainBase, MusicBase, FilmBase, TVBase,
                            main_session, music_session, film_session, tv_session,
                            main_engine, music_engine, film_engine, tv_engine)
from wms.database.schema import schema


__version__ = "0.0.1"

class WillsMediaServer:
    def __init__(self):        
        self.startup_checks()
        self.setup_logging()

        self.app = Flask(__name__)
        
        self.setup_databases()
        self.register_blueprints()
        self.setup_flask()
        self.start_server()
    
    def startup_checks(self):
        if not os.path.exists(Directories.CLIENT_DIRECTORY):
            logging.critical("WebClient does not exist")
            logging.critical("Please refer to documentation on how to build")
            exit()
        
        if not os.path.exists(Directories.DATABASE_DIRECTORY):
            logging.error("Database directory doesn't exist, Creating")
            os.makedirs(Directories.DATABASE_DIRECTORY)

    def setup_logging(self):
        if not os.path.exists(Directories.LOG_DIRECTORY):
            os.makedirs(Directories.LOG_DIRECTORY)
        
        dictConfig({
            "version": 1,
            "formatters": {
                "default": {
                    "format": "[%(asctime)s] [%(levelname)s] %(message)s"
                }
            },
            "handlers": {
                "file": {
                    "class": "logging.handlers.TimedRotatingFileHandler",
                    "filename": os.path.join(Directories.LOG_DIRECTORY, "main.log"),
                    "backupCount": 10,
                    "formatter": "default"
                },
                "stdout": {
                    "class": "logging.StreamHandler",
                    "stream": sys.stdout,
                    "formatter": "default"
                }
            },
            "root": {
                "level": logging.DEBUG,
                "datefmt": '%d-%m-%Y %H:%M:%S',
                "handlers": [
                    "file",
                    "stdout"
                ]
            }
        })
    
    def register_blueprints(self):
        self.app.register_blueprint(ClientBlueprint().blueprint, url_prefix="/")

    def setup_flask(self):
        @self.app.after_request
        def request_logging(response):
            logging.debug(f"Request: {request.method} {request.remote_addr} {request.url}")
            return response

        @self.app.teardown_appcontext
        def shutdown_sessions(exception=None):
            main_session.remove()
            music_session.remove()
            film_session.remove()
            tv_session.remove() 

    def setup_databases(self):
        graphql_view = GraphQLView.as_view("graphql", schema=schema, graphiql=True)

        self.app.add_url_rule("/graphql", view_func=graphql_view)

        MainBase.metadata.create_all(main_engine)
        MusicBase.metadata.create_all(music_engine)
        FilmBase.metadata.create_all(film_engine)
        TVBase.metadata.create_all(tv_engine)

    def start_server(self):
        logging.info(f"Started WillsMediaSever at {time.strftime('%d-%m-%Y %H:%M:%S')}")
        address = "0.0.0.0", 5000
        server_name = f"WMS/v{__version__}"
        server = wsgi.Server(address, self.app, server_name=server_name)    
        server.start()


class Directories:
    ROOT_DIRECTORY = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
    WMS_DIRECTORY = os.path.join(ROOT_DIRECTORY, "wms")
    LOG_DIRECTORY = os.path.join(ROOT_DIRECTORY, "logs")
    DATABASE_DIRECTORY = os.path.join(ROOT_DIRECTORY, "database")
    CLIENT_DIRECTORY = os.path.join(WMS_DIRECTORY, "server", "webclient", "dist")

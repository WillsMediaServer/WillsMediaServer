from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker

db_uri = "sqlite:///database/{}"

# Database Engines

main_engine = create_engine(db_uri.format("main.db"))
music_engine = create_engine(db_uri.format("music.db"))
film_engine = create_engine(db_uri.format("film.db"))
tv_engine = create_engine(db_uri.format("tv.db"))


# Declaritive models

MainBase = declarative_base()
MainBase.metadata.engine = main_engine

MusicBase = declarative_base()
MusicBase.metadata.engine = music_engine

FilmBase = declarative_base()
FilmBase.metadata.engine = film_engine

TVBase = declarative_base()
TVBase.metadata.engine = tv_engine

# Database sessions 

main_session = scoped_session(sessionmaker(bind=main_engine))
MainBase.query = main_session.query_property()

music_session = scoped_session(sessionmaker(bind=music_engine))
MusicBase.query = music_session.query_property()

film_session = scoped_session(sessionmaker(bind=film_engine))
FilmBase.query = film_session.query_property()

tv_session = scoped_session(sessionmaker(bind=tv_engine))
TVBase.query = tv_session.query_property()

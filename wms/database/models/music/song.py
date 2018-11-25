from wms.database.base import MusicBase

from sqlalchemy import Column, String, ForeignKey, Integer

import uuid

class ModelSong(MusicBase):
    """
    Song Model
    """

    __tablename__ = "songs"

    id = Column("id", String(36), primary_key=True, default=uuid.uuid4)
    name = Column("name", String(255))
    length = Column("length", Integer)

    album_id = Column("album", ForeignKey("albums.id"))
    artist_id = Column("artist", ForeignKey("artists.id"))
    cover_id = Column("cover", ForeignKey("covers.id"))
    genre_id = Column("genre", ForeignKey("genres.id"))
    resource_id = Column("resources", ForeignKey("resources.id"))

from wms.database.base import MusicBase
from wms.database.models.music.album import ModelAlbum
from wms.database.models.music.song import ModelSong

from sqlalchemy import Column, String, Text
from sqlalchemy.orm import relationship

import uuid


class ModelArtist(MusicBase):
    """
    Artist Model
    """

    __tablename__ = "artists"

    id = Column("id", String(36), primary_key=True, default=uuid.uuid4)
    name = Column("name", String)
    description = Column("description", Text)
    type = Column("type", String(5))

    albums = relationship(ModelAlbum, backref="artist")
    songs = relationship(ModelSong, backref="artist")

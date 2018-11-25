from wms.database.base import MusicBase
from wms.database.models.music.album import ModelAlbum
from wms.database.models.music.song import ModelSong

from sqlalchemy import Column, String, Text
from sqlalchemy.orm import relationship

import uuid


class ModelCover(MusicBase):
    """
    Cover Art Model
    """

    __tablename__ = "covers"

    id = Column("id", String(36), primary_key=True, default=uuid.uuid4)
    location = Column("location", Text)

    albums = relationship(ModelAlbum, backref="cover")
    songs = relationship(ModelSong, backref="cover")

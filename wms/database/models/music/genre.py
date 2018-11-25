from wms.database.base import MusicBase
from wms.database.models.music.album import ModelAlbum
from wms.database.models.music.song import ModelSong

from sqlalchemy import Column, String, Text
from sqlalchemy.orm import relationship

import uuid


class ModelGenre(MusicBase):
    """
    Music Genre Model
    """

    __tablename__ = "genres"

    id = Column("id", String(36), primary_key=True, default=uuid.uuid4)
    name = Column("name", String)
    description = Column("description", Text)

    albums = relationship(ModelAlbum, backref="genre")
    songs = relationship(ModelSong, backref="genre")

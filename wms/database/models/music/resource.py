from wms.database.base import MusicBase
from wms.database.models.music.song import ModelSong

from sqlalchemy import Column, String, Text
from sqlalchemy.orm import relationship

import uuid


class ModelResource(MusicBase):
    """
    Music Resource Model
    """

    __tablename__ = "resources"

    id = Column("id", String(36), primary_key=True, default=uuid.uuid4)
    format = Column("format", String)
    location = Column("location", Text)

    songs = relationship(ModelSong, backref="resource")

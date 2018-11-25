from wms.database.base import MusicBase
from wms.database.models.music.song import ModelSong

from sqlalchemy import Column, String, ForeignKey, Date
from sqlalchemy.orm import relationship

import uuid


class ModelAlbum(MusicBase):
    """
    Album Model
    """

    __tablename__ = "albums"

    id = Column("id", String(36), primary_key=True, default=uuid.uuid4)
    name = Column("name", String)
    release_date = Column("release_date", Date)

    artist_id = Column("artist", String(36), ForeignKey("artists.id"))
    cover_id = Column("cover", String(36), ForeignKey("covers.id"))
    genre_id = Column("genre", String(36), ForeignKey("genres.id"))

    songs = relationship(ModelSong, backref="album")

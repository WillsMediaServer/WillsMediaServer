from graphene_sqlalchemy import SQLAlchemyObjectType

from wms.database.base import music_session
from wms.database.models.music.song import ModelSong

import graphene

class Song(SQLAlchemyObjectType):
    class Meta:
        model = ModelSong
        interfaces = (graphene.relay.Node, )

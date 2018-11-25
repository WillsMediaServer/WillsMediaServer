from graphene_sqlalchemy import SQLAlchemyObjectType

from wms.database.base import music_session
from wms.database.models.music.album import ModelAlbum

import graphene

class Album(SQLAlchemyObjectType):
    class Meta:
        model = ModelAlbum
        interfaces = (graphene.relay.Node, )

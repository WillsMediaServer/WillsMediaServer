from graphene_sqlalchemy import SQLAlchemyObjectType

from wms.database.base import music_session
from wms.database.models.music.genre import ModelGenre

import graphene

class Genre(SQLAlchemyObjectType):
    class Meta:
        model = ModelGenre
        interfaces = (graphene.relay.Node, )

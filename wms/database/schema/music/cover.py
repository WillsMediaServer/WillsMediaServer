from graphene_sqlalchemy import SQLAlchemyObjectType

from wms.database.base import music_session
from wms.database.models.music.cover import ModelCover

import graphene

class Cover(SQLAlchemyObjectType):
    class Meta:
        model = ModelCover
        interfaces = (graphene.relay.Node, )

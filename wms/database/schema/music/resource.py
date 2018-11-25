from graphene_sqlalchemy import SQLAlchemyObjectType

from wms.database.base import music_session
from wms.database.models.music.resource import ModelResource

import graphene

class Resource(SQLAlchemyObjectType):
    class Meta:
        model = ModelResource
        interfaces = (graphene.relay.Node, )

from graphene_sqlalchemy import SQLAlchemyObjectType

from wms.database.base import main_session
from wms.database.models.main.user import ModelUser

import graphene

class User(SQLAlchemyObjectType):
    class Meta:
        model = ModelUser
        interfaces = (graphene.relay.Node, )

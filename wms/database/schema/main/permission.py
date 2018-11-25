from graphene_sqlalchemy import SQLAlchemyObjectType

from wms.database.base import main_session
from wms.database.models.main.permission import ModelPermission

import graphene

class Permission(SQLAlchemyObjectType):
    class Meta:
        model = ModelPermission
        interfaces = (graphene.relay.Node, )

from graphene_sqlalchemy import SQLAlchemyObjectType

from wms.database.base import main_session
from wms.database.models.main.setting import ModelSetting

import graphene

class Setting(SQLAlchemyObjectType):
    class Meta:
        model = ModelSetting
        interfaces = (graphene.relay.Node, )

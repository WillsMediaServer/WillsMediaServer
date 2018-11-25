from graphene_sqlalchemy import SQLAlchemyObjectType

from wms.database.base import main_session
from wms.database.models.main.setting import ModelSetting
from wms.database.schema.utils import input_to_dictionary

import graphene


class SettingAttribute:
    name = graphene.String(description="Name of the setting")
    description = graphene.String(description="Description of the setting")
    category = graphene.String(description="Category of the setting")
    value = graphene.String(description="The settings value")


class Setting(SQLAlchemyObjectType):
    class Meta:
        model = ModelSetting
        interfaces = (graphene.relay.Node, )


class CreateSettingInput(graphene.InputObjectType, SettingAttribute):
    pass


class CreateSetting(graphene.Mutation):
    setting = graphene.Field(lambda: Setting, description="Setting created by the mutation")

    class Arguments:
        input = CreateSettingInput(required=True)
    
    def mutate(self, info, input):
        data = input_to_dictionary(input)

        setting = ModelSetting(**data)
        main_session.add(setting)
        main_session.commit()

        return CreateSetting(setting=setting)


class UpdateSettingInput(graphene.InputObjectType, SettingAttribute):
    id = graphene.ID(required=True, description="ID of the Setting to update")


class UpdateSetting(graphene.Mutation):
    setting = graphene.Field(lambda: Setting, description="Setting to update")

    class Arguments:
        input = UpdateSettingInput(required=True)
    
    def mutate(self, info, input):
        data = input_to_dictionary(input)

        setting = main_session.query(ModelSetting).filter_by(id=data["id"])
        setting.update(data)
        main_session.commit()
        setting = main_session.query(ModelSetting).filter_by(id=data["id"]).first()

        return UpdateSetting(setting=setting)

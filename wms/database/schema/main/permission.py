from graphene_sqlalchemy import SQLAlchemyObjectType

from wms.database.base import main_session
from wms.database.models.main.permission import ModelPermission
from wms.database.schema.utils import input_to_dictionary

import graphene


class PermissionAttribute:
    name = graphene.String(description="The name for the user permission level")
    level = graphene.Int(description="The integer for the user level")


class Permission(SQLAlchemyObjectType):
    class Meta:
        model = ModelPermission
        interfaces = (graphene.relay.Node, )


class CreatePermissionInput(graphene.InputObjectType, PermissionAttribute):
    pass


class CreatePermission(graphene.Mutation):
    permission = graphene.Field(lambda: Permission, description="Permission created by the mutation")

    class Arguments:
        input = CreatePermissionInput(required=True)
    
    def mutate(self, info, input):
        data = input_to_dictionary(input)

        permission = Permission(**data)
        main_session.add(permission)
        main_session.commit()

        return CreatePermission(permission=permission)


class UpdatePermissionInput(graphene.InputObjectType, PermissionAttribute):
    id = graphene.ID(required=True, description="Permission id to update")


class UpdatePermission(graphene.Mutation):
    permission = graphene.Field(lambda: Permission, description="Permission to update")

    class Arguments:
        input = UpdatePermissionInput(required=True)
    
    def mutate(self, info, input):
        data = input_to_dictionary(input)

        permission = main_session.query(ModelPermission).filter_by(id=data["id"])
        permission.update(data)
        main_session.commit()
        permission = main_session.query(ModelPermission).filter_by(id=data["id"]).first()

        return UpdatePermission(permission=permission)

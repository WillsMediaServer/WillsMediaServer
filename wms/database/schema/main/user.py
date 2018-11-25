from graphene_sqlalchemy import SQLAlchemyObjectType

from wms.database.base import main_session
from wms.database.models.main.user import ModelUser
from wms.database.schema.utils import input_to_dictionary

import graphene


class UserAttribute:
    username = graphene.String(description="User's username")
    password = graphene.String(description="User's password")
    first_name = graphene.String(description="User's first name")
    last_name = graphene.String(description="User's last name")
    email = graphene.String(description="User's email address")
    permission_id = graphene.ID(description="ID of the User's permissions")


class User(SQLAlchemyObjectType):
    class Meta:
        model = ModelUser
        interfaces = (graphene.relay.Node, )


class CreateUserInput(graphene.InputObjectType, UserAttribute):
    pass


class CreateUser(graphene.Mutation):
    user = graphene.Field(lambda: User, description="User created by the mutation")

    class Arguments:
        input = CreateUserInput(required=True)
    
    def mutate(self, info, input):
        data = input_to_dictionary(input)

        user = ModelUser(**data)
        main_session.add(user)
        main_session.commit()

        return CreateUser(user=user)


class UpdateUserInput(graphene.InputObjectType, UserAttribute):
    id = graphene.ID(required=True, description="ID of the User to update")


class UpdateUser(graphene.Mutation):
    user = graphene.Field(lambda: User, description="User to update")

    class Arguments:
        input = UpdateUserInput(required=True)
    
    def mutate(self, info, input):
        data = input_to_dictionary(input)

        user = main_session.query(ModelUser).filter_by(id=data["id"])
        user.update(data)
        main_session.commit()
        user = main_session.query(ModelUser).filter_by(id=data["id"]).first()

        return UpdateUser(user=user)

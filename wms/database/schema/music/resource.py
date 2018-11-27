from graphene_sqlalchemy import SQLAlchemyObjectType

from wms.database.base import music_session
from wms.database.models.music.resource import ModelResource
from wms.database.schema.utils import input_to_dictionary

import graphene


class ResourceAttribute:
    format = graphene.String(description="The file format of the resource")
    location = graphene.String(description="The file location of the resource")


class Resource(SQLAlchemyObjectType):
    class Meta:
        model = ModelResource
        interfaces = (graphene.relay.Node, )


class CreateResourceInput(graphene.InputObjectType, ResourceAttribute):
    pass


class CreateResource(graphene.Mutation):
    resource = graphene.Field(lambda: Resource, description="The resource the mutation creates")

    class Arguments:
        input = CreateResourceInput(required=True)
    
    def mutate(self, info, input):
        data = input_to_dictionary(input)

        resource = ModelResource(**data)
        music_session.add(resource)
        music_session.commit()

        return CreateResource(resource=resource)


class UpdateResourceInput(graphene.InputObjectType, ResourceAttribute):
    id = graphene.ID(required=True, description="ID of the resource to update")


class UpdateResource(graphene.Mutation):
    resource = graphene.Field(lambda: Resource, description="Resource to update")

    class Arguments:
        input = UpdateResourceInput(required=True)

    def mutate(self, info, input):
        data = input_to_dictionary(input)

        resource = music_session.query(ModelResource).filter_by(id=data["id"])
        resource.update(data)
        music_session.commit()
        user = music_session.query(ModelResource).filter_by(id=data["id"]).first()

        return UpdateResource(resource=resource)

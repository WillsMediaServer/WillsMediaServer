from graphene_sqlalchemy import SQLAlchemyObjectType

from wms.database.base import music_session
from wms.database.models.music.cover import ModelCover
from wms.database.schema.utils import input_to_dictionary

import graphene


class CoverAttribute:
    location = graphene.String(description="Where the image file is stored")


class Cover(SQLAlchemyObjectType):
    class Meta:
        model = ModelCover
        interfaces = (graphene.relay.Node, )


class CreateCoverInput(graphene.InputObjectType, CoverAttribute):
    pass


class CreateCover(graphene.Mutation):
    cover = graphene.Field(lambda: Cover, description="The cover the mutation creates")

    class Arguments:
        input = CreateCoverInput(required=True)
    
    def mutate(self, info, input):
        data = input_to_dictionary(input)

        cover = ModelCover(**data)
        music_session.add(cover)
        music_session.commit()

        return CreateCover(cover=cover)


class UpdateCoverInput(graphene.InputObjectType, CoverAttribute):
    id = graphene.ID(required=True, description="ID of the cover to update")


class UpdateCover(graphene.Mutation):
    cover = graphene.Field(lambda: Cover, description="Cover to update")

    class Arguments:
        input = UpdateCoverInput(required=True)

    def mutate(self, info, input):
        data = input_to_dictionary(input)

        cover = music_session.query(ModelCover).filter_by(id=data["id"])
        cover.update(data)
        music_session.commit()
        user = music_session.query(ModelCover).filter_by(id=data["id"]).first()

        return UpdateCover(cover=cover)

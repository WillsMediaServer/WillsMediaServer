from graphene_sqlalchemy import SQLAlchemyObjectType

from wms.database.base import music_session
from wms.database.models.music.genre import ModelGenre
from wms.database.schema.utils import input_to_dictionary

import graphene


class GenreAttribute:
    name = graphene.String(description="Name of the genre")
    description = graphene.String(description="Description of the genre")


class Genre(SQLAlchemyObjectType):
    class Meta:
        model = ModelGenre
        interfaces = (graphene.relay.Node, )


class CreateGenreInput(graphene.InputObjectType, GenreAttribute):
    pass


class CreateGenre(graphene.Mutation):
    genre = graphene.Field(lambda: Genre, description="The genre the mutation creates")

    class Arguments:
        input = CreateGenreInput(required=True)
    
    def mutate(self, info, input):
        data = input_to_dictionary(input)

        genre = ModelGenre(**data)
        music_session.add(genre)
        music_session.commit()

        return CreateGenre(genre=genre)


class UpdateGenreInput(graphene.InputObjectType, GenreAttribute):
    id = graphene.ID(required=True, description="ID of the genre to update")


class UpdateGenre(graphene.Mutation):
    genre = graphene.Field(lambda: Genre, description="Genre to update")

    class Arguments:
        input = UpdateGenreInput(required=True)

    def mutate(self, info, input):
        data = input_to_dictionary(input)

        genre = music_session.query(ModelGenre).filter_by(id=data["id"])
        genre.update(data)
        music_session.commit()
        user = music_session.query(ModelGenre).filter_by(id=data["id"]).first()

        return UpdateGenre(genre=genre)

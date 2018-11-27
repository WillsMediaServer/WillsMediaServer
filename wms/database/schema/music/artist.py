from graphene_sqlalchemy import SQLAlchemyObjectType

from wms.database.base import music_session
from wms.database.models.music.artist import ModelArtist
from wms.database.schema.utils import input_to_dictionary

import graphene


class ArtistAttribute:
    name = graphene.String(description="Name of the artist")
    description = graphene.String(description="Artists Description")
    type = graphene.String(description="Shows whether the artist is solo or a group")


class Artist(SQLAlchemyObjectType):
    class Meta:
        model = ModelArtist
        interfaces = (graphene.relay.Node, )


class CreateArtistInput(graphene.InputObjectType, ArtistAttribute):
    pass


class CreateArtist(graphene.Mutation):
    artist = graphene.Field(lambda: Artist, description="The Artist the mutation creates")

    class Arguments:
        input = CreateArtistInput(required=True)
    
    def mutate(self, info, input):
        data = input_to_dictionary(input)

        artist = ModelArtist(**data)
        music_session.add(artist)
        music_session.commit()

        return CreateArtist(artist=artist)


class UpdateArtistInput(graphene.InputObjectType, ArtistAttribute):
    id = graphene.ID(required=True, description="ID of the Artist to update")


class UpdateArtist(graphene.Mutation):
    artist = graphene.Field(lambda: Artist, description="Artist to update")

    class Arguments:
        input = UpdateArtistInput(required=True)

    def mutate(self, info, input):
        data = input_to_dictionary(input)

        artist = music_session.query(ModelArtist).filter_by(id=data["id"])
        artist.update(data)
        music_session.commit()
        user = music_session.query(ModelArtist).filter_by(id=data["id"]).first()

        return UpdateArtist(artist=artist)

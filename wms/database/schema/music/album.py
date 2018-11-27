from graphene_sqlalchemy import SQLAlchemyObjectType

from wms.database.base import music_session
from wms.database.models.music.album import ModelAlbum
from wms.database.schema.utils import input_to_dictionary

import graphene


class AlbumAttribute:
    name = graphene.String(description="Name of the album")
    release_date = graphene.Date(description="When the album was released")
    artist_id = graphene.String(description="ID of the albums artist")
    cover_id = graphene.String(description="ID of the albums cover")
    genre_id = graphene.String(description="ID of the albums genre")


class Album(SQLAlchemyObjectType):
    class Meta:
        model = ModelAlbum
        interfaces = (graphene.relay.Node, )


class CreateAlbumInput(graphene.InputObjectType, AlbumAttribute):
    pass


class CreateAlbum(graphene.Mutation):
    album = graphene.Field(lambda: Album, description="The album the mutation creates")

    class Arguments:
        input = CreateAlbumInput(required=True)
    
    def mutate(self, info, input):
        data = input_to_dictionary(input)

        album = ModelAlbum(**data)
        music_session.add(album)
        music_session.commit()

        return CreateAlbum(album=album)


class UpdateAlbumInput(graphene.InputObjectType, AlbumAttribute):
    id = graphene.ID(required=True, description="ID of the album to update")


class UpdateAlbum(graphene.Mutation):
    album = graphene.Field(lambda: Album, description="Album to update")

    class Arguments:
        input = UpdateAlbumInput(required=True)

    def mutate(self, info, input):
        data = input_to_dictionary(input)

        album = music_session.query(ModelAlbum).filter_by(id=data["id"])
        album.update(data)
        music_session.commit()
        user = music_session.query(ModelAlbum).filter_by(id=data["id"]).first()

        return UpdateAlbum(album=album)

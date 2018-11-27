from graphene_sqlalchemy import SQLAlchemyObjectType

from wms.database.base import music_session
from wms.database.models.music.song import ModelSong
from wms.database.schema.utils import input_to_dictionary

import graphene


class SongAttribute:
    name = graphene.String(description="Name of the song")
    length = graphene.String(description="Length of the song in seconds")
    album_id = graphene.String(description="ID of the song's album")
    artist_id = graphene.String(description="ID of the song's artist")
    cover_id = graphene.String(description="ID of the song's cover")
    genre_id = graphene.String(description="ID of the song's genre")
    resource_id = graphene.String(description="ID of the song's resource")


class Song(SQLAlchemyObjectType):
    class Meta:
        model = ModelSong
        interfaces = (graphene.relay.Node, )


class CreateSongInput(graphene.InputObjectType, SongAttribute):
    pass


class CreateSong(graphene.Mutation):
    song = graphene.Field(lambda: Song, description="The song the mutation creates")

    class Arguments:
        input = CreateSongInput(required=True)
    
    def mutate(self, info, input):
        data = input_to_dictionary(input)

        song = ModelSong(**data)
        music_session.add(song)
        music_session.commit()

        return CreateSong(song=song)


class UpdateSongInput(graphene.InputObjectType, SongAttribute):
    id = graphene.ID(required=True, description="ID of the song to update")


class UpdateSong(graphene.Mutation):
    song = graphene.Field(lambda: Song, description="Song to update")

    class Arguments:
        input = UpdateSongInput(required=True)

    def mutate(self, info, input):
        data = input_to_dictionary(input)

        song = music_session.query(ModelSong).filter_by(id=data["id"])
        song.update(data)
        music_session.commit()
        user = music_session.query(ModelSong).filter_by(id=data["id"]).first()

        return UpdateSong(song=song)

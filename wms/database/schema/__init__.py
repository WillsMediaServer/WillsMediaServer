from graphene_sqlalchemy import SQLAlchemyConnectionField

import graphene

from wms.database.schema.main import user, permission, setting
from wms.database.schema.music import album, artist, cover, genre, resource, song


class Query(graphene.ObjectType):
    node = graphene.relay.Node.Field()

    # Main
    users = graphene.relay.Node.Field(user.User)
    users_list = SQLAlchemyConnectionField(user.User)

    permissions = graphene.relay.Node.Field(permission.Permission)
    permissions_list = SQLAlchemyConnectionField(permission.Permission)

    settings = graphene.relay.Node.Field(setting.Setting)
    settings_list = SQLAlchemyConnectionField(permission.Permission)

    # Music
    albums = graphene.relay.Node.Field(album.Album)
    albums_list = SQLAlchemyConnectionField(album.Album)

    artists = graphene.relay.Node.Field(artist.Artist)
    artists_list = SQLAlchemyConnectionField(artist.Artist)

    covers = graphene.relay.Node.Field(cover.Cover)
    covers_list = SQLAlchemyConnectionField(cover.Cover)

    genres = graphene.relay.Node.Field(genre.Genre)
    genres_list = SQLAlchemyConnectionField(genre.Genre)

    resources = graphene.relay.Node.Field(resource.Resource)
    resources_list = SQLAlchemyConnectionField(resource.Resource)

    songs = graphene.relay.Node.Field(song.Song)
    songs_list = SQLAlchemyConnectionField(song.Song)


class Mutation(graphene.ObjectType):
    # Main
    create_user = user.CreateUser.Field()
    update_user = user.UpdateUser.Field()

    create_setting = setting.CreateSetting.Field()
    update_setting = setting.UpdateSetting.Field()

    create_permission = permission.CreatePermission.Field()
    update_permission = permission.UpdatePermission.Field()

    # Music
    create_album = album.CreateAlbum.Field()
    update_album = album.UpdateAlbum.Field()

    create_artist = artist.CreateArtist.Field()
    update_artist = artist.UpdateArtist.Field()

    create_cover = cover.CreateCover.Field()
    update_cover = cover.UpdateCover.Field()

    create_genre = genre.CreateGenre.Field()
    update_genre = genre.UpdateGenre.Field()

    create_resource = resource.CreateResource.Field()
    update_resource = resource.UpdateResource.Field()

    create_song = song.CreateSong.Field()
    update_song = song.UpdateSong.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)

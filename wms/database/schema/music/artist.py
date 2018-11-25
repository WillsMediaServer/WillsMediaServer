from graphene_sqlalchemy import SQLAlchemyObjectType

from wms.database.base import music_session
from wms.database.models.music.artist import ModelArtist

import graphene

class Artist(SQLAlchemyObjectType):
    class Meta:
        model = ModelArtist
        interfaces = (graphene.relay.Node, )

"""
API Documentation Located at: 
    https://app.swaggerhub.com/apis-docs/WillsMediaServer/WMS-API/1.0.0
"""

from wms.server.api import music


class Api:
    def __init__(self, blueprint):
        self.api = blueprint

        music.AlbumApi(self.api)
        music.ArtistApi(self.api)
        music.GenreApi(self.api)
        music.SongApi(self.api)

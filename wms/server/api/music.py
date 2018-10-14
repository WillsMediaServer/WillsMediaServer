class AlbumApi:
    def __init__(self, api):
        self.routes(api)
    
    def routes(self, api):

        @api.route("/music/albums", methods=["GET"])
        def get_albums():
            return "get albums"
        
        @api.route("/music/albums", methods=["POST"])
        def add_album():
            return "add an album"
        
        @api.route("/music/album/<id>", methods=["GET"])
        def get_album(id):
            return "get an album"
        
        @api.route("/music/album/<id>", methods=["PUT"])
        def update_album(id):
            return "update an album"
        
        @api.route("/music/album/<id>", methods=["DELETE"])
        def delete_album(id):
            return "delete an album"

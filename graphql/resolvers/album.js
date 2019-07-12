/**
|--------------------------------------------------
| Wills Media Server
| graphql/resolvers/album.js
| by wsngamerz
|--------------------------------------------------
*/

import Album from "../../models/album"


export function getAlbumById(id) {
    return Album.findById(id)
        .populate("artists")
        .populate("covers")
        .populate("genres")
        .populate("songs")
}


export default {
    albums: async () => {
        try {
            const albums = await Album.find({})
            
            return albums.map(album => {
                return getAlbumById(album._id)
            })
        } catch(error) {
            throw error
        }
    },

    createAlbum: async (args) => {
        const newAlbum = new Album({
            name: args.albumInput.name,
            dateAdded: new Date(),
            dateReleased: args.albumInput.dateReleased,

            artists: args.albumInput.artistIds,
            covers: args.albumInput.coverIds,
            genres: args.albumInput.genreIds,
            songs: args.albumInput.songIds
        })

        const result = await newAlbum.save()

        return getAlbumById(result._doc)
    },
}

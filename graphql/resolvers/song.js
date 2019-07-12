/**
|--------------------------------------------------
| Wills Media Server
| graphql/resolvers/song.js
| by wsngamerz
|--------------------------------------------------
*/

import Song from "../../models/song"


export function getSongById(id) {
    return Song.findById(id)
        .populate("albums")
        .populate("artists")
        .populate("covers")
        .populate("genres")
        .populate("resources")
}


export default {
    songs: async () => {
        try {
            const songs = await Song.find({})
            
            return songs.map(song => {
                return getSongById(song._id)
            })
        } catch(error) {
            throw error
        }

        
    },

    createSong: async (args) => {
        try {
            const newSong = new Song({
                name: args.songInput.name,
                length: args.songInput.length,
                dateAdded: new Date(),
                dateReleased: new Date(args.songInput.dateReleased),
                numberOfPlays: args.songInput.numberOfPlays,

                albums: args.songInput.albumIds,
                artists: args.songInput.artistIds,
                covers: args.songInput.coverIds,
                genres: args.songInput.genreIds,
                resources: args.songInput.resourceIds
            })

            const result = await newSong.save()

            return getSongById(result._id)

        } catch(error) {
            throw error
        }
    },
}

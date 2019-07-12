/**
|--------------------------------------------------
| Wills Media Server
| graphql/resolvers/artist.js
| by wsngamerz
|--------------------------------------------------
*/

import Artist from "../../models/artist"


export function getArtistById(id) {
    return Artist.findById(id)
        .populate("covers")
        .populate("songs")
}


export default {
    artists: async () => {
        try {
            const artists = await Artist.find({})
            
            return artists.map(artist => {
                return getArtistById(artist._id)
            })
        } catch(error) {
            throw error
        }
    },
    
    createArtist: async (args) => {
        try {
            const newArtist = new Artist({
                name: args.artistInput.name,
                description: args.artistInput.description,
                isBand: args.artistInput.isBand,
                dateAdded: new Date(),
                
                covers: args.artistInput.coverIds,
                songs: args.artistInput.songIds
            })

            const result = await newArtist.save()

            return getArtistById(result._id)
        } catch(error) {
            throw error
        }
    },
}

/**
|--------------------------------------------------
| Wills Media Server
| graphql/resolvers/musicGenre.js
| by wsngamerz
|--------------------------------------------------
*/

import MusicGenre from "../../models/musicGenre"


export function getMusicGenreById(id) {
    return MusicGenre.findById(id)
}


export default {
    musicGenres: async () => {
        try {
            const musicGenres = await MusicGenre.find({})
            
            return musicGenres.map(musicGenre => {
                return { ...musicGenre._doc }
            })
        } catch(error) {
            throw error
        }
    },
    
    createMusicGenre: async (args) => {
        const newMusicGenre = new MusicGenre({
            name: args.musicGenreInput.name,
            description: args.musicGenreInput.description
        })

        const result = await newMusicGenre.save()

        return { ...result._doc }
    },
}

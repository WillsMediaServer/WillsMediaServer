/**
|--------------------------------------------------
| Wills Media Server
| graphql/resolvers/musicCover.js
| by wsngamerz
|--------------------------------------------------
*/

import MusicCover from "../../models/musicCover"


export function getMusicCoverById(id) {
    return MusicCover.findById(id)
}


export default {
    musicCovers: async () => {
        try {
            const musicCovers = await MusicCover.find({})
            
            return musicCovers.map(musicCover => {
                return { ...musicCover._doc }
            })
        } catch(error) {
            throw error
        }
    },
    
    createMusicCover: async (args) => {
        const newMusicCover = new MusicCover({
            format: args.musicCoverInput.format,
            location: args.musicCoverInput.location
        })

        const result = await newMusicCover.save()

        return { ...result._doc }
    },
}

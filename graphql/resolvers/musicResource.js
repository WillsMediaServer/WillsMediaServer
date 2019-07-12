/**
|--------------------------------------------------
| Wills Media Server
| graphql/resolvers/musicResource.js
| by wsngamerz
|--------------------------------------------------
*/

import MusicResource from "../../models/musicResource"


export function getMusicResourceById(id) {
    return MusicResource.findById(id)
}


export default {
    musicResources: async () => {
        try {
            const musicResources = await MusicResource.find({})
            
            return musicResources.map(musicResource => {
                return { ...musicResource._doc }
            })
        } catch(error) {
            throw error
        }
    },
    
    createMusicResource: async (args) => {
        const newMusicResource = new MusicResource({
            format: args.musicResourceInput.format,
            location: args.musicResourceInput.location
        })

        const result = await newMusicResource.save()

        return { ...result._doc }
    },
}

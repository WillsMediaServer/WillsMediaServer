/**
|--------------------------------------------------
| Wills Media Server
| models/musicCover.js
| by wsngamerz
|--------------------------------------------------
*/

import mongoose from "mongoose"

const musicCoverSchema = new mongoose.Schema({
    format: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})

export default mongoose.model("MusicCover", musicCoverSchema, "musicCovers")

/**
|--------------------------------------------------
| Wills Media Server
| models/musicCover.js
| by wsngamerz
|--------------------------------------------------
*/

import mongoose from "mongoose"

const musicCoverSchema = new mongoose.Schema({
    format:   { type: String },
    location: { type: String }
})

export default mongoose.model("MusicCover", musicCoverSchema, "musicCovers")

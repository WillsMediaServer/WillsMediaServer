/**
|--------------------------------------------------
| Wills Media Server
| models/musicResource.js
| by wsngamerz
|--------------------------------------------------
*/

import mongoose from "mongoose"

const musicResourceSchema = new mongoose.Schema({
    format:   { type: String },
    location: { type: String }
})

export default mongoose.model("MusicResource", musicResourceSchema, "musicResources")

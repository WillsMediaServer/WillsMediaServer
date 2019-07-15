/**
|--------------------------------------------------
| Wills Media Server
| models/musicResource.js
| by wsngamerz
|--------------------------------------------------
*/

import mongoose from "mongoose"

const musicResourceSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ["image", "audio", "video"]
    },
    format: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    metadata: {
        width: {
            type: Number,
            required: false
        },
        height: {
            type: Number,
            required: false
        },
        length: {
            type: Number,
            required: false
        }
    }
})

export default mongoose.model("MusicResource", musicResourceSchema, "musicResources")

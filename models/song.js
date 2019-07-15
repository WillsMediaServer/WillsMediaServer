/**
|--------------------------------------------------
| Wills Media Server
| models/song.js
| by wsngamerz
|--------------------------------------------------
*/

import mongoose from "mongoose"

const songSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        required: true
    },
    dateReleased: {
        type: Date,
        required: false
    },
    numberOfPlays: {
        type: Number,
        required: false,
        default: 0
    },
    
    albums:    [{ type: mongoose.Schema.Types.ObjectId, ref: "Album" }],
    artists:   [{ type: mongoose.Schema.Types.ObjectId, ref: "Artist" }],
    covers:    [{ type: mongoose.Schema.Types.ObjectId, ref: "MusicCover" }],
    genres:    [{ type: mongoose.Schema.Types.ObjectId, ref: "MusicGenre" }],
    resources: [{ type: mongoose.Schema.Types.ObjectId, ref: "MusicResource" }]
})

export default mongoose.model("Song", songSchema, "songs")

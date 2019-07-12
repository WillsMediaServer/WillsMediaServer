/**
|--------------------------------------------------
| Wills Media Server
| models/song.js
| by wsngamerz
|--------------------------------------------------
*/

import mongoose from "mongoose"

const songSchema = new mongoose.Schema({
    name:          { type: String, required: true },
    length:        { type: Number },
    dateAdded:     { type: Date },
    dateReleased:  { type: Date },
    numberOfPlays: { type: Number },
    
    albums:    [{ type: mongoose.Schema.Types.ObjectId, ref: "Album" }],
    artists:   [{ type: mongoose.Schema.Types.ObjectId, ref: "Artist" }],
    covers:    [{ type: mongoose.Schema.Types.ObjectId, ref: "MusicCover" }],
    genres:    [{ type: mongoose.Schema.Types.ObjectId, ref: "MusicGenre" }],
    resources: [{ type: mongoose.Schema.Types.ObjectId, ref: "MusicResource" }]
})

export default mongoose.model("Song", songSchema, "songs")

/**
|--------------------------------------------------
| Wills Media Server
| models/album.js
| by wsngamerz
|--------------------------------------------------
*/

import mongoose from "mongoose"

const albumSchema = new mongoose.Schema({
    name:         { type: String, required: true },
    dateAdded:    { type: Date },
    dateReleased: { type: Date },
    
    artists: [{ type: mongoose.Schema.Types.ObjectId, ref: "Artist" }],
    covers:  [{ type: mongoose.Schema.Types.ObjectId, ref: "MusicCover" }],
    genres:  [{ type: mongoose.Schema.Types.ObjectId, ref: "MusicGenre" }],
    songs:   [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }]
})

export default mongoose.model("Album", albumSchema, "albums")

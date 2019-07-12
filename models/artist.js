/**
|--------------------------------------------------
| Wills Media Server
| models/artist.js
| by wsngamerz
|--------------------------------------------------
*/

import mongoose from "mongoose"

const artistSchema = new mongoose.Schema({
    name:        { type: String, required: true },
    description: { type: String },
    isBand:      { type: Boolean },
    dateAdded:   { type: Date },
    
    covers: [{ type: mongoose.Schema.Types.ObjectId, ref: "MusicCover" }],
    songs:  [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }]
})

export default mongoose.model("Artist", artistSchema, "artists")

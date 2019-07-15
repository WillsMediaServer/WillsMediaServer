/**
|--------------------------------------------------
| Wills Media Server
| models/album.js
| by wsngamerz
|--------------------------------------------------
*/

import mongoose from "mongoose"

const albumSchema = new mongoose.Schema({
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
    albumType: {
        type: [String],
        required: true,
        enum: ["Album", "Single", "EP", "Compilation", "Soundtrack", "Spokenword", "Interview", "Audiobook", "Audio drama", "Live", "Remix", "DJ-mix", "Mixtape", "Other"],
        default: "Album"
    },
    
    artists: [{ type: mongoose.Schema.Types.ObjectId, ref: "Artist" }],
    covers:  [{ type: mongoose.Schema.Types.ObjectId, ref: "MusicCover" }],
    genres:  [{ type: mongoose.Schema.Types.ObjectId, ref: "MusicGenre" }],
    songs:   [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }]
})

export default mongoose.model("Album", albumSchema, "albums")

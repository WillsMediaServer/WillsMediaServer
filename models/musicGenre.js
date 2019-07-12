/**
|--------------------------------------------------
| Wills Media Server
| models/musicGenre.js
| by wsngamerz
|--------------------------------------------------
*/

import mongoose from "mongoose"

const musicGenreSchema = new mongoose.Schema({
    name:        { type: String, required: true },
    description: { type: String }
})

export default mongoose.model("MusicGenre", musicGenreSchema, "musicGenres")

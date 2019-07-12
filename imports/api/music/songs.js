import { Mongo } from "meteor/mongo";
import SimpleSchema from 'simpl-schema';

import { Albums } from "./albums";
import { Artists } from "./artists";
import { MusicGenres } from "./musicGenre";
import { MusicResources } from "./musicResource";


const Songs = new Mongo.Collection("songs")

// Setup Song's Schema
const songSchema = new SimpleSchema({
    name: String,
    artistIds: [String],
    albumIds: [String],
    coverIds: [String],
    genreIds: [String],
    resourceIds: [String],
    length: SimpleSchema.Integer,
    dateAdded: Date,
    numberOfPlays: SimpleSchema.Integer
})

// Apply the Schema
Songs.schema = songSchema

Songs.addLinks({
    "albums": {
        type: "many",
        collection: Albums,
        field: "albumIds"
    },
    "artists": {
        type: "many",
        collection: Artists,
        field: "artistIds"
    }
})

export { Songs, songSchema }

import { Mongo } from "meteor/mongo";
import SimpleSchema from 'simpl-schema';

const MusicGenres = new Mongo.Collection("music_genres")

// Setup MusicGenres's Schema
const musicGenreSchema = new SimpleSchema({
    name: String,
    description: String
})

// Apply the schema
MusicGenres.schema = musicGenreSchema

export { MusicGenres, musicGenreSchema }

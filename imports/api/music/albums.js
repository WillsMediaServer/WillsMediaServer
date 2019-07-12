import { Mongo } from "meteor/mongo";
import SimpleSchema from 'simpl-schema';

const Albums = new Mongo.Collection("albums")

// Setup Album's Schema
const albumSchema = new SimpleSchema({
    name: String,
    artistIds: [String],
    genreIds: [String],
    coverIds: [String],
    releaseDate: Date
})

// Apply the schema
Albums.schema = albumSchema

export { Albums, albumSchema }

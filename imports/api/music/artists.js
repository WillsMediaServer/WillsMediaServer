import { Mongo } from "meteor/mongo";
import SimpleSchema from 'simpl-schema';

const Artists = new Mongo.Collection("artists")

// Setup Artist's Schema
const artistSchema = new SimpleSchema({
    name: String,
    isBand: Boolean,
    description: String,
    coverIds: [String]
})

// Apply the schema
Artists.schema = artistSchema

export { Artists, artistSchema }

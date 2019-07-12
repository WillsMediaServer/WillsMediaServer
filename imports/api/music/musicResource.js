import { Mongo } from "meteor/mongo";
import SimpleSchema from 'simpl-schema';

const MusicResources = new Mongo.Collection("music_resources")

// Setup MusicResource's Schema
const musicResourceSchema = new SimpleSchema({
    format: String,
    location: String
})

// Apply the schema
MusicResources.schema = musicResourceSchema

export { MusicResources, musicResourceSchema }

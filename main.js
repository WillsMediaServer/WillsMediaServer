/**
|--------------------------------------------------
| Wills Media Server
| main.js
| by wsngamerz
|--------------------------------------------------
*/

import express from "express"
import bodyParser from "body-parser"
import graphqlHTTP from "express-graphql"
import { buildSchema } from "graphql"


let songs = [
    {
        "_id": Math.random().toString(),
        "name": "I Don't Care",
        "artist": "Ed Sheeran & Justin Bieber"
    },
    {
        "_id": Math.random().toString(),
        "name": "Viva la Vida",
        "artist": "Coldplay"
    },
    {
        "_id": Math.random().toString(),
        "name": "Sail",
        "artist": "AWOLNATION"
    }
] 

// Express app
const app = express()

app.use(bodyParser.json())

// GraphQL Middleware
app.use("/api", graphqlHTTP({
    schema: buildSchema(`
        type Song {
            _id: ID!
            name: String!
            artist: String!
        }

        input SongInput {
            name: String!
            artist: String!
        }

        type RootQuery {
            songs: [Song!]!
        }

        type RootMutation {
            createSong(songInput: SongInput): Song
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
    rootValue: {
        songs: () => {
            return songs
        },
        createSong: (args) => {
            const newSong = {
                "_id": Math.random().toString(),
                "name": args.songInput.name,
                "artist": args.songInput.artist
            }
            songs.push(newSong)
            return newSong
        }
    },
    graphiql: true
}))

app.get("/", (req, res, next) => res.send("Hello World"))

// Listen on port
app.listen(3000)

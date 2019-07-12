/**
|--------------------------------------------------
| Wills Media Server
| graphql/schema.js
| by wsngamerz
|--------------------------------------------------
*/

import { buildSchema } from "graphql"


export default buildSchema(`
    type Album {
        _id: ID!
        name: String
        dateAdded: String
        dateReleased: String

        artists: [Artist]
        covers: [MusicCover]
        genres: [MusicGenre]
        songs: [Song]
    }

    input AlbumInput {
        name: String
        dateReleased: String

        artistIds: [String]
        coverIds: [String]
        genreIds: [String]
        songIds: [String]
    }

    type Artist {
        _id: ID!
        name: String
        description: String
        isBand: Boolean
        dateAdded: String

        covers: [MusicCover]
        songs: [Song]
    }

    input ArtistInput {
        name: String
        description: String
        isBand: Boolean

        coverIds: [String]
        songIds: [String]
    }

    type MusicCover {
        _id: ID!
        format: String
        location: String
    }

    input MusicCoverInput {
        format: String
        location: String
    }

    type MusicGenre {
        _id: ID!
        name: String
        description: String
    }

    input MusicGenreInput {
        name: String
        description: String
    }

    type MusicResource {
        _id: ID!
        format: String
        location: String
    }

    input MusicResourceInput {
        format: String
        location: String
    }

    type Song {
        _id: ID!
        name: String
        length: Int
        dateAdded: String
        dateReleased: String
        numberOfPlays: Int

        albums: [Album]
        artists: [Artist]
        covers: [MusicCover]
        genres: [MusicGenre]
        resources: [MusicResource]
    }
    
    input SongInput {
        name: String
        length: Int
        dateReleased: String
        numberOfPlays: Int

        albumIds: [String]
        artistIds: [String]
        coverIds: [String]
        genreIds: [String]
        resourceIds: [String]
    }

    type User {
        _id: ID!
        username: String
        password: String
        firstName: String
        lastName: String
        email: String
    }

    input UserInput {
        username: String
        password: String
        firstName: String
        lastName: String
        email: String
    }

    type RootQuery {
        albums: [Album]
        artists: [Artist]
        musicCovers: [MusicCover]
        musicGenres: [MusicGenre]
        musicResources: [MusicResource]
        songs: [Song]
        users: [User]
    }

    type RootMutation {
        createAlbum(albumInput: AlbumInput): Album
        createArtist(artistInput: ArtistInput): Artist
        createMusicCover(musicCoverInput: MusicCoverInput): MusicCover
        createMusicGenre(musicGenreInput: MusicGenreInput): MusicGenre
        createMusicResource(musicResourceInput: MusicResourceInput): MusicResource
        createSong(songInput: SongInput): Song
        createUser(userInput: UserInput): User
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)

/**
|--------------------------------------------------
| Wills Media Server
| graphql/schema.js
| by wsngamerz
|--------------------------------------------------
*/

import { buildSchema } from "graphql"


export default buildSchema(`
    """
    An Album is a collection of Songs which were released together
    """
    type Album {
        "ID of an Album (refers to the MongoDB ID)"
        _id: ID!
        "Name of an Album"
        name: String
        "The date that the Album was added to WillsMediaServer"
        dateAdded: String
        "The release date of the Album"
        dateReleased: String
        """
        The Type of Album which HAS to be AT LEAST ONE of:
        Album, Single, EP, Compilation, Soundtrack, Spokenword, Interview, Audiobook, Audio drama, Live, Remix, DJ-mix, Mixtape, Other
        """
        albumType: [String]

        "The Album's Artists"
        artists: [Artist]
        "The Album's Cover Art"
        covers: [MusicCover]
        "The Album's Genres"
        genres: [MusicGenre]
        "The Album's Songs"
        songs: [Song]
    }

    """
    AlbumInput is a number of fields used to modify an Album
    """
    input AlbumInput {
        "Name of an Album"
        name: String
        "The release date of an Album"
        dateReleased: String

        "The ID's of an Album's Artists"
        artistIds: [String]
        "The ID's of an Album's Cover Art"
        coverIds: [String]
        "The ID's of an Album's Genres"
        genreIds: [String]
        "The ID's of an Album's Songs"
        songIds: [String]
    }

    """
    An Artist is either a band or a solo person who is a creator of music
    """
    type Artist {
        "ID of an Artist (refers to the MongoDB ID)"
        _id: ID!
        name: String
        description: String
        isBand: Boolean
        dateAdded: String

        covers: [MusicCover]
        songs: [Song]
    }

    """
    """
    input ArtistInput {
        name: String
        description: String
        isBand: Boolean

        coverIds: [String]
        songIds: [String]
    }

    """
    """
    type MusicCover {
        "ID of a MusicCover (refers to the MongoDB ID)"
        _id: ID!
        format: String
        location: String
    }

    """
    """
    input MusicCoverInput {
        format: String
        location: String
    }

    """
    """
    type MusicGenre {
        "ID of a MusicGenre (refers to the MongoDB ID)"
        _id: ID!
        name: String
        description: String
    }

    """
    """
    input MusicGenreInput {
        name: String
        description: String
    }

    """
    """
    type MusicResource {
        "ID of a MusicResource (refers to the MongoDB ID)"
        _id: ID!
        format: String
        location: String
    }

    """
    """
    input MusicResourceInput {
        format: String
        location: String
    }

    """
    """
    type Song {
        "ID of a Song (refers to the MongoDB ID)"
        _id: ID!
        name: String
        dateAdded: String
        dateReleased: String
        numberOfPlays: Int

        albums: [Album]
        artists: [Artist]
        covers: [MusicCover]
        genres: [MusicGenre]
        resources: [MusicResource]
    }
    
    """
    """
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

    """
    """
    type User {
        "ID of a User (refers to the MongoDB ID)"
        _id: ID!
        username: String
        password: String
        firstName: String
        lastName: String
        email: String
    }

    """
    """
    input UserInput {
        username: String
        password: String
        firstName: String
        lastName: String
        email: String
    }

    """
    Query Data
    """
    type RootQuery {
        albums: [Album]
        artists: [Artist]
        musicCovers: [MusicCover]
        musicGenres: [MusicGenre]
        musicResources: [MusicResource]
        songs: [Song]
        users: [User]
    }

    """
    Query/Modify Data
    """
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

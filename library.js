/**
|--------------------------------------------------
| Wills Media Server
| library.js
| by wsngamerz
|--------------------------------------------------
*/

import ffmpeg from "fluent-ffmpeg"
import { walkDirectory } from "./utils"

const SUPPORTED_FILES = {
    "audio": ["mp3", "flac", "wav", "aac", "m4a", "wma"],
    "video": ["mp4"]
}


export default class Library {
    constructor(audioDirectory) {
        this.audioDirectory = audioDirectory
    }

    updateLibrary = async () => {
        console.log("Started Library Update")
        await this.updateMusicLibrary()
        console.log("Finished Library Update")
    }

    updateMusicLibrary = async () => {
        console.log("Started Music Library Update")
        const startTime = new Date()

        const audioFiles = await this.searchAudio(this.audioDirectory)
        this.audioMetadata = []

        await audioFiles.forEach(async (audioFilePath) => this.getAudioMetadata(audioFilePath))
        
        while (audioFiles.length != this.audioMetadata.length) {
            await new Promise(done => setTimeout(done, 1000)) // Fake sleep to test time taken calc
        }

        await this.applyAudioMetadata()

        const finishTime = new Date()
        console.log(`Finished Music Library Update for ${ this.audioMetadata.length } files in ${ (finishTime - startTime)/1000 }s `)

    }
    
    searchAudio = async () => {
        const files = await walkDirectory(this.audioDirectory)
        let audioFiles = []
        files.forEach(filePath => {
            const fileExtension = filePath.split(".").pop().toLowerCase()
            if (SUPPORTED_FILES.audio.includes(fileExtension)) {
                audioFiles.push(filePath)
            }
        })
        
        return audioFiles
    }

    getAudioMetadata = (filePath) => {
        ffmpeg(filePath).ffprobe((err, data) => {
            if (err) {
                this.audioMetadata.push(null)
                throw Error(err)
            } else {
                this.audioMetadata.push(data)
            }
        })
        
    }

    applyAudioMetadata = async () => {
        // TODO: Use metadata here to save artists, albums, songs and resources to mongodb
        await this.audioMetadata.forEach(audioMetadata => {
            try {
                const song = {
                    filePath:    audioMetadata.format.filename,
                    length:      audioMetadata.format.duration,
                    name:        audioMetadata.format.tags.title,
                    artist:      audioMetadata.format.tags.artist,
                    trackNumber: audioMetadata.format.tags.track,
                    album:       audioMetadata.format.tags.album,
                    discNumber:  audioMetadata.format.tags.disc,
                    genre:       audioMetadata.format.tags.genre,
                    releaseDate: audioMetadata.format.tags.date
                }
                console.log(song.toString())
            } catch (error) {
                
            }

        })
    }
}

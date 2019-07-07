import React, { Component } from 'react'

export default class Song extends Component {
    render() {
        return (
            <section className="song">
                <section className="song-cover"></section>
                <section className="song-details">
                    <p className="song-name">{ this.props.songName }</p>
                    <p className="song-artist">{ this.props.songArtist }</p>
                </section>
            </section>
        )
    }
}

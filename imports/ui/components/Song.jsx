import React, { Component } from 'react'

export default class Song extends Component {
    render() {
        let coverURL = "/images/music-cover.png"

        if (this.props.coverURL) {
            coverURL = this.props.coverURL
        }

        return (
            <section className="song">
                <img className="song-cover" src={ coverURL } alt="Song Cover"/>
                <span className="song-details">
                    <h2>{ this.props.name }</h2>
                    <h4>{ this.props.artist }</h4>
                </span>
            </section>
        )
    }
}

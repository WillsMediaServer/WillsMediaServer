import React, { Component } from 'react'

import LeftChevronIcon from "@material-ui/icons/ChevronLeft"
import RightChevronIcon from "@material-ui/icons/ChevronRight"

import Song from "./Song"

export default class SongList extends Component {
    render() {
        const songs = [
            ["So Am I", "Ava Max"],
            ["One Kiss", "Calvin Harris, Dua Lipa"],
            ["thank u, next", "Arianda Grande"],
            ["High Hopes", "Panic! At the Disco"],
            ["Someone You Loved", "Lewis Capaldi"],
            ["Shotgun", "George Ezra"],
            ["Bloodstream", "Ed Sheeran"],
            ["Sunflower", "Post Malone, Swae Lee"],
            ["Centuries", "Fall Out Boy"],
            ["I Don't Care", "Ed Sheeran, Justin Bieber"],
            ["Believer", "Imagine Dragons"],
            ["FRIENDS", "Marshmello, Anne-Marie"],
            ["Can't Hold Us", "Macklemore, Ryan Lewis"],
            ["Castle on the Hill", "Ed Sheeran"],
            ["Crying in the Club", "Camila Cabello"],
            ["Fourth of July", "Fall Out Boy"]
        ]
        songs.sort(() => Math.random() - 0.5);

        return (
            <>
                <section className="songlist-header">
                    <h1 className="subtitle">{ this.props.title }</h1>
                    <span className="songlist-controls">
                        <LeftChevronIcon/>
                        <RightChevronIcon/>
                    </span>
                </section>
                <section className="songlist">
                    { songs.map((value, index) => {
                        return <Song key={ index } songName={ value[0] } songArtist={ value[1] }/>
                    }) }
                </section>
            </>
        )
    }
}

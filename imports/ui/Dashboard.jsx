import React, { Component } from 'react'

import FilmList from "./components/FilmList"
import SongList from "./components/SongList"
import Statistic from "./components/Statistic"
import TVList from "./components/TVList"


export default class Dashboard extends Component {
    render() {
        return (
            <main className="main">
                <section className="statistic-group">
                    <Statistic category="music" name="Songs" number="5,352"/>
                    <Statistic category="films" name="Films" number="934"/>
                    <Statistic category="tv" name="Episodes" number="1,732"/>
                </section>

                <SongList title="New Songs"/>
                <SongList title="Recommended Songs"/>
                <SongList title="Recommended Albums"/>
                
                <FilmList title="New Films"/>
                <FilmList title="Recommended Films"/>
                
                <TVList title="New Programs"/>
                <TVList title="Recommended Programs"/>
            </main>
        )
    }
}

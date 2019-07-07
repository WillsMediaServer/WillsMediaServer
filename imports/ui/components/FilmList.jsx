import React, { Component } from 'react'

import LeftChevronIcon from "@material-ui/icons/ChevronLeft"
import RightChevronIcon from "@material-ui/icons/ChevronRight"

import Film from "./Film"

export default class FilmList extends Component {
    render() {
        const films = [
            "Johnny English",
            "Fast and Furious 5",
            "Maze Runner",
            "Fast and Furious 7",
            "Pixels",
            "Aliens",
            "Fast and Furious 8",
            "Passenger",
            "Fast and Furious 6",
            "Harry Potter",
            "Shaft",
            "Shaun of the Dead"
        ]
        films.sort(() => Math.random() - 0.5);

        return (
            <>
                <section className="filmlist-header">
                    <h1 className="subtitle">{ this.props.title }</h1>
                    <span className="filmlist-controls">
                        <LeftChevronIcon/>
                        <RightChevronIcon/>
                    </span>
                </section>
                <section className="filmlist">
                    { films.map((value, index) => {
                        return <Film key={ index } filmName={ value }/>
                    }) }
                </section>
            </>
        )
    }
}

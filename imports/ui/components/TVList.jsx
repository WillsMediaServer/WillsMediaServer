import React, { Component } from 'react'

import LeftChevronIcon from "@material-ui/icons/ChevronLeft"
import RightChevronIcon from "@material-ui/icons/ChevronRight"

import TV from "./TV"

export default class TVList extends Component {
    render() {
        const programs = [
            "Stranger Things",
            "The IT Crowd",
            "Scorpion",
            "Salvation",
            "Bodyguard",
            "Rick and Morty",
            "Star Trek: Discovery",
            "Zoo",
            "Black Mirror",
            "Impratical Jokers",
            "Click",
            "The Last Kingdom",
            "Holby City",
            "NCIS"
        ]
        programs.sort(() => Math.random() - 0.5);

        return (
            <>
                <section className="programlist-header">
                    <h1 className="subtitle">{ this.props.title }</h1>
                    <span className="programlist-controls">
                        <LeftChevronIcon/>
                        <RightChevronIcon/>
                    </span>
                </section>
                <section className="programlist">
                    { programs.map((value, index) => {
                        return <TV key={ index } programName={ value }/>
                    }) }
                </section>
            </>
        )
    }
}

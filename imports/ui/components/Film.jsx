import React, { Component } from 'react'

export default class Film extends Component {
    render() {
        return (
            <section className="film">
                <section className="film-cover"></section>
                <section className="film-details">
                    <p className="film-name">{ this.props.filmName }</p>
                </section>
            </section>
        )
    }
}

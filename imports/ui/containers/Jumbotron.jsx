import React, { Component } from 'react'


export default class Jumbotron extends Component {
    render() {
        let classList = "jumbotron"

        if (this.props.centered) {
            classList += " jumbotron-centered"
        }

        return (
            <section className={ classList }>
                { this.props.children }
            </section>
        )
    }
}

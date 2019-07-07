import React, { Component } from 'react'

export default class TV extends Component {
    render() {
        return (
            <section className="program">
                <section className="program-cover"></section>
                <section className="program-details">
                    <p className="program-name">{ this.props.programName }</p>
                </section>
            </section>
        )
    }
}

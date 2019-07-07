import React, { Component } from 'react'

export default class Statistic extends Component {
    render() {
        return (
            <section className={ "statistic statistic-" + this.props.category }>
                <span className="statistic-number">{ this.props.number }</span>
                <span className="statistic-name">{ this.props.name }</span>
            </section>
        )
    }
}

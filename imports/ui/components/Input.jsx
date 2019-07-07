import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        let classList = "input"

        if (this.props.block) {
            classList += " input-block"
        }

        if (this.props.className) {
            classList += ` ${ this.props.className }`
        }

        return (
            <input className={ classList } name={ this.props.name } type={ this.props.type } placeholder={ this.props.placeholder }/>
        )
    }
}

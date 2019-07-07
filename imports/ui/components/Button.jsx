import React, { Component } from 'react'


export default class Button extends Component {
    render() {
        let classList = "button"

        if (!this.props.style) {
            classList += " button-primary"
        } else {
            classList += ` button-${ this.props.style }`
        }

        if (!this.props.size) {
            classList += " button-medium"
        } else {
            classList += ` button-${ this.props.size }`
        }

        if (this.props.block) {
            classList += " button-block"
        }

        if (this.props.className) {
            classList += ` ${ this.props.className }`
        }

        return (
            <button className={ classList }>{ this.props.children }</button>
        )
    }
}

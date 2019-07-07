import React, { Component } from 'react'


export default class LargeTitle extends Component {
    render() {
        let classList = "largetitle"

        if (this.props.white) {
            classList += " largetitle-white"
        }

        return (
            <h1 className={ classList }>{ this.props.children }</h1>
        )
    }
}

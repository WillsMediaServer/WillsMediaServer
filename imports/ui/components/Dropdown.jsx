import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        let classList = "dropdown"

        if (this.props.className) {
            classList += ` ${ this.props.className }`
        }

        return (
            <select className={ classList } name={ this.props.name }>
                { this.props.options.map((value, index) => {
                    return <option key={ index } value={ value }>{ value }</option>
                }) }
            </select>
        )
    }
}

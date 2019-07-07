import React, { Component } from 'react'

export default class NavLink extends Component {
    render() {
        return (
            <div className="navlink">
                <span className={ this.props.active ? "navlink-active active" : "navlink-active" }></span>
                { this.props.children }
                <a className="navlink-text" href="">{ this.props.text }</a>
            </div>
        )
    }
}

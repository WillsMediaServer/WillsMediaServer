import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class SidebarLink extends Component {
    render() {
        return (
            <Link to={ this.props.to } className="sidebar-link">
                { this.props.icon }
                <span className="sidebar-link-text">{ this.props.children }</span>
            </Link>
        )
    }
}

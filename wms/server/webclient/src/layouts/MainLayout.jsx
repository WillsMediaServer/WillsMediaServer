import React, { Component } from 'react';

import Navigation from '../components/Navigation';

class MainLayout extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation/>
                {this.props.children}
            </React.Fragment>
        );
    }
}

export default MainLayout;
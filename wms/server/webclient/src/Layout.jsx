import React, { Component } from 'react';

import Navigation from './components/navigation/Navigation';
import MediaBar from './components/media-bar/MediaBar';

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation/>
                {this.props.children}
                <MediaBar/>
            </React.Fragment>
        );
    }
}

export default Layout;
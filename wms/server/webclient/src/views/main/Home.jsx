import React, { Component } from 'react';

import { Container, Header } from 'semantic-ui-react';

import Login from '../../components/Login';
import Statistics from '../../components/Statistics';

class Home extends Component {
    render() {
        return (
            <Container textAlign="center">
                <Header size="huge">Home</Header>
                <Login/>
                <Statistics/>
            </Container>
        );
    }
}

export default Home;
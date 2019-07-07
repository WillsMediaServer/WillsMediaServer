import React, { Component } from 'react';
import { Container, Header, List, Loader, Message } from 'semantic-ui-react';
import { Query } from 'react-apollo';

import gql from 'graphql-tag';

class MusicSongs extends Component {
    render() {
        return (
            <Container textAlign="center">
                <Header size="huge">Songs</Header>
                <List divided relaxed>
                    <Query query={gql`{
                        songsList {
                            edges {
                                node {
                                    id
                                    name
                                    artist {
                                        name
                                    }
                                }
                            }
                        }
                    }`}>
                        {({ loading, error, data }) => {
                            if (loading) return <Loader active inline="centered" size="big" content="Loading"/>;
                            if (error) return (
                                <Message negative>
                                    <Message.Header>Error</Message.Header>
                                    <p>Unable to fetch songs!</p>
                                </Message>
                            );
                            
                            console.log(data.songsList.edges[0].node);
                            

                            return data.songsList.edges.map(({ node }) => (                   
                                <List.Item key={node.id}>
                                    <List.Icon name="play" size="large" verticalAlign="middle"/>
                                    <List.Content>
                                        <List.Header as="a">
                                            {node.name}
                                        </List.Header>
                                        <List.Description>
                                            {(node.artist != null) ? node.artist.name : "Unknown Artist"}
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                            ));
                        }}
                    </Query>
                </List>
            </Container>
        );
    }
}

export default MusicSongs;
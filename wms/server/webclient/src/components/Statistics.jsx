import React, { Component } from 'react';

import { Header, Segment, Statistic } from 'semantic-ui-react';

class Statistics extends Component {
    render() {
        return (
            <Segment>
                <Header size="large">Statistics</Header>

                <Statistic.Group widths="3">
                    <Statistic>
                        <Statistic.Value>5,032</Statistic.Value>
                        <Statistic.Label>Songs</Statistic.Label>
                    </Statistic>
                    <Statistic>
                        <Statistic.Value>57</Statistic.Value>
                        <Statistic.Label>Films</Statistic.Label>
                    </Statistic>
                    <Statistic>
                        <Statistic.Value>1,237</Statistic.Value>
                        <Statistic.Label>Episodes</Statistic.Label>
                    </Statistic>
                </Statistic.Group>
            </Segment>
        );
    }
}

export default Statistics;
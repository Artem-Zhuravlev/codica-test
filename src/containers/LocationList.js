import React from 'react';
import { connect} from 'react-redux';

import { List, Card } from 'antd';

import Location from './Location';

const LocationList = ({locations, navigator}) => (
    <List
        grid={{gutter: 16, lg: 4, md: 3, sm: 2, xs: 1}}
        dataSource={Object.keys(locations).map((key) => locations[key])}
        renderItem={(location) =>
            <List.Item>
                <Card>
                    <Location
                        key={location.id}
                        navigator={navigator}
                        {...location}
                    />
                </Card>
            </List.Item>   
        }
    />
);

const mapStateToProps = (state) => ({
  locations: state.locations
});

export default connect(mapStateToProps)(LocationList);
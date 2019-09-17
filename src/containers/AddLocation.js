import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../actions';

import { Button } from 'antd';

const AddLocation = ({actions}) => {
    return (
        <div className="add-location">
            <Button onClick={actions.openDialog} icon="plus">ADD LOCATION</Button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(
    undefined,
    mapDispatchToProps
)(AddLocation);

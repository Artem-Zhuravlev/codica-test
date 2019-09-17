import React from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Modal } from 'antd';

import * as Actions from '../actions';

const AddLocationDialog = ({isOpen, actions}) => {
    let input;

    const handleButtonClick = () => {
        const node = findDOMNode(input);
    
        if (node.value.length > 0) {
            actions.addLocationAndFetchWeather(node.value);
            node.value = '';
            actions.closeDialog();
        };
    };

    return (
        <Modal
            visible={isOpen}
            onCancel={actions.closeDialog}
            onOk= {handleButtonClick}
        >
            <div className="modal-dialog__title">
                <h5>Adding new city</h5>
            </div>
            <div className="modal-dialog__content">
                <input type="text"
                    className="ant-input"
                    ref={node => (input = node)}
					placeholder='Location name'
                />
            </div>
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    isOpen: state.dialog.open
});
  
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch)
});
  
export default connect(mapStateToProps, mapDispatchToProps)(AddLocationDialog);
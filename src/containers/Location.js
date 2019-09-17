import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import './Location.css';

import { Icon } from 'antd';
import * as Actions from '../actions';

import { BrowserRouter as Link } from "react-router-dom";


const Location = ({
    id,
    name,
    temperature,
    humidity,
    icon,
    country,
    isFetching,
    isInvalid,
    navigator,
    actions}) => {

    let subtitle;

  
    if (isInvalid) {
        subtitle = (
            <span style={{color: 'red'}}>
                Unable to fetch data!
            </span>
        );
    } else if (isFetching) {
        subtitle = (
            <span>Fetching data...</span>
        );
    } else {
        subtitle = (
            <span>
                {temperature}&deg;C&nbsp;
                {humidity}%
            </span>
        );
    }

    return ( 
            <>
                <Link to={`/${name}`} onClick={()=>{
                    actions.selectLocation(id);
                }}>
                    <div className='list__title'>
                        {name}
                    </div>
                </Link>
                <div className='list__item__subtitle'>
                    {subtitle}
                </div>
                <div className="list__contolls">
                    <button className="list__refresh" onClick={(e) => {
                        e.stopPropagation();
                        actions.fetchWeather(id);
                        }}>
                        <Icon type="undo" className='weather-button'/>
                    </button>
                    <button className="list__delete" onClick={(e) => {
                        e.stopPropagation();
                        actions.removeLocation(id);
                    }}>
                        <Icon type='delete' className='weather-button' />
                    </button>
                </div>
            </>
        );
};


const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
};
  
export default connect(
    undefined,
    mapDispatchToProps
)(Location);
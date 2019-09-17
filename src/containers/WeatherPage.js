import React from 'react';
import {connect} from 'react-redux';
import {countries} from 'country-data';
import Forecast from '../components/Forecast';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WeatherIcon from '../components/WeatherIcon';
import {weatherCodeToColor} from '../util';

import { Progress } from 'antd'; 

const WeatherPage = ({
    navigator,
    name,
    temperature,
    humidity,
    country,
    icon,
    forecast,
    isFetching,
    isInvalid
    }) => {

    let content;

    if (isInvalid) {
        content = <div>Unable to fetch data!</div>;
    } else if (isFetching) {
        content = <Progress type="circle" indeterminate />;
    } else {
        content = (
            <div className="weather-single">
                <div className="container">
                    <h1>{name}</h1>
                    <div className="weather-single__icon">  
                        <WeatherIcon icon={icon} class="weather-single__icon"/>
                    </div>
                    <div>
                        {/* {countries[country.toUpperCase()].name} */}
                    </div>

                    <div className="weather-single__data">
                        <ul className="weather-single__list">
                            <li>{temperature}&deg;  TEMPERATURE</li>
                            <li>{humidity}% HUMIDITY</li>
                        </ul>    
                    </div>

                    <Forecast days={forecast} />

                    <Link to="/" className="ant-btn">
                        To main
                    </Link>
                </div>
            </div>
        );
    }

    return (
        
        <div>
            {content}
        </div>
    );
};

const mapStateToProps = (state) => ({
  ...state.locations[state.selectedLocation]
});

export default connect(
  mapStateToProps
)(WeatherPage);
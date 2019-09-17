import React from 'react';
import './Forecast.css';

import WeatherIcon from '../components/WeatherIcon';
import {weatherCodeToColor} from '../util';
 
const WEEKDAYS = {
    0: 'SUN',
    1: 'MON',
    2: 'TUE',
    3: 'WED',
    4: 'THU',
    5: 'FRI',
    6: 'SAT'
};

const Forecast = ({days}) => (
    <div className="forecast">
        {days.map(({weekday, icon, maxTemp, minTemp}) => {
            const weatherColor = weatherCodeToColor(icon);

            return (
                <div key={weekday} class="weekday">
                    <div class="weekday__title">
                        {WEEKDAYS[weekday]}
                    </div>
                    <div class="weekday__icon">
                        <WeatherIcon style={{color: weatherColor}} icon={icon}/>
                    </div>
                    <div>
                        {maxTemp}&deg;C
                    </div>
                    <div>
                        {minTemp}&deg;C
                    </div>
                </div>
            );
        })}
    </div>
);

export default Forecast;
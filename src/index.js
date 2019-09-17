import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { AppContainer } from 'react-hot-loader';

import App from './components/App/App';
import 'antd/dist/antd.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import { addLocationAndFetchWeather } from './actions';
import weatherApp from './reducers';

import WeatherPage from './containers/WeatherPage';

const logger = createLogger();
const store = createStore(weatherApp, applyMiddleware(thunk, logger));

['Kharkiv','Kyiv','Odessa','Lviv', 'London', 'Boston']
    .forEach((city) => store.dispatch(addLocationAndFetchWeather(city)));

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <Router >
                <Route exact path="/" component={App} />
                <Route path='/:name' component={WeatherPage} />
            </Router>
        </Provider>
    </AppContainer>, 
document.getElementById('root'));

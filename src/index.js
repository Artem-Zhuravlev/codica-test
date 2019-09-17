import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { AppContainer } from 'react-hot-loader';

import App from './api/App/App';
import 'antd/dist/antd.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

const logger = createLogger();
const store = createStore(applyMiddleware(thunk, logger));

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <Router >
                <Route exact path="/" component={App} />
            </Router>
        </Provider>
    </AppContainer>, 
document.getElementById('root'));

import { combineReducers } from 'redux';

import dialog from './dialog';
import locations from './locations';
import selectedLocation from './selectedLocation';

const weatherApp = combineReducers({
    dialog,
    locations,
    selectedLocation
});

export default weatherApp;
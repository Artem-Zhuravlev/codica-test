import {
    ADD_LOCATION,
    REMOVE_LOCATION,
    REQUEST_WEATHER,
    RECEIVE_WEATHER,
    SET_FETCH_ERROR,
} from '../actions';


const initialState = {
    isFetching: false,
    isInvalid: false,
    temperature: 0,
    icon: -1,
    humidity: 0
};

const location = (state = initialState, action) => {
    switch(action.type) {
        case ADD_LOCATION: 
            return {
                id: action.id,
                name: action.name,
                ...state
            };
        case REQUEST_WEATHER:
            return {
                isFetching: true,
                isInvalid: false,
                ...state
            }
        case RECEIVE_WEATHER: 
            return {
                isFetching: false,
                isInvalid: false,
                ...state,
                ...action
            }
        case SET_FETCH_ERROR: 
            return {
                isFetching: false,
                isInvalid: true,
                ...action
            }
        default: 
            return state;
    }
}

const locations = (state = {}, action) => {
    switch(action.type) {
        case ADD_LOCATION: 
            return {
                [action.id]: location(undefined, action),
                ...state
            }
        case REMOVE_LOCATION:
            const {...rest} = state;
            delete rest[action.id];
            return rest;
        case SET_FETCH_ERROR:
        case REQUEST_WEATHER:
        case RECEIVE_WEATHER:
            return {
                ...state,
                [action.id]: location({...state[action.id]}, action)
            };
        default:
            return state;
    }
}

export default locations;
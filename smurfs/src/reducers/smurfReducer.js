//import my actions which need to be referenced by the reducer's 2nd argument
import { BEGIN_GETTING_SMURF, SUCCESSFULLY_GOT_SMURF, DID_NOT_GET_SMURF, ADDING_DATA_FAILURE } from '../actions/smurfActions';


// This is my initial state, every smurf object starts with these key values prior to API calls. 
const initialState = {
    isLoading: false,
    smurf: null,
    error: ''
};

// The reducer is the bank Teller in the banking metaphor
export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case BEGIN_GETTING_SMURF:
            return {
                ...state,
                isLoading: true
            };
        case SUCCESSFULLY_GOT_SMURF:
            return {
                ...state,
                isLoading: false,
                smurf: action.payload
            };
        case DID_NOT_GET_SMURF:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case ADDING_DATA_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    };
};
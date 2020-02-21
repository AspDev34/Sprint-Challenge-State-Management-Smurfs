


// This is my initial state, every smurf object starts with these key values prior to API calls. 
const initialState = {
    isLoading: false,
    smurf: [],
    error: ''
};

// The reducer is the bank Teller in the banking metaphor
export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    };
};
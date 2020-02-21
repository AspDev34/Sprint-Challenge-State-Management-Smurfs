


// The reducer is the bank Teller
const initialState = {
    isLoading: false,
    smurf: [],
    error: ''
};

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    };
};
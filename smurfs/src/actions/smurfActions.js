import axios from 'axios';

export const BEGIN_GETTING_SMURF = 'BEGIN_GETTING_SMURF';
export const SUCCESSFULLY_GOT_SMURF = 'SUCCESSFULLY_GOT_SMURF';
export const DID_NOT_GET_SMURF = 'DID_NOT_GET_SMURF';
export const ADDING_DATA_FAILURE = "ADDING_DATA_FAILURE";
export const ADD_SMURF = 'ADD_SMURF';

//this is my action, similar to withdrawals/deposits in bank metaphor
export const getSmurfs = () => dispatch => {
    dispatch({ type: BEGIN_GETTING_SMURF });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log('API DATA', res.data)
            dispatch({ type: SUCCESSFULLY_GOT_SMURF, payload: res.data});
        })
        .catch(error => {
            console.log('NO DATA RETURNED', error.response)
            dispatch({ type: DID_NOT_GET_SMURF, payload: error.response});
        });
};

export const addSmurf = (name) => dispatch => {
    dispatch({ type: BEGIN_GETTING_SMURF });
    axios.post('http://localhost:3333/smurfs', name)
        .then(res => {
            console.log('API DATA', res.data)
            dispatch({ type: SUCCESSFULLY_GOT_SMURF, payload: res.data});
        })
        .catch(res => {
            console.log('NO DATA ADDED', res)
            dispatch({ type: ADDING_DATA_FAILURE, payload: res});
        })
        
};
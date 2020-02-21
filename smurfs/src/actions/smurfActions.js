import axios from 'axios';

export const BEGIN_GETTING_SMURF = 'BEGIN_GETTING_SMURF';
export const SUCCESSFULLY_GOT_SMURF = 'SUCCESSFULLY_GOT_SMURF';
export const DID_NOT_GET_SMURF = 'DID_NOT_GET_SMURF';
export const ADD_A_SMURF = 'ADD_A_SMURF';

//this is my action, similar to withdrawals/deposits in bank metaphor
export const getSmurfs = () => dispatch => {
    dispatch({ type: BEGIN_GETTING_SMURF });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log('API DATA', res)
            dispatch({ type: SUCCESSFULLY_GOT_SMURF, payload: res.data});
        })
        .catch(error => {
            console.log('NO DATA RETURNED', error.response)
            dispatch({ type: DID_NOT_GET_SMURF, payload: error.response});
        });
};
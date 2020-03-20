import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

//bringing in my actions to the component
import { getSmurfs, addSmurf } from '../actions/smurfActions';

const SmurfComp = (props) => {

    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: 0,
        height: ''
    });

    const handleChange = (event) => {
        setNewSmurf({
            ...newSmurf,
            [event.target.name]: event.target.value
        });
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // axios.post('http://localhost:3333/smurfs', newSmurf) //arg1 WHERE I want to post, arg2 WHAT i want to post
        
    // };

    const handleAdd = (event) => {
        event.preventDefault();
        // if (newSmurf.name !== '' && newSmurf.age !== '' && newSmurf.height !== '') {
            props.addSmurf(newSmurf);
            setNewSmurf({name: '', age: 0, height: ''});
        // };
    };

    return (
        <div>
            <form onSubmit={handleAdd}>

                <label htmlFor='name'>Name:
                    <input type='text' value={newSmurf.name} onChange={handleChange} name='name'/>
                </label>

                <label htmlFor='age'>Age:
                    <input type='number' value={newSmurf.age} onChange={handleChange} name='age'/>
                </label>

                <label htmlFor='height'>Height:
                    <input type='text' value={newSmurf.height} onChange={handleChange} name='height'/>
                </label>

                <input type='submit' value='Add a Smurf' onClick={handleAdd}/>
            </form>

            <button className="getSmurf" onClick={props.getSmurfs}>Get Smurfs</button>

            {!props.smurf && !props.isLoading && (<h3>Got a Smurf</h3>)}

            {props.isLoading && (<h1>Your Smurf is loading...</h1>)}

            {props.smurf && !props.isLoading && <h2>{props.smurf.map(item => `Hello ${item.name} Smurf!`)}</h2>}

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        smurf: state.smurf,
        error: state.error
    };
};

export default connect(mapStateToProps, { getSmurfs, addSmurf })(SmurfComp);
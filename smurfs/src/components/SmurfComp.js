import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

//bringing in my actions to the component

const SmurfComp = () => {

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

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3333/smurfs', newSmurf) //arg1 WHERE I want to post, arg2 WHAT i want to post
        setNewSmurf({name: '', age: 0, height: ''});
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label htmlFor='Name'>Name:
                    <input type='text' value={newSmurf.name} onChange={handleChange} name='Name'/>
                </label>

                <label htmlFor='Age'>Age:
                    <input type='number' value={newSmurf.age} onChange={handleChange} name='Age'/>
                </label>

                <label htmlFor='Height'>Height:
                    <input type='text' value={newSmurf.height} onChange={handleChange} name='Height'/>
                </label>

                <input type='submit' value='Add a Smurf' onSubmit={handleSubmit}/>
            </form>
            
        </div>
    );
};
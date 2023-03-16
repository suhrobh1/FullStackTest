import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

export const AddExercisePage = () => {

    const navigate = useNavigate()

    const [exercise, setExercise] = useState({
        name: "",
        reps: "",
        weight: "",
        unit: "",
        date: "",
      });


    // exercise inputs are being captured and stored
    const handleChange = (e) => {
        setExercise({...exercise, [e.target.name]: e.target.value});
      };

      const addExercise = async () => {
        // const newExercise = { title, year, language };
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(exercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the exercise!");
            navigate('/')
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
    };




    return (
        <div className='add_edit_form_container'>
            <Navigation />
            <h1>Add Exercise</h1>
            <form className='input_containers_container'>

                <div className='update_input_containers'>
                    <p className='update_input_labels'>Name</p>
                    <input
                    className='input_fields' 
                        type="text"
                        placeholder="Enter name here"
                        name = "name"
                        value={exercise.name}
                        onChange={(e) => handleChange(e)}/>
                </div>
                <div className='update_input_containers'>
                    <p className='update_input_labels'>Reps</p>
                    <input
                    className='input_fields' 
                        type="number"
                        value={exercise.reps}
                        placeholder="Enter reps here"
                        name='reps'
                        onChange={(e) => handleChange(e)} />
                </div>
                <div className='update_input_containers'>
                    <p className='update_input_labels'>Weight</p>
                    <input
                        type="number"
                        className='input_fields' 
                        placeholder="Enter weight here"
                        name='weight'
                        value={exercise.weight}
                        onChange={(e) => handleChange(e)}/>
                    </div>
                <div className='update_input_containers'>
                    <p className='update_input_labels'>Units</p>
                    <select
                    className='input_fields' 
                    value={exercise.unit}
                    onChange={(e) => handleChange(e)}
                    name="unit"
                    >
                    <option value="none" defaultValue hidden>
                        units
                    </option>
                    <option value="kg">kg</option>
                    <option value="lbs">lbs</option>
                    </select>
                </div>
                <div className='update_input_containers'>
                    <p className='update_input_labels'>Date</p>
                    <input
                    className='input_fields' 
                        type="string"
                        placeholder="Enter date here"
                        name='date'
                        value={exercise.date}
                        onChange={(e) => handleChange(e)} />
                </div>
            </form>
            <button
                onClick={addExercise}
            >Add</button>
        </div>
    );
}

export default AddExercisePage;
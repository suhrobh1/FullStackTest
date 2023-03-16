import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

export const EditExercisePage = ({exerciseToEdit}) => {

    // console.log("What we got",exerciseToEdit)

    // Instantiating useNavigate
    const navigate = useNavigate()
  
    // Setting up the default values in the fields
    const [name, setName] = useState(exerciseToEdit.name)
    const [weight, setWeight] = useState(exerciseToEdit.weight)
    const [unit, setUnit] = useState(exerciseToEdit.unit)
    const [reps, setReps] = useState(exerciseToEdit.reps)
    const [date, setDate] = useState(exerciseToEdit.date)

    // Function to handle our edit call
    const editExercise = async () => {
        const editedExercise = { name, reps, weight, unit, date };
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
            alert("Successfully edited the exercise!");
            navigate('/')
        } else {
            alert(`Failed to edit exercise, status code = ${response.status}`);
        }
    };


    return (
        <div className='add_edit_form_container'>
        <Navigation />
        <h1>Edit Exercise</h1>
        <form className='input_containers_container'>
            <div className='update_input_containers'>
                <p className='update_input_labels'>Name</p>
                <input
                    className='input_fields' 
                    type="text"
                    name = "name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
                </div>
            <div className='update_input_containers'>
                <p className='update_input_labels'>Reps</p>
                <input
                    className='input_fields' 
                    type="number"
                    value={reps}
                    name='reps'
                    onChange={(e) => setReps(e.target.value)} />
            </div>
            <div className='update_input_containers'>
                <p className='update_input_labels'>Weight</p>
                <input
                    className='input_fields' 
                    type="number"
                    name='weight'
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}/>
            </div>
            <div className='update_input_containers'>
                <p className='update_input_labels'>Units</p>
                <select
                className='input_fields' 
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
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
                    name='date'
                    value={date}
                    onChange={(e) => setDate(e.target.value)} />
            </div>
        </form>
        <button
            onClick={editExercise}
        >Save</button>
    </div>
    );
}

export default EditExercisePage;
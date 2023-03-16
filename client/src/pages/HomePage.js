import React from 'react';
import { Link } from 'react-router-dom';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

function HomePage({ setExerciseToEdit}) {

    const navigate = useNavigate()
    const [exercises, setExercises] = useState([]);

    // Function to get all exercises from DB
    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data)
    }

    // THis will run once and call the loadExercises function
    useEffect(() => {
        loadExercises();
    }, []);
    
    // The function sets the exercise that needs to edited and directs user to correct page
    const onEdit = exercise =>{
        setExerciseToEdit(exercise)
        navigate('/edit_exercise')
    }

    // Delete function filters out results and updates the DB (remove item from DB)
    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const newExercises = exercises.filter(e => e._id !== _id);
            setExercises(newExercises);
        } else {
            console.error(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`);
        }
    }

    return (
        <>
            <div className='main'>
                <Navigation />
                <h2>List of Exercises</h2>
                <ExerciseList exercises={exercises} onDelete = {onDelete} onEdit={onEdit}> </ExerciseList>
            </div>
        </>
    );
}

export default HomePage;
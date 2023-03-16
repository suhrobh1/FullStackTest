import React from 'react';
import {MdOutlineDeleteForever, MdOutlineEdit} from 'react-icons/md';

function Exercise({ exercise, onDelete, onEdit }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><MdOutlineDeleteForever onClick = {() => onDelete(exercise._id)}  /></td>
            <td><MdOutlineEdit onClick = {() => onEdit(exercise)}  /> </td>
        </tr>
    );
}

export default Exercise;
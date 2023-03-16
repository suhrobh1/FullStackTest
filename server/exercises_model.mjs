import mongoose from 'mongoose';
import 'dotenv/config';



mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

const db = mongoose.connection;


// This is definition of schema
const exerciseSchema = mongoose.Schema({
    name:{
        type: String, 
        required: [true, "The name of the exercise required!"]
    },
    reps:{
        type: Number,
        required: [true, "The number of times the exercise was performed required!"]
    },
    weight:{
        type: Number,
        required: [true, "	The weight of the weights used for the exercise required!"]
    },
    unit:{
        type: String, 
        required: [true, "The unit of measurement of the weight. Only values allowed are kgs and lbs required!"],
        enum: [
            "lbs",
            "kg"]
    },
    date:{
        type: String, 
        required: [true, "The date the exercise was performed. Specified as MM-DD-YY, e.g., 07-30-21 required!"]
        
    },
});

// This is the definition of the model. Basically we are creating a class Exercise
const Exercise = mongoose.model("Exercise", exerciseSchema);


// Async function will create the class
const createExercise = async(name, reps, weight, unit, date) => {
    // Instance of exercise is created
    const exercise = new Exercise({name: name, reps: reps, weight: weight, unit: unit, date: date})
    return exercise.save(); // this returns a promise and returned as JS object
}



// retriving all exercises
const findExercises = async(filter) => {
    const query = Exercise.find(filter);
    return query.exec();
}

// retriving exercises by ID
const findExerciseById = async(_id) => {
    const query = Exercise.findOne({_id: _id});
    return query.exec();
}

// updating exercise by id
const updateExercise = async(_id, update) =>{
    const result = await Exercise.updateOne({_id: _id}, update);
    return result.modifiedCount;
}

// deleting exercise by id
const deleteById = async (_id) => {
    const result = await Exercise.deleteOne({_id: _id});
    return result.deletedCount;
}


// const deleteAll = async () => {
//     const result = await Exercise.deleteMany({});
//     return result.deletedCount;
// }

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

export {createExercise, findExercises, updateExercise, deleteById, findExerciseById}; //exporting the function
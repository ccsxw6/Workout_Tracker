//requiring mongoose
const mongoose = require("mongoose")
// accessing Schema constructor? from Mongoose
const Schema = mongoose.Schema

const workoutShema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Enter exercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter the name of your exercise"
        },
        duration: {
            type: Number,
            required: "Enter duration of exercise in minutes"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
},
    {
        toJSON: {
            virtuals: true
        }
    }
)

// Adds the duration time from each workout 
workoutShema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
      }, 0);
    });

const Workout = mongoose.model("Workout", workoutSchema)
module.exports = Workout
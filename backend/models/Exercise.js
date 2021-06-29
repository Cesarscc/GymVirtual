const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema(

    {
        category:{
        type: String,
        required: true
        },
 
        tittle: {
        type: String,
        required: true
        },

        description: {
        type: String,
        required: false
        },
 
        level: {
        type: String,
        required: true
        },

        reps: {
            type: Number,
            required: true
        },  

        rest: {
            type: Number,
            required: true
        },  

        coins: {
            type: Number,
            required: true
        },    

        exercisePhoto: {
            type: String,
            required: false
        }
    }
);

module.exports = mongoose.model("Exercise", exerciseSchema)

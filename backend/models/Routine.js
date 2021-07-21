const mongoose = require('mongoose');

const routineSchema = new mongoose.Schema(

    {        
        exerciseIds: {
        type: Array,
        required: true,
        },
        
        userId: {
            type: String,
            required: true
        },

        exercises:{
            type: Array,
            required: false
        },
    },
        {timestamps: true},
);

module.exports = mongoose.model("Routine", routineSchema)

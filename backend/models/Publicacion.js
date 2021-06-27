const mongoose = require('mongoose');

const publicacionSchema = new mongoose.Schema(

    {        
        coins: {
        type: Number,
        required: false
        },

        tittle: {
        type: String,
        required: true
        },

        comment: {
        type: String,
        required: true
        },
 
        tags: {
        type: Array,
        required: false,
        },
        
        user: {
            type: String,
            required: true
        },

        userPhoto: {
            type: String,
            required: false
        }
    },
        {timestamps: true},
);

module.exports = mongoose.model("Publicacion", publicacionSchema)

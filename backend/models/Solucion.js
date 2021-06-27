const mongoose = require('mongoose');

// Propiedades de Solución
const solucionSchema = new mongoose.Schema(

    {        
        votes: {
            type: Number,
            required: true
        },

        solution: {
            type: String,
            required: true
        },

        idpost: {
            type: String,
            required: true
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

module.exports = mongoose.model("Solucion", solucionSchema);

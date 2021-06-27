const mongoose = require('mongoose');

// Propiedades de Notificacion
const notificacionSchema = new mongoose.Schema(

    {      
        title: {
        type: String,
        required: true
        },

        message: {
        type: String,
        required: true
        },

        coins: {
        type: Number,
        required: false
        },

        userData: {
            photo : {
                type: String,
                required: false
            },
            name : {
                type: String,
                required: false
            },
        type: JSON,
        required: false,    
        },
    },
        {timestamps: true},
);

module.exports = mongoose.model("Notificacion", notificacionSchema)
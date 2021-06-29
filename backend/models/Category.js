const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(

    {
        tittle: {
        type: String,
        required: true
        },
     
        categoryPhoto: {
            type: String,
            required: false
        }
    }
);

module.exports = mongoose.model("Category", categorySchema)

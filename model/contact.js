const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    task :{
        type : String,
        required : true
    },

    category :{
        type : String,
        required : true
    },

    date : {
        type : Date
    }
});

//making a collection named ToDo
const ToDo = mongoose.model('ToDo', toDoSchema);

module.exports = ToDo;

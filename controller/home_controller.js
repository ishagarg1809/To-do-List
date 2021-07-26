const db = require('../config/mongoose');
const ToDo = require('../model/contact');
const port = 8000;


// function for adding tasks
module.exports.addTask = function(req,res){
    ToDo.create({
        task : req.body.task,
        date : req.body.date,
        category : req.body.category
    }, function(err, newTask){
        if(err){
            console.log('error in adding task');
            return;
        }
        console.log('***', newTask);
        return res.redirect('back');
    });
}

// function for the home page to display the tasks
module.exports.home = function(req,res){
    ToDo.find({}, function(err, taskL){
        if(err){
            console.log('error in fetching data from db');
            return;
        }
 
        return res.render('home', {
            title : 'To-Do List',
            tasks : taskL
        });
    });
}

// function for deleting tasks
module.exports.deleteTask = function(req, res){
    let arr_id = req.query.id;
    console.log(arr_id);

    if(!Array.isArray(arr_id)){
        deleteByID(arr_id);
    }
    else{
        for (let i of arr_id){
            deleteByID(i);
        }
    }
    return res.redirect('back');
}

function deleteByID(id){
    ToDo.findByIdAndDelete(id, function(err){
        if(err){
            console.lof('error in deleting task');
            return;
        }
    });
}


module.exports.listen = function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log('Server is up and running ', port);
}
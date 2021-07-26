const express = require('express');
const port = 8000;
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
console.log(__dirname);

app.use(express.urlencoded());
app.use(express.static(__dirname));


// adding the route to the home controller 
const controller = require('./controller/home_controller');


// var tasksList = [
//     {   task : 'Get vegetables',
//         date : '2004-02-18',
//         category : "Personal"
//     }
// ]


// Add Task
app.post('/add-task', controller.addTask);

// Home page
app.get('/', controller.home);

// Delete Task
app.get('/delete-task', controller.deleteTask);

// to run on port 
app.listen(port, controller.listen);

// app.post('/add-task', function(req,res){
//     tasksList.push({
//         task : req.body.task,
//         date : req.body.date,
//         category : req.body.category
//     });
//     return res.redirect('back');
// });

    
// app.get('/delete-task', function(req,res){
//     // console.log(req.query);
//     let task = req.query.task;
//     let taskIndex = tasksList.findIndex( t => t.task == task);
//     // console.log(taskIndex);
    
//     if(taskIndex != -1){
//         tasksList.splice(taskIndex, 1);
//     }
//     return res.redirect('back');
// });

// app.get('/delete-task', function(req,res){
//     // get id
//     let id = req.query.id;

//     ToDo.findByIdAndDelete(id, function(err){
//         if(err){
//             console.log('error in deleting task');
//             return;
//         }

//         return res.redirect('back');
//     });
// });

// app.post('/delete-task', function(req,res){
//     console.log('deleted.');
//     var checkedBody = req.body;
//     console.log(req.body);
//     if(checkedBody.checked == true){
//         // ToDo.findByIdAndDelete(id, function(err){
//         //     if(err){
//         //         console.log('error in deleting task');
//         //             return;
//         //     }
//         //     return res.redirect('back');
//         // });
//         console.log('yeet');
//     }
//     res.redirect('back');
// });
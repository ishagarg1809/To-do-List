// js code for the change theme toggle button
var isToggled = false;

$('#box').on('click', function(){
    $('.theme').toggleClass("black-bg");
    // $('body').toggleClass("white-text");
    $('h1').toggleClass("white-text");
    $('h5').toggleClass("white-text");
    $('p').toggleClass("white-text");
    $('li').toggleClass("white-text");
    $('hr').toggleClass("grey");
    $('input').toggleClass("black-bg");
    $('select').toggleClass("black-bg");
    $('input').toggleClass("lightgrey-text");
    $('select').toggleClass("lightgrey-text");
    $('span').toggleClass("white-text");
    $('label').toggleClass("white-text");
    console.log('hello');

    
    if (!isToggled){
        $('#circle').css ('margin-left', '35px');
        isToggled = true;
    }
    
    else{
        $('#circle').css ('margin-left', '0px');
        isToggled = false;
    }
});

// get all the checkboxes checked that are to be deleted
    // var checklist = [];
    // document.getElementById('delete-btn').onclick= function(){
    //     var markedCheckBox = document.getElementsByClassName('checkbox');
    //     console.log(markedCheckBox);
    //     for(var checkbox of markedCheckBox){
    //         if(checkbox.checked){
    //             checklist.push(true);
    //         }
    //         else{
    //             checklist.push(false);
    //         }
    //     }
    //     console.log(checklist);
    // }

// extract category and set the background color according to it
// school = yellow
// personal = dark blue
// work = purple
// cleaning = green
// other = maroon

// function getOption() { 
//     selectElement =  
//             document.querySelector('#select1'); 
              
//     output = selectElement.value; 
//     console.log(output);
// }

// var cat = document.querySelector('#category').value;
// console.log(typeof(cat));
// console.log(cat);
// console.log(cat == "School");
// if(cat == "School"){
//     $('.category-text').css('background-color', 'yellow');
// };

// console.log($('form').serialize());
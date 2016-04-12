/*
Program Name: Recipe Display Application
Author: Michael Jaffe
Date: 4/12/16
Filename: script.js
*/


//displays the next element after the current target
function display(event) {
    
    $(event.currentTarget).next().fadeIn("slow");
    
    
}

//attatch event listener to h3 elements to invoke display function when clicked
$("h3").click(display);

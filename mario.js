"use strict";
//Activates getting height
//finding the slider
let range = document.querySelector("#height");
//adding the event to the slider
range.addEventListener("input", () => {
  determineHeightAndThenDrawPyramid();
});

//Drop down to change what block is made of
//find the dropdown

//adding the event to the dropdown
block_type.addEventListener("click", () => {
  determineHeightAndThenDrawPyramid();
  let height = document.querySelector("#height").value;
  height = parseInt (height);
  createHalfPyramid(height);
});

//create a function that will return the value of the select element
function determineBlockType () {
  return document.querySelector("#block_type").value;
}
console.log(determineBlockType());
//Gets height and converts to int
function determineHeightAndThenDrawPyramid () {
  let height = document.querySelector("#height").value;
  height = parseInt (height);
  createHalfPyramid(height);
}

//builds pyramid
function createHalfPyramid (height) {
  //clear the pyramid div
  document.querySelector("#pyramid").innerHTML = '';
  //this for loop adds one line of the pyramid to the div at a time
  for (var i = 1; i <= height; i++) {
    var row = '';
    
    //adds the periods to a row of the pyramid one at a time
    for (var j = 1; j <= (height - i); j++) {
      row += '.';
    }
    
    //adds the blocks to one row of the pyramid one at a time
    for (var k = 1; k <= i; k++) {
      row += determineBlockType();
    }
    
    console.log(row);
    let para = document.createElement("p");
    console.log(para);
    let node = document.createTextNode(row);
    console.log(node);
    para.appendChild(node);
    let element = document.getElementById("pyramid");
    console.log(document.getElementById("pyramid"));
    element.appendChild(para);
  }
}

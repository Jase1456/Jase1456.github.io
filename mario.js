"use strict";
//Activates getting height
let button = document.querySelector("button");
      button.addEventListener("click", () => {
      determineHeightAndThenDrawPyramid();
      });

//Gets height and converts to int
function determineHeightAndThenDrawPyramid () {
  let height = document.querySelector("#height").value;
  height = parseInt (height);
  createHalfPyramid(height);
}
//builds pyramid
function createHalfPyramid (height) {
  
  for (var i = 1; i <= height; i++) {
    var row = '';
    
    for (var j = 1; j <= (height - i); j++) {
      row += '.';
    }
    
    for (var k = 1; k <= i; k++) {
      row += '#';
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

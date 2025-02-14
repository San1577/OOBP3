/* Task 1 - Add a new div element to the div with the id "task1"
   The new div should contain the text "Task 1 Completed"
   You have access to the DOM via the variable "document".
*/
let task1 = document.getElementById("task1");
let newDiv = document.createElement("div");
newDiv.textContent = "Task 1 Completed";
task1.appendChild(newDiv);

/* Task 2 - Greeter
  Add a new input element with id "greeterName" and label text "Name:" to the div with the id "task2".
  Add a new button element with id "doGreet" to the div with the id "task2", next to the input element.
  Add a new div element with id "greetResult" to the div with the id "task2".
  When the button "doGreet" is clicked, the "greetResult" div should contain the text "Hello, "
  followed by the value of the input element "greeterName".
*/

let task2 = document.getElementById("task2");
let input = document.createElement("input");
input.setAttribute("id", "greeterName");
task2.appendChild(input);
let label = document.createElement("label");
label.textContent = "Name:";
task2.appendChild(label);

let doGreetButton = document.createElement("button");
doGreetButton.setAttribute("id", "doGreet");
task2.appendChild(doGreetButton);

let greetResultDiv = document.createElement("div");
greetResultDiv.setAttribute("id", "greetResult");
task2.appendChild(greetResultDiv);

doGreetButton.addEventListener("click", () => {
  greetResultDiv.textContent = `Hello, ${input.value}`;
});

/* Task 3 - Highlighter
  Add three new div elements with class "highlight" to the div with the id "task3".
  The background color of the divs should be white.
  Each div should contain the text "Click to highlight me".
  When a div with the class "highlight" is clicked, it should change its background color to yellow using inline css style.
  When a div with the class "highlight" is clicked again, it should change its background color to white.
*/

let task3 = document.getElementById("task3");
for (let i = 0; i < 3; i++) {
  let highlightDiv = document.createElement("div");
  highlightDiv.classList.add("highlight");
  highlightDiv.textContent = "Click to highlight me";
  task3.appendChild(highlightDiv);
}

document.querySelectorAll(".highlight").forEach((div) => {
  div.addEventListener("click", () => {
    if (div.style.backgroundColor === "yellow") {
      div.style.backgroundColor = "white";
    } else {
      div.style.backgroundColor = "yellow";
    }
  })
});



/* Task 4 - Sum Calculator
  Add a new input element with id "calcInput1" to the div with the id "task4".
  Add a new input element with id "calcInput2" to the div with the id "task4".
  Add a new button element with id "calcButton" to the div with the id "task4", next to the input elements.
  Add a new div element with id "calcResult" to the div with the id "task4".
  When the button "calcButton" is clicked, the "calcResult" div should contain the result of the calculation
  of the two input elements "calcInput1" and "calcInput2" summed together.
*/

let task4 = document.getElementById("task4");
let input1 = document.createElement("input");
input1.setAttribute("id", "calcInput1");
input1.setAttribute("type", "number");
task4.appendChild(input1);

let input2 = document.createElement("input");
input2.setAttribute("id", "calcInput2");
input2.setAttribute("type", "number");
task4.appendChild(input2);

let calcButton = document.createElement("button");
calcButton.setAttribute("id", "calcButton");
task4.appendChild(calcButton);

let calcResult = document.createElement("div");
calcResult.setAttribute("id", "calcResult");
task4.appendChild(calcResult);

calcButton.addEventListener("click", () => {
  let result = Number(input1.value) + Number(input2.value);
  calcResult.textContent = result;
});
/* Task 5 - Hide and Show
  Add a new button element with id "hideButton" to the div with the id "task5".
  Add a new button element with id "showButton" to the div with the id "task5".
  Add a new div element with id "hideShowResult" to the div with the id "task5".
  The "hideShowResult" div should be 100px by 100px and have a background color of red and be hidden by default (display: none).
  When the button "hideButton" is clicked, the "hideShowResult" div should be hidden.
  When the button "showButton" is clicked, the "hideShowResult" div should be shown.
*/
let task5 = document.getElementById("task5");
let hideButton = document.createElement("button");
hideButton.setAttribute("id", "hideButton");
task5.appendChild(hideButton);
let showButton = document.createElement("button");
showButton.setAttribute("id", "showButton");
task5.appendChild(showButton);

let hideShowResult = document.createElement("div");
hideShowResult.setAttribute("id", "hideShowResult");
hideShowResult.style.height = "100px";
hideShowResult.style.width = "100px";
hideShowResult.style.backgroundColor = "red";
hideShowResult.style.display = "none";
task5.appendChild(hideShowResult);

hideButton.addEventListener("click", () => {
  hideShowResult.style.display = "none";
});

showButton.addEventListener("click", () => {
  hideShowResult.style.display = "block";
});
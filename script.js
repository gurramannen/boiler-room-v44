
// TODO local storage


const newTaskForm = document.getElementById("newTaskForm");
const addTaskButton = document.getElementById("addTaskButton");
const newTaskInput = document.getElementById("newTaskInput");
const taskDescription = document.getElementById("newTaskDescription");
const taskList = document.getElementById("activeTasks");
// const felmeddelande = document.getElementById("error-message"); //old error message
const errorMessage = document.getElementById("errorMessage");
errorMessage.style.display = "none"; // initially hides the error message
// event listener for add new task button

addTaskButton.addEventListener("click", function(event) {
    event.preventDefault();
    addNewTask(newTaskInput.value, taskDescription.value);
    newTaskInput.value = ""; // clear input field after adding task

});

// add and append new tasks


function addNewTask(taskText, taskDescription){
    
    if (newTaskInput.value.trim() === "") {
         errorMessage.style.display = "block";
         console.log("error");
         newTaskInput.style.borderColor = "red";
         
        
    } else {
    errorMessage.style.display = "none";
    newTaskInput.style.borderColor = "";

    let newTask = document.createElement("li");

    // mark as complete
    let isComplete = false;
    function completeTask(isComplete) {
    if (isComplete) {
        newTask.style.color = "green";
        newTask.style.fontWeight = "bold";
    } else {
        newTask.style.color = "";
        newTask.style.fontWeight = "";
    }
    }   

    // Mark task as complete
    let markButton = document.createElement("button");
        markButton.innerText = "Klar";
        markButton.addEventListener("click", function () {
            isComplete = !isComplete; // Växla mellan klar och inte klar
            completeTask(isComplete); // Anropa funktionen med det nya värdet
        });
    
    newTask.appendChild(markButton);

    //text for new task
    let textNode = document.createTextNode(" " + taskText);
    newTask.appendChild(textNode);

    // description of task
    let description = document.createElement("p");
    if (taskDescription === "") {
        description.innerText = "";
    } else {
        description.innerText = "Beskrivning: " + taskDescription;
        newTaskDescription.value = ""; // clear input field after adding task
    }
    newTask.appendChild(description);

    //button to remove
    let removeButton = document.createElement("button");
    removeButton.innerText = "x";
    removeButton.addEventListener("click", function () {
        newTask.remove();

    

    });
    newTask.appendChild(removeButton);
    
    taskList.appendChild(newTask); //append li to taskList ul
    
}};











// Remove task

function removeTask(){
    
}

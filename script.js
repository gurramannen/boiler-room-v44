
// Add task 

// event listener for add new task button
const newTaskForm = document.getElementById("newTaskForm");
const addTaskButton = document.getElementById("addTaskButton");
addTaskButton.addEventListener("click", function(event) {
    event.preventDefault;
    addNewTask();

});


// add and append new tasks
function addNewTask(){
    const taskList = document.getElementById("activeTasks");
    let newTask = document.createElement("li");

    //TODO checkbox mark as complete

    //TODO button to remove

    let removeButton = document.createElement("button");
    removeButton.innerText = "x";
    removeButton.addEventListener("click", function () {
        
        newTask.remove();
        //TODO if it´s empty



// Function add add tasks //!(REBECCA)

taskList.appendChild(newTask); //append li to taskList ul
newTask.appendChild(removeButton);

// Mark task as complete



// Remove task



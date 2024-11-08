
// TODO local storage


const newTaskForm = document.getElementById("newTaskForm");
const addTaskButton = document.getElementById("addTaskButton");
const newTaskInput = document.getElementById("newTaskInput");
const taskList = document.getElementById("activeTasks");

// event listener for add new task button
addTaskButton.addEventListener("click", function(event) {
    event.preventDefault();
    addNewTask(newTaskInput.value);
    newTaskInput.value = ""; // clear input field after adding task

});

// add and append new tasks


function addNewTask(taskText){
    
    if (newTaskInput.value.trim() === "") {
        //TODO byta ut alert
        alert("Skriv in en uppgift är du vänlig");
    } else {
    
    let newTask = document.createElement("li");

    //TODO checkbox mark as complete


    //button to remove
    let removeButton = document.createElement("button");
    removeButton.innerText = "x";
    removeButton.addEventListener("click", function () {
        newTask.remove();

    });
    newTask.appendChild(removeButton);

    //text for new task
    let textNode = document.createTextNode(" " + taskText);
    newTask.appendChild(textNode);


    taskList.appendChild(newTask); //append li to taskList ul
    
<<<<<<< HEAD
}};




// Mark task as complete



// Remove task


=======
}};
>>>>>>> b68e342c6c2ca5c63b821a70950de3ab459950f3

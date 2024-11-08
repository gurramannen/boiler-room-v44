
// TODO local storage


const newTaskForm = document.getElementById("newTaskForm");
const addTaskButton = document.getElementById("addTaskButton");
const newTaskInput = document.getElementById("newTaskInput");
const taskList = document.getElementById("activeTasks");
const felmeddelande = document.getElementById("felmeddelande");
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
        felmeddelande.innerText = "!!Du måste skriva någonting!!";
        setTimeout(function(){
            felmeddelande.style.display = "none";
        }, 5000);
    } else {
    
    let newTask = document.createElement("li");

    //TODO checkbox mark as complete
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

    //button to remove
    let removeButton = document.createElement("button");
    removeButton.innerText = "x";
    removeButton.addEventListener("click", function () {
        removeButton.innerText = "är du säker på att du vill ta bort? klicka igen.";
        removeButton.addEventListener("click", function(){
            newTask.remove();
            
        })

    });
    newTask.appendChild(removeButton);
    
    taskList.appendChild(newTask); //append li to taskList ul
    
}};









// Remove task

function removeTask(){
    
}

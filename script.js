const newTaskForm = document.getElementById("newTaskForm");
const addTaskButton = document.getElementById("addTaskButton");
const newTaskInput = document.getElementById("newTaskInput");
const taskDescription = document.getElementById("newTaskDescription");
const taskList = document.getElementById("activeTasks");
const noTasksMessage = document.getElementById("noTasksMessage");
const errorMessage = document.getElementById("errorMessage");

//  show "No tasks available" if task list is initially empty
noTasksMessage.style.display = taskList.children.length === 0 ? "block" : "none";
errorMessage.style.display = "none"; // Initially hides the error message



addTaskButton.addEventListener("click", function(event) {
    event.preventDefault();
    addNewTask(newTaskInput.value, taskDescription.value);
    newTaskInput.value = ""; // clear input field after adding task

});

// add and append new tasks


function addNewTask(taskText, taskDescription){
    
    if (taskText.trim() === "") { // missing task input
         errorMessage.style.display = "block";
         newTaskInput.style.borderColor = "red"; //changes border color if error
         
        
    } else {
    errorMessage.style.display = "none"; //hides error message
    newTaskInput.style.borderColor = ""; //resets border color if no error
    noTasksMessage.style.display = "none";// hide the "No tasks available" message
    

    let newTask = document.createElement("li");

    // complete status styling
    let isComplete = false;
    function setTaskCompleteStyles(isComplete, newTask) {
        if (isComplete) {
            newTask.style.color = "green";
            newTask.style.fontWeight = "bold";
            newTask.style.backgroundColor = "#F8FAF5"; //light green background
            newTask.style.border = "2px solid #E7EEDD"; // light green border
        } else {
            newTask.style.color = "";
            newTask.style.fontWeight = "";
            newTask.style.backgroundColor = "white";
            newTask.style.border = ""; // resets border 
        }
    }
    // mark as complete
    function completeTask(isComplete) {
        setTaskCompleteStyles(isComplete, newTask);
    }
    

    // button wrapper, created around buttons to group them and push the next line down.
    let buttonWrapper = document.createElement("div");
    newTask.appendChild(buttonWrapper);

    // Mark task as complete
    let markButton = document.createElement("button");
        markButton.innerText = "Done";
        markButton.id = "markButton";
        markButton.addEventListener("click", function () {
            isComplete = !isComplete; // Växla mellan klar och inte klar
            completeTask(isComplete); // Anropa funktionen med det nya värdet
            if (isComplete) {
                party.confetti(this, {
                    count: party.variation.range(20, 40),
                    size: party.variation.range(0.8, 1.2),
                });
            }
        });
    
    buttonWrapper.appendChild(markButton);

    let removeButton = document.createElement("button");
    removeButton.innerText = "Delete";
    removeButton.id = "removeButton";
    
    removeButton.addEventListener("click", function firstClick() {
        // Ändra text och stil på knappen
        removeButton.innerText = "Sure?";
        newTask.style.color = "red";
        newTask.style.fontStyle = "italic";
        newTask.style.border = "1px solid red"; // resets border 
    
        // Starta en timer för att återställa texten efter 3 sekunder
        const timer = setTimeout(() => {
            removeButton.innerText = "Delete";
            setTaskCompleteStyles(isComplete, newTask); // style depending on complete status
            newTask.style.fontStyle = ""; // clear italic style
            removeButton.addEventListener("click", firstClick); // Återaktivera `firstClick`
            removeButton.removeEventListener("click", secondClick); // Ta bort `secondClick`
        }, 3000);
    
        // Definiera andra klickhändelsen för att ta bort uppgiften
        function secondClick() {
            clearTimeout(timer); // Avbryt timern om användaren klickar igen innan den löper ut
            newTask.remove(); // Ta bort uppgiften

            // Display "No tasks available" if no tasks are left
            if (taskList.children.length === 0) {
                noTasksMessage.style.display = "block";
            }
        }
    
        // Lägg till `secondClick` som körs om användaren klickar igen inom 3 sekunder
        removeButton.addEventListener("click", secondClick, { once: true });
        removeButton.removeEventListener("click", firstClick); // Temporärt ta bort `firstClick`
    }, { once: true });
    


    buttonWrapper.appendChild(removeButton);
    
    //text for new task
    let textNode = document.createTextNode(taskText);
    newTask.appendChild(textNode);

    // description of task
    let description = document.createElement("p");
    description.innerText = taskDescription ? `Description: ${taskDescription}` : "";
    newTaskDescription.value = ""; // Clear input field after adding task
    newTask.appendChild(description);

    
    taskList.appendChild(newTask); //append li to taskList ul
    
    }
};










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
    
    if (newTaskInput.value.trim() === "") { // missing task input
         errorMessage.style.display = "block";
         console.log("error");
         newTaskInput.style.borderColor = "red"; //changes border color if error
         
        
    } else {
    errorMessage.style.display = "none"; //hides error message
    newTaskInput.style.borderColor = ""; //resets border color if no error

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

    // button wrapper
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

    //button to remove
    // let removeButton = document.createElement("button");
    // removeButton.innerText = "Delete";
    // removeButton.id = "removeButton";
    // removeButton.addEventListener("click", function () {
    //     removeButton.innerText = "Sure?";
    //     removeButton.addEventListener("click", function(){
    //         newTask.remove();
            
    //     })
    // });

    let removeButton = document.createElement("button");
    removeButton.innerText = "Delete";
    removeButton.id = "removeButton";
    
    removeButton.addEventListener("click", function firstClick() {
        // Ändra text och stil på knappen
        removeButton.innerText = "Sure?";
        newTask.style.color = "red";
        newTask.style.fontStyle = "italic";
    
        // Starta en timer för att återställa texten efter 3 sekunder
        const timer = setTimeout(() => {
            removeButton.innerText = "Delete";
            newTask.style.color = "";     // Ta bort röd text
            newTask.style.fontStyle = ""; // Ta bort kursiv stil
            removeButton.addEventListener("click", firstClick); // Återaktivera `firstClick`
            removeButton.removeEventListener("click", secondClick); // Ta bort `secondClick`
        }, 3000);
    
        // Definiera andra klickhändelsen för att ta bort uppgiften
        function secondClick() {
            clearTimeout(timer); // Avbryt timern om användaren klickar igen innan den löper ut
            removeButton.removeEventListener("click", firstClick); // Ta bort första klickhändelsen
            removeButton.removeEventListener("click", secondClick); // Ta bort andra klickhändelsen
            newTask.remove(); // Ta bort uppgiften
        }
    
        // Lägg till `secondClick` som körs om användaren klickar igen inom 3 sekunder
        removeButton.addEventListener("click", secondClick, { once: true });
        removeButton.removeEventListener("click", firstClick); // Temporärt ta bort `firstClick`
    }, { once: true });
    


    buttonWrapper.appendChild(removeButton);
    
    //text for new task
    let textNode = document.createTextNode(" " + taskText);
    newTask.appendChild(textNode);

    // description of task
    let description = document.createElement("p");
    if (taskDescription === "") {
        description.innerText = "";
    } else {
        description.innerText = "Description: " + taskDescription;
        newTaskDescription.value = ""; // clear input field after adding task
    }
    newTask.appendChild(description);

    
    taskList.appendChild(newTask); //append li to taskList ul
    
}};











// Remove task

function removeTask(){
    
}

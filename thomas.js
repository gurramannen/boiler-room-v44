// Task array
let listOfTasks = [];

//toDoList
//showMenu --> värde

//Värde --> kör funktion 

//Om värdet = nånting som betyder showmenu --> showmenu


function showMenu(){
let choice;
do {
    choice = prompt(
        `
        1. lägg till en ny uppgift\n
        2. Visa alla uppgifter\n
        3. Markera uppgift som klar\n
        4. Ta bort en uppgift.\n
        5. Avsluta\n
        `
    );
 // Convert choice to an integer and handle NaN input
    if (!isNaN(choice)) {
       choice = parseInt(choice);
    }

    switch (choice) {
       case 1:
           addTask();
           break;
       case 2:
           showAllTasks();
           break;
       case 3:
           markTaskAsComplete();         
           break;
       case 4:
           deleteTask();           
           break;
       case 5:
           console.log("Avslutar programmet...");
           break;
       default:
           alert(`Felaktig inmatning! Du angav ${choice}, godtagbar input är 1-5` );
    }
} while(choice !== 5);       
};

// Function add add tasks //!(REBECCA)

//let taskIdCounter = 1;

function addTask(){
    let title = prompt("Ange uppgiftens titel:"); // let in stead of const to enable future edit function
    let description = prompt("Ange uppgiftens beskrivning:");
    // skapa objektet
    let newTask = {
        taskId: listOfTasks.length + 1,
        title: title,
        description: description,
        isComplete: false
    }
    
    // pusha objekt in i arrayen
    listOfTasks.push(newTask);
    console.log("Uppgift tillagd:", newTask);
    alert(`Uppgift skapad\nTask nr: ${newTask.taskId}\nTitel: ${newTask.title}\nBeskrivning: ${newTask.description}`);
};

// Function to complete tasks //!"3" (THOMAS)
function checkIfTasksExist() {
 if (listOfTasks.length === 0) {
     alert("Det finns inga tasks.");
     return false;
 }
 return true;
}

function promptForTaskId(action) {
let taskIdInput;
do {
    // Anpassa prompttexten beroende på action (markera eller ta bort)
    let promptText = action === "complete" 
        ? "Välj taskID som du vill markera som klar." 
        : "Välj taskID som du vill ta bort";
    taskIdInput = parseInt(prompt(promptText), 10);

    if (isNaN(taskIdInput)) {
        console.log("Du skrev inte in ett nummer. Se listan över giltiga val.");
        showAllTasks();
    }
} while (isNaN(taskIdInput));
return taskIdInput;
}

function markTaskAsComplete(){    

    if (!checkIfTasksExist()) return;

    let taskIdInput = promptForTaskId("complete"); 
    let task = listOfTasks.find(task => task.taskId == taskIdInput);
    
    if (task) {
        task.isComplete = true;
        console.log("Uppgiften är markerad som klar.");
    } else {
        console.log("TaskID hittades inte. Använd menyval 2 för att se vilka tasks som finns.");
    }
};

// Function to remove tasks (GUSTAV)
let deletedTasks = []; //! denna används inte ännu
function deleteTask(){
    if (!checkIfTasksExist()) return;
    
    let taskIdInput = promptForTaskId("delete"); 

    let task = listOfTasks.findIndex(task => task.taskId == taskIdInput);
    if (task !== -1) {
        listOfTasks.splice(task, 1);
    // deletedTasks = listOfTasks.splice(index, 1);
        alert("Uppgift borttagen!");
        console.log("uppgift borttagen" + deletedTasks);
        updateTaskIds(); // Uppdatera taskId:n efter borttagning
    } else {
        alert("Ingen uppgift med det angivna ID:t hittades.");
        console.log("inget giltligt ID hittades")
    }
    };

// Function to show all tasks (BENJAMIN)
function showAllTasks(){
    if (!checkIfTasksExist()) return;
    
    listOfTasks.forEach(task => {
        console.log(`ID: ${task.taskId}, Titel: ${task.title}, Beskrivning: ${task.description}, Klar? ${task.isComplete}`);
    });
    };

function updateTaskIds() {
    listOfTasks.forEach((task, index) => {
        task.taskId = index + 1; // Sätt taskId baserat på dess nuvarande index
    });
};

// KÖR PROGAMMET
showMenu();
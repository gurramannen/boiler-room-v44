// Global variables
let listOfTasks = []; // Stores all tasks

// Task structure template
let taskIdCounter = 1;

// Function to display the menu and handle user choices
function showMenu() {
    let choice;
    do {
        choice = parseInt(prompt(`
            1. Lägg till en ny uppgift
            2. Visa alla uppgifter
            3. Markera uppgift som klar
            4. Ta bort en uppgift
            5. Avsluta
        `));

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
                alert("Felaktig inmatning!");
        }
    } while (choice !== 5);
}

// Function to add a new task
function addTask() {
    const title = prompt("Ange uppgiftens titel:");
    const description = prompt("Ange uppgiftens beskrivning:");
    
    let newTask = {
        taskId: taskIdCounter++,
        title: title,
        description: description,
        isComplete: false
    };
    
    listOfTasks.push(newTask);
    console.log("Uppgift tillagd:", newTask);
}

// Function to display all tasks
function showAllTasks() {
    if (listOfTasks.length === 0) {
        console.log("Inga uppgifter att visa.");
    } else {
        console.log("Alla uppgifter:");
        listOfTasks.forEach(task => {
            console.log(`ID: ${task.taskId}, Titel: ${task.title}, Beskrivning: ${task.description}, Klar: ${task.isComplete ? "Ja" : "Nej"}`);
        });
    }
}

// Function to mark a task as complete
function markTaskAsComplete() {
    const taskId = parseInt(prompt("Ange ID för uppgiften att markera som klar:"));
    let task = listOfTasks.find(t => t.taskId === taskId);
    
    if (task) {
        task.isComplete = true;
        console.log(`Uppgift ${taskId} markerad som klar.`);
    } else {
        alert("Uppgift med det angivna ID:et hittades inte.");
    }
}

// Function to delete a task
function deleteTask() {
    const taskId = parseInt(prompt("Ange ID för uppgiften att radera:"));
    const initialLength = listOfTasks.length;
    listOfTasks = listOfTasks.filter(t => t.taskId !== taskId);
    
    if (listOfTasks.length < initialLength) {
        console.log(`Uppgift ${taskId} raderad.`);
    } else {
        alert("Uppgift med det angivna ID:et hittades inte.");
    }
}

// Start the application
showMenu();

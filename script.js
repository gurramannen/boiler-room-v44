

// Task array
let listOfTasks = [];
console.log(listOfTasks);


//Object for tasks -- default structure

// let task = {
//     taskId:  taskIdCounter++,
//     title: "title",
//     description: "description",
//     isComplete: false
//    };
// console.log(task);


// do while loop menu

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
                console.log("1");
                
                break;
            case 2:
                showAllTasks();
                
                
                break;
            case 3:
                markTaskAsComplete();
                console.log("mark as complete");
                
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
// ?En funktion som söker upp en specifik uppgift genom dess id (ex. använd .find()), och ändrar dess isComplete-värde till true.

function markTaskAsComplete(){    

    if (listOfTasks.length === 0) {
        alert("Det finns inga tasks att markera");
    }
    else{
    
    let taskIdInput = parseInt(prompt("Välj taskID som du vill markera som klar."), 10);
    let task = listOfTasks.find(task => task.taskId === taskIdInput);
    
    if (task) {
        task.isComplete = true;
        console.log("Uppgiften är markerad som klar.");
    } else {
        console.log("TaskID hittades inte.");
    }
}};




// Function to remove tasks (GUSTAV)
let deletedTasks = []; //! denna finns inte ännu
function deleteTask(){
    if (listOfTasks.length === 0) {
        alert("Det finns inga tasks att ta bort")
    }
    else {
    
        let taskId = prompt("Välj taskID som du vill ta bort");
        let index = listOfTasks.findIndex(task => task.taskId == taskId);
        if (index !== -1) {
            listOfTasks.splice(index, 1);
        // deletedTasks = listOfTasks.splice(index, 1);
            alert("Uppgift borttagen!");
            console.log("uppgift borttagen" + deletedTasks);
            updateTaskIds(); // Uppdatera taskId:n efter borttagning
        } else {
            alert("Ingen uppgift med det angivna ID:t hittades.");
            console.log("inget giltligt ID hittades")
        }
    }
};

// Function to show all tasks (BEJAMIN)
function showAllTasks(){
    if (listOfTasks.length === 0) {
        console.log("Det finns inga tasks");
        
    } else {
        listOfTasks.forEach(task => {
            console.log(`ID: ${task.taskId}, Titel: ${task.title}, Beskrivning: ${task.description}, Klar? ${task.isComplete}`);
        });
    }
};

function updateTaskIds() {
    listOfTasks.forEach((task, index) => {
        task.taskId = index + 1; // Sätt taskId baserat på dess nuvarande index
    });
};

// KÖR PROGAMMET

showMenu();
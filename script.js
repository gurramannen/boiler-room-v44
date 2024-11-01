
// Global variables array **** kanske överflödigt, kommer från chatGPT-workflow
// const globalVariables = [
//     isRunning: true;
// ];

//let isRunning = true; //programmet körs
let userInput;

// Task array
let listOfTasks = [];
console.log(listOfTasks);


//Object for tasks -- default structure

let task = {
    taskId:  1,
    title: "title",
    description: "description",
    isComplete: false
   };
console.log(task);


// do while loop menu

//toDoList
//showMenu --> värde

//Värde --> kör funktion 

//Om värdet = nånting som betyder showmenu --> showmenu


function showMenu(){
    let choice;
    do {
        choice = parseInt(prompt(
            `
            1. lägg till en ny uppgift\n
            2. Visa alla uppgifter\n
            3. Markera uppgift so klar\n
            4. Ta bort en uppgift.\n
            5. Avsluta\n
            
            `
        ));

        switch (choice) {
            case 1:
                addTask();
                console.log("1");
                
                break;
            case 2:
                showAllTasks();
                console.log("2");
                
                break;
            case 3:
                markTaskAsComplete();
                console.log("mark as complete");
                
                break;
            case 4:
                deleteTask();
                console.log("4");
                
                break;
            case 5:
                console.log("Avslutar programmet...");
                console.log("5");
                
                break;
            default:
                alert("Felaktig inmatning!");
        }
    } while(choice !== 5);
        
};




function addTask(){
    
};

// Function to complete tasks 
function markTaskAsComplete(){
    
};

// Function to remove tasks
function deleteTask(){
    
};

// Function to show all tasks
function showAllTasks(){

}

//

showMenu();
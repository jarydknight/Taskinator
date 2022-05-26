// Query selector for save task button
const formEl = document.querySelector("#task-form");

// Variable that stores ul element with id tasks to do. This is the list we want to add a li element to
const tasksToDoEl = document.querySelector("#tasks-to-do");

// Function that creates new task item
const createTaskHandler = () => {
    // Prevent page from refreshing when event occurs
    event.preventDefault();

    const taskNameInput = document.querySelector("input[name='task-name']").value;

    const taskTypeInput = document.querySelector("select[name='task-type']").value;

    // Creates new list item
    const listItemEl = document.createElement("li");

    listItemEl.className = "task-item";

    // Create div to hold task info and add item to list

    const taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    
    listItemEl.appendChild(taskInfoEl);

    // Appends list item to ul
    tasksToDoEl.appendChild(listItemEl);
}

// Event listener for task button that executes on click
formEl.addEventListener("submit", createTaskHandler);
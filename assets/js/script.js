// Query selector for save task button
const formEl = document.querySelector("#task-form");

// Variable that stores ul element with id tasks to do. This is the list we want to add a li element to
const tasksToDoEl = document.querySelector("#tasks-to-do");

// Function that creates new task item
const createTaskHandler = () => {
    // Prevent page from refreshing when event occurs
    event.preventDefault();
    
    // Creates new list item
    const listItemEl = document.createElement("li");

    listItemEl.className = "task-item";

    listItemEl.textContent = "This is a new task.";

    // Appends list item to ul
    tasksToDoEl.appendChild(listItemEl);
}

// Event listener for task button that executes on click
formEl.addEventListener("submit", createTaskHandler);
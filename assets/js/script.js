let taskIdCounter = 0;

// Query selector for save task button
const formEl = document.querySelector("#task-form");

// Variable that stores ul element with id tasks to do. This is the list we want to add a li element to
const tasksToDoEl = document.querySelector("#tasks-to-do");

// Function that creates new task item
const taskFormHandler = () => {
    // Prevent page from refreshing when event occurs
    event.preventDefault();

    const taskNameInput = document.querySelector("input[name='task-name']").value;

    const taskTypeInput = document.querySelector("select[name='task-type']").value;

    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");

        return false;
    }

    const taskDataObj = {
        name: taskNameInput,

        type:taskTypeInput
    };

    formEl.reset();

    createTaskElement(taskDataObj);
    
}

const createTaskElement = (taskDataObj) => {
    // Creates new list item
    const listItemEl = document.createElement("li");

    listItemEl.className = "task-item";

    // add task id as a custom attribute
    listItemEl.setAttribute("data-task-id", taskIdCounter);

    // Create div to hold task info and add item to list
    const taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    
    listItemEl.appendChild(taskInfoEl);

    var taskActionsEl = createTaskActions(taskIdCounter);
    
    listItemEl.appendChild(taskActionsEl);

    // Appends list item to ul
    tasksToDoEl.appendChild(listItemEl);

    // increase task counter for next unique id
    taskIdCounter++;
};

const createTaskActions = (taskId) => {
    var actionContainerEl = document.createElement("div");

    actionContainerEl.className = "task-actions";

    // create edit button
    var editButtonEl = document.createElement("button");

    editButtonEl.textContent = "Edit";

    editButtonEl.className = "btn edit-btn";

    editButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(editButtonEl);

    // create delete button
    const deleteButtonEl = document.createElement("button");

    deleteButtonEl.textContent = "Delete";

    deleteButtonEl.className = "btn delete-btn";

    deleteButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(deleteButtonEl);

    // Drop down selection 
    const statusSelectEl = document.createElement("select");

    const statusChoices = ["To Do", "In Progress", "Completed"];

    for (let i = 0; i < statusChoices.length; i++) {
        // create option element
        const statusOptionEl = document.createElement("option");
        statusOptionEl.textContent = statusChoices[i];
        statusOptionEl.setAttribute("value", statusChoices[i]);
      
        // append to select
        statusSelectEl.appendChild(statusOptionEl);
    }

    statusSelectEl.className = "select-status";

    statusSelectEl.setAttribute("name", "status-change");

    statusSelectEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(statusSelectEl);

    return actionContainerEl;
}

// Event listener for task button that executes on click
formEl.addEventListener("submit", taskFormHandler);
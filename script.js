// ==========================================================================
// DAY 27: JAVASCRIPT CONSOLIDATION PROJECT (TO-DO LIST)
// ==========================================================================

// 1. SELECTING DOM ELEMENTS
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// 2. ARRAY TO STORE TASKS (State)
let tasks = [];

// 3. FUNCTION TO RENDER TASKS TO DOM
function renderTasks() {
    // Purani list ko saf karna
    taskList.innerHTML = "";

    // Array me se har task ko DOM me banana
    tasks.forEach(function (task) {
        const li = document.createElement("li");
        if (task.completed) {
            li.classList.add("completed");
        }

        // Task Text Span
        const span = document.createElement("span");
        span.textContent = task.text;
        span.className = "task-text";

        // Toggle complete status on text click
        span.addEventListener("click", function () {
            task.completed = !task.completed;
            renderTasks();
        });

        // Delete Button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";

        // Delete task from Array and re-render
        deleteBtn.addEventListener("click", function () {
            tasks = tasks.filter(function (t) {
                return t.id !== task.id;
            });
            renderTasks();
        });

        // Append to LI and UL
        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });

    console.log("Current Tasks Array:", tasks);
}

// 4. FUNCTION TO ADD TASK
function addTask() {
    const text = taskInput.value.trim();

    if (text === "") {
        alert("Please enter a task first!");
        return;
    }

    // New task object
    const newTask = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = ""; // Input clear karna
    renderTasks();
}

// 5. EVENT LISTENERS
addBtn.addEventListener("click", addTask);

// Enter key dabane par bhi task add ho
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});
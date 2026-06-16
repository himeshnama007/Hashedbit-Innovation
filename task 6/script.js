const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

function renderTasks() {

    // Ascending order
    tasks.sort((a, b) => a.localeCompare(b));

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        li.textContent = task + " ";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            renderTasks();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

addBtn.addEventListener("click", () => {

    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push(task);

    // Clear input field after adding
    taskInput.value = "";

    renderTasks();

    // Bonus UX: focus back to input
    taskInput.focus();
});


// Bonus UX: Press Enter to add task
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addBtn.click();
    }
});
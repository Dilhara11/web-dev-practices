// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const todoList = document.getElementById("todoList");

// Add task on button click
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        // Remove task on click
        li.addEventListener("click", () => {
            li.remove();
        });
        todoList.appendChild(li);
        taskInput.value = "";
    }
});

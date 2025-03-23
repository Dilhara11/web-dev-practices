"use strict";
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const todoList1 = document.getElementById("todoList");
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        li.addEventListener("click", () => {
            li.remove();
        });
        todoList1.appendChild(li);
        taskInput.value = "";
    }
});

const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const addTaskBtn = document.getElementById("addTask") as HTMLButtonElement;
const todoList1 = document.getElementById("todoList") as HTMLUListElement;

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

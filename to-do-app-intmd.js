// element selection
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const addMultipleBtn = document.getElementById("addMultiple");
const taskList = document.getElementById("taskList");
const observerLog = document.getElementById("observerLog");

// helper function: create a Task Element
function createTask(taskText){
    const li = document.createElement("li");
    li.textContent = taskText;


// on click: toggle higlight; if shift-clicked, remove task
li.addEventListener("click", (e) => {
    if(e.shiftKey){
        li.remove();
    }else{
        li.classList.toggle("highlight");
    }
});
return li;
}

// add a single task
addTaskBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if(text != ""){
        const task = createTask(text);
        taskList.appendChild(task);
        taskInput.value = "";
    }
});

// add multiple tasks 
addMultipleBtn.addEventListener("click", () => {
    const fragement = document.createDocumentFragment();
    for(let i = 1; i <= 5; i++){
        const task = createTask(`Task ${i}`);
        fragement.appendChild(task);
    }
    taskList.appendChild(fragement);
});


// Event Delegation: log click on any Task
taskList.addEventListener("click", (e) => {
    const target = e.target;
    if(target && target.nodeName === "LI"){
        console.log("Task clicked: " + target.textContent);
    }
});

// Mutation observer: log changes in the task list
const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
        if(mutation.type === "childList"){
            observerLog.textContent = "Task list changed at: " + new Date().toLocaleTimeString();
            console.log("Mutation observed: ", mutation);
        }
    });
});

observer.observe(taskList, {childList: true});

// DOM Traversal Example: double-click on a Task
taskList.addEventListener("dblclick", (event) => {
    const target = event.target;
    if(target && target.nodeName === "LI"){
        const parent = target.parentElement;
        if(target && target.nodeName === "LI"){
            const parent = target.parentElement;
            const nextSibling = target.nextElementSibling;
            console.log("Double-Clicked Task: " + target.textContent);
            console.log("Parent element: ", parent);
            if(nextSibling){
                console.log("Next sibling: ", nextSibling.textContent);
            } else{
                console.log("No next sibling.");
            }
        }
    }
});
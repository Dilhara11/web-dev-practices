// Selecting by ID (with type assertion)
const header = document.getElementById("header") as HTMLElement;
console.log("Header element:", header);

// Selecting by class using querySelector
const intro = document.querySelector(".intro") as HTMLElement;
console.log("Intro paragraph:", intro);

// Selecting all paragraphs
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((p, index) => {
    console.log(`Paragraph ${index + 1}:`, p);
});


const contentDiv = document.getElementById("content") as HTMLElement;

// Update textContent
contentDiv.textContent = "Updated Text Content in TS!";

// Update innerHTML
contentDiv.innerHTML = "<em>Italic Content in TypeScript!</em>";

const image = document.getElementById("myImage") as HTMLImageElement;
const changeImageBtn = document.getElementById("changeImage") as HTMLButtonElement;

changeImageBtn.addEventListener("click", () =>{
    console.log("button clicked\n");
    image.src = "images/elephant.jpg";
    image.alt = "New Image";
});


// create add and remove elements 

const todoList = document.getElementById("todoList") as HTMLUListElement
const addItemBtn = document.getElementById("addItem") as HTMLButtonElement;
const removeItemBtn = document.getElementById("removeItem") as HTMLButtonElement


addItemBtn.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "New Item (TS)";
    todoList.appendChild(newItem);
});

removeItemBtn.addEventListener("click", () => {
    const lastItem = todoList.lastElementChild;
    if (lastItem) {
        todoList.removeChild(lastItem);
    }
});



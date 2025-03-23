const header1 = document.getElementById("header");
console.log("Header element: ", header1);
// selecting using class name
const intro1 = document.querySelector(".intro");
console.log("Intro paragraph: ", intro1);
// selecting all paragraphs
const paragraph1 = document.querySelectorAll("p");
paragraph1.forEach((p, index) => {
    console.log(`Paragraph ${index + 1}:`, p);
});

// changing text content 
const contentDiv = document.getElementById("content");
contentDiv.textContent = "Updated Text content!";

// changing inner HTML 
contentDiv.innerHTML = "<strong>Bold content!</strong>";

const image = document.getElementById("myImage");
const changeImageBtn = document.getElementById("changeImage");

changeImageBtn.addEventListener("click", () =>{
    image.setAttribute("src", "images/elephant.jpg");
    image.setAttribute("alt", "new Image");
});

// creating, adding and removing elements 

// const todoList = doucument.getElementById("todoList");
const addItemBtn = document.getElementById("addItem");
const removeItemBtn = document.getElementById("removeItem");

addItemBtn.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "new Task";
    todoList.appendChild(newItem);
    console.log("New item added");
});

removeItemBtn.addEventListener("click", () =>{
    //remove last item if exists
    if(todoList.lastChild){
        todoList.removeChild(todoList.lastChild);
        console.log("Last item removed");
    }
});

// listening to the events 
const clickMeBtn = document.getElementById("clickMe");
const messageDiv = document.getElementById("message");

clickMeBtn.addEventListener("click", () =>{
    messageDiv.textContent = "Button was clicked!";
});







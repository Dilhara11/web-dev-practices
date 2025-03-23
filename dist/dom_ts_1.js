"use strict";
// Selecting by ID (with type assertion)
const header = document.getElementById("header");
console.log("Header element:", header);
// Selecting by class using querySelector
const intro = document.querySelector(".intro");
console.log("Intro paragraph:", intro);
// Selecting all paragraphs
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((p, index) => {
    console.log(`Paragraph ${index + 1}:`, p);
});
const contentDiv = document.getElementById("content");
// Update textContent
contentDiv.textContent = "Updated Text Content in TS!";
// Update innerHTML
contentDiv.innerHTML = "<em>Italic Content in TypeScript!</em>";
const image = document.getElementById("myImage");
const changeImageBtn = document.getElementById("changeImage");
changeImageBtn.addEventListener("click", () => {
    console.log("button clicked\n");
    image.src = "images/elephant.jpg";
    image.alt = "New Image";
});
// create add and remove elements 
const todoList = document.getElementById("todoList");
const addItemBtn = document.getElementById("addItem");
const removeItemBtn = document.getElementById("removeItem");
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
// listening to the events
const clickMeBtn = document.getElementById("clickMe");
const messageDiv = document.getElementById("message");
clickMeBtn.addEventListener("click", (event) => {
    messageDiv.textContent = "Button clicked!";
});

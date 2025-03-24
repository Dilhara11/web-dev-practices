// DOM Travesal
const firstPara = document.getElementById("first");

// changing parents background color
const container = firstPara.parentElement;
container.style.backgroundColor = "lightblue";

// changing the text of the first child 
firstPara.textContent = "Modifiesd first Paragraph";

//changing the style of the next sibling 
const secondPara = firstPara.nextElementSibling;
secondPara.style.color = "red"; 

const itemList = document.getElementById("itemList");
const resultDiv = document.getElementById("result");

// event delegation: attach one listner to the <ul>
itemList.addEventListener("click", (event) => {
    // determine if <li> was clicked
    const target = event.target;
    if(target && target.nodeName === "LI"){
        resultDiv.textContent = "You clicked on " + target.textContent;
    }
});

// dynamic styling using add() remove() and toggle()

const text = document.getElementById("text");
const toggleBtn = document.getElementById("toggleStyle");

toggleBtn.addEventListener("click", () =>{
    text.classList.toggle("highLight");
});

// using document fragments
// we can add more than one element to the document fragment

const bigList = document.getElementById("bigList");
const fragment = document.createDocumentFragment();
const addBtn = document.getElementById("add");

for(let i = 1; i <= 100; i++){
    const li = document.createElement("li");
    li.textContent = `List item ${i}`;
    fragment.appendChild(li);
}

addBtn.addEventListener("click", () => {
    bigList.appendChild(fragment);
});

// Mutation Observer

const observeList = document.getElementById("observeList");
const addNewBtn = document.getElementById("addNew");

// create obeserver callback
const observerCallback = (mutationsList, observer) => {
    for(const Mutation of mutationsList){
        if(Mutation.type === "childList"){
            console.log("A child node has been added or removed");
        }
    }
};

//  create an observer instance linked to the callback function
const observer = new MutationObserver(observerCallback);

// start observing the target node for configured mutations
observer.observe(observeList, {childList: true});

// add new items on button click
addNewBtn.addEventListener("click", () =>  {
    const newItem = document.createElement("li");
    newItem.textContent = "New List Item";
    observeList.appendChild(newItem);
});

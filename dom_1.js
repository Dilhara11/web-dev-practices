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
    image.setAttribute("src", "/images/elephant.jpg");
    image.setAttribute("alt", "new Image");
});

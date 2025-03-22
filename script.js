var oldVar = "I am Var";
let age = 25;
const name = "Achintha";

// variables re-assignment

age = 26 //works because age is let
// name = "Nimal" //this will generate error becuase const

console.log(oldVar);
console.log(`My name is ${name}. and i am ${age} years old.`);

//peek in to the conditionals

let score = 75;

//using if else 

if(score >= 90){
    console.log("grade: A");
}else if (score >= 75){
    console.log("Grade: B");
}else{
    console.log("Grade: C");
}

// using ternary operator

let result =  score >=50  ? "Passed" : "Failed";
console.log(`Result: ${result}`);


//using switch case 
let day = 3;

switch(day) {
    case 1:
        console.log("Moday");
        break;
    case 2:
        console.log("Tuesday");
        break;
        case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("ERROR: Invalid Day!");
}


//loops 

// for loops 

console.log("For Loop: ");
for(let i = 1; i <= 5; i++){
    console.log(`Iteration ${i}`);
}

// while loop
console.log("While Loop: ");
let x = 1;
while(x <=5){
    console.log(`Value: ${x}`)
    x++;
}

// do while loop (run atleast once)
console.log("Do-While loop");
let y = 6;
do{
    console.log("This is will run once even y = 6");
}while(y <= 5);

// loop thorough an array usig For each
console.log("For each loop");
let numbers = [10, 20, 30, 40];
numbers.forEach(num => console.log(`Number: ${num}`)); // this is lamda expression


// functions 

// regular functions
function greet(name){
    return `Hello, ${name}`;
}

// arrow function (shorter syntax)
const square = num => num * num;

// functions with default parameters
function multiply(a, b = 2){
    return a * b;
}

// function calling 
console.log(greet("Achitha"));
console.log(`Square of 4: ${square(4)}`);
console.log(`Multiply 5 by defaulut 2: ${multiply(5)}`);
console.log(`Multiply 5 by 3: ${multiply(5, 3)}`);

// Final Challange: Cover ALL the Above
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter a Number: ", function(num){
    // checking even or odd
    const type = num % 2 === 0 ? "Even" : "Odd";
    console.log(`This number is: ${type}`);

    // another way to do this 
    const checkEvenOdd = num => num % 2 == 0? "Even" : "Odd";
    console.log(`This is number is : ${checkEvenOdd(num)} by using lamda expression`);

    // diplay to the the number
    for(let i = 1; i <= num; i++){
        console.log(`Value: ${i}`);
    }

    // special statement if number = 10
    if(num == 10){ console.log("This is number 10!")}

    r1.close();
});


// lambda function

// AKA Arrow function

// no function keyword
// no curly brackes if its a sigle line code 
// return implicts if there is single expression


//sigle line
const greet1 = () => console.log("Hello, User!");
const add = (a, b) => a + b;

// whith multiple statements 
const  multipl = (x, y) => {
    let result = x * y;
    return result;
}

// single parameter
const squar = x => x * x;

// arrow functions in array methods (map, filter, reduced)

const numbers1 = [1, 2, 3, 4, 5];
const doubled = numbers1.map(n => n * 2);
const total = numbers1.reduce((acc, num) => acc + num, 0);
const even = numbers.filter(num => num % 2 === 0);

// in setTimeout method

setTimeout(() => console.log("this will return after 2 seconds"), 2000);

greet1();
console.log(add(1, 2));
console.log(multipl(2, 3));
console.log(doubled);
console.log(even);
console.log(total);



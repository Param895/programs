//basic declaration in javascript
var greet="Hello Javascript";
console.log(greet);

// javascript object
const userId = {
    name:"Param",
    age: 20,
    isStudent:true,
    };

function user() {
    return (`Hello ${userId.name} , your age is ${userId.age} and you are a student: ${userId.isStudent}`);
    };

console.log(user());

// javascript switch case
var number = 4;
switch (number) {
    case 1: console.log("number is 1");
    break;
    case 2: console.log("number is 2 ");
    break;
    case 3: console.log("number is 3");
    break;
    default: console.log("number is not valid");
}

// for loop in javascript
for (let i=1; i<=4; i++){
    console.log(i);
}

//basic function 
var nword = "World";

function concat(){
    return "Hello "+ nword;
}

console.log(concat());

// arrow function
const concat2 = () => {
    return `Hello ${nword}`;
}

console.log(concat2());

// declaration of function as key
const student = {
  name: "Rameshwer",
  age: 25,
  isStudent: true,
  welcome: () => {
    return `Welcome ${student.name}, you are ${student.age} years old. Student status: ${student.isStudent}`;
  },
};

console.log(student.welcome());

// if else statement
let i=1;
if (i>10){
    console.log("i is greater than 10");
}
else if (i<10){
    console.log("i is less than 10");
}
else{
    console.log("i is equal to 10");
}

// array in javascript
const students = ["Rohan", "Mohan", "Rohit", "Shivam"];
console.log(`1st position ${students[2]} 2nd position ${students[0]}`);
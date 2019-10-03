/* ============================= Challenge 1 =================================*/

// Challenge 1:
// Create a new variable called user, set the value to: tom
// Write an if statement: if the user's name is tom, say 'Hello Tom'
// Add an else condition: say 'Hello someone other than Tom'
// Add a new variable called age, set the value to: 18
// If the user is 18, say 'welcome to the casino!'
// Research 'prompt'. Use it in your code to ask the user for their age.
// If the user is less than 18 years old, use the alert method to deny entry.

const user = "tom", age = 18, userAge = prompt("What is your age?");
console.log(user === "tom"?`Hello ${user}`:`Hello someone other than ${user}`);
console.log(userAge >= age ? "welcome to the casino!" : alert("No entry!") );

/* ============================= Challenge 2 =================================*/

// Challenge 2:
// Assign an empty array to a students variable.
// Use the push method to add a student called Sarah
// Use prompt to ask the user for their name, add it to the array.
// Use a loop to ask the user for 3 names, add them all to the array.
// Loop through the array and use the alert method to read each user back to the 
// user.

let students = [], name = prompt("What is your name?");
students.push("Sarah", name);    

for (let i = 0; i < 3; i++)
{
    const nameLoop = prompt("What is your name?");
    students.push(nameLoop);
}

for (let i of students)
{
    alert(i);
}

/* ============================= Challenge 3 =================================*/

// Challenge 3:
// Store hashes in your students array
// Each student should have a name and age property.
// Make sure you can loop through each student & display their name and age 
// in the terminal.

let students = [
    {
        name: "Sarah",
        age: 17,
    },
    {
        name: "Sarah-k",
        age: 18,
    },
    {
        name: "Sara",
        age: 19,
    },
    {
        name: "Sarahh",
        age: 20,
    },
];

for (let i in students)
{
    console.log(students[i].name, students[i].age)
}

/* ============================= Challenge 4 =================================*/

//Use ES6 whenever possible.
// CHALLENGE 4
// Create a function sum() that will sum all arguments passed to it.
// Quantity of the arguments is unknown.
// Use console.log() at the end of the sum() function to print result.
const challenge_4 = (...numbers) => [...numbers].reduce((a, b) => a + b, 0);

challenge_4(1, 3);
//4
challenge_4(10, 20, 5);
//35
challenge_4(2, 5, 80, 1, 10, 12);
//110

/* ============================= Challenge 5 =================================*/


// CHALLENGE 5
// Change code to match output.

var i = 10;
// for (var i = 0; i < 5; i++) {
// // some stuff
//     console.log(i);
// }
console.log(i);
// It currently prints: 5
// We want it to stay: 10

/* ============================= Challenge 6 =================================*/

// CHALLENGE 6 Find the Largest Number
// Computers are able to compare numbers, and know which is larger and which 
// is smaller.
// Write a method that will take two numbers, and return whichever is larger. If 
// the numbers are equal, it should return "Numbers are equal".
// *E.g.* largest_number(100,50) should return 100
// *E.g.* largest_number(10,10) should return "Numbers are equal"
// Then, as an optional extra.... can you set this method up, so, if it is given 
// a variable that is not a number, it returns "Make sure both inputs are 
// numbers", as oppose to erroring out.




/* ============================= Challenge 7 =================================*/

// CHALLENGE 7 - The Nth Fibonacci Number
// A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each 
// subsequent number is the sum of the previous two.I.e. 0, 1, 1, 2, 3, 5, 8...
// Write a method that will return the nth number of the sequence. The syntax is 
// easy, getting your heard around the algorithm is the challenge.It might be 
// worth writing this in pseudocode before writing the method.
// *E.g.* nth_fibonacci(0) should return 0
// *E.g.* nth_fibonacci(3) should return 2
// *E.g.* nth_fibonacci(6) should return 8


/* ============================= Challenge 8 =================================*/

// CHALLENGE 8 - Assorted Variable Challenges 
// Each of these can be considered completely separate challenges - they don't 
// build on each other, they just got lumped in together because they're all 
//pretty simple as far as coding goes.This is more about logic & problem - 
// solving! Good luck! 


// 8.1
// Find out the diameter of the sun and then store this in a variable. Ask the 
// user to enter a number.Calculate the number as a percentage of the sun's 
// diameter.


// 8.2
// Ask the user to enter a temperature in celsius. Calculate the temperature as 
// fahrenheit.


// 8.3
// Ask the user to enter a temperature in fahrenheit. Calculate the temperature 
// as celcius.


// 8.4 
// Ask the user to enter the number of animals and birds and insects in their 
// fake zoo.Calculate the number of legs in the fake zoo!


// 8.5
// Ask the user the following questions, and then store the responses in 
// variables.Assemble the individual variable values into a single string.
// * "What is your first name?"
// * "What is your last name?"
// * "What is your street number?"
// * "What is the name of your street?"
// * "What is the name of your suburb?"
// * "What is the name of your city?"
// * "What is your postcode?"

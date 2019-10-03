// Normal Function
// function functionName()
// {
//     console.log("This is a Normal Function.");
// }


// Arrow Function
// () => 
// {
//     console.log("This is an Arrow Function.");
// }


// Functions are objects.
    // - Can be passed to another function.
    // - Can be part of an Array.
    // - Can be part of an Object.
    // - Can be assigned to a variable.
    // - Can be invoked.


// function person(function1)
// {
//     console.log("Person Function");
// }

// function function1()
// {
//     console.log("Another function");
// }

// person(funcstion(){
//     console.log("Another function");
// })


let array = ["Phillip", "Shun", "Dan"];

function func1()
{
    console.log("func 1");
}

function func2()
{
    console.log("func 2");
}

function func3()
{
    console.log("func 3");
}

let arrayOfFunctions = [func1, func2, func3];


for (func in arrayOfFunctions)
{
    arrayOfFunctions[func]();
}

var person = {
    firstname: "Hayden",
    lastname: "Fuller",
    fullname: function() { console.log(`${this.firstname} ${this.lastname}`) }
}

let name = "Ewe Lin";

let greet = function ()
{
    console.log("Hello");
}

greet();
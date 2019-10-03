/*
CHALLENGE 1: Function Fix-Ups
    Fix up the code provided below to make it work.
    Then, identify the 3 different function types being used here.
    They could be any of these: 
    - Regular function, 
    - Returning function, 
    - Anonymous function, 
    - IIFE or self-invoking function, 
    - Arrow function.
​
    Function 1 is a:
    Function 1 was fixed by: 
    Function 2 is a:
    Function 2 was fixed by:
    Function 3 is a:
    Function 3 was fixed by:
*/

// Function 1: Anonymous function
var funky = function () 
{
    console.log('I am funky');
};

funky();

// Function 2: Self Invoked Arrow Function.
(() => 
{
    console.log("Another freaky function type is here!")
})();


// Function 3: Regular function.
console.log( myFunction(5) );

function myFunction(y) {
  return y * y;
}
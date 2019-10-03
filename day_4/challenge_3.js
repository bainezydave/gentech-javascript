/*
CHALLENGE 3: Loop Racer
​
Write a set of functions that use different types of loops to print numbers from 1 to a specific number (eg. 1000).
​
Your functions might look like this:
​
// START CODE EXAMPLE
function forLoopRacer (maxCountingNumber) {
    var startTime = Date.now();
​
    // your loop stuff goes here 
    for (var i = 0; i < maxCountingNumber; i++){
        console.log(i);
    }
​
    var finishTime = Date.now();
​
    var functionDuration = (finishTime - startTime) / 1000; // convert from milliseconds to seconds with "/1000"
    console.log(`The for loop function took ${functionDuration} seconds to run.`);
}
forLoopRacer(1000);
​
// END CODE EXAMPLE
​
Make sure you write functions that cover these types of loops:
    - while
    - do while
    - for in
    - for of
And yes, your functions must be able to count up to any number. They must use a parameter!
*/


function forLoopRacer(maxCountingNumber) 
{
    // your loop stuff goes here 
    for (var i = 0; i < maxCountingNumber; i++)
    {
        console.log(i);
    }
}


function whileLoopRacer(maxCountingNumber) 
{
    var i = 0;
    while (i < maxCountingNumber)
    {
        console.log(i);
        i++;
    }
}


function doWhileLoopRacer(maxCountingNumber) 
{
    var i = 0;
    do 
    {
        console.log(i);
        i++;
    } while (i < maxCountingNumber);
}


function forInLoopRacer(maxCountingNumber) 
{
    
}


function forOfLoopRacer(maxCountingNumber) 
{

}




// forLoopRacer(10);
// whileLoopRacer(10);
// doWhileLoopRacer(10);
forInLoopRacer(10);
// forOfLoopRacer(10);
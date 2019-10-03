/*
CHALLENGE 4: Array Iterators
Make sure you've done Challenge 3 before doing this. 
This is a bit trickier - it has more moving parts than Challenge 3.
​
Just like in Challenge 3, we must count from 1 up to a specified number and see how long it takes.
This time, we're going to use the "forEach" function that JavaScript provides for arrays.
So you will need to:
    - create an array of a certain size
    - fill that array with numbers from 1 up to the specified number 
    - initialize a starting time before the loop runs
    - use the "forEach" function to loop through each entry of the numbers array
    - print a number from the array to console in every iteration of the loop
    - initialize a finishing time after the loop finishes
    - calculate the duration in seconds based on the difference between starting & finishing time
You may need multiple functions to keep this solution clean, dry & easy to read. 
​
So, is that ".forEach" iterator faster than any of the basic loop types? 
​
*/


// START CODE EXAMPLE
function forLoopRacer(maxCountingNumber) 
{
    var startTime = Date.now();

    let array = [];

    // your loop stuff goes here
    for (var i = 0; i < maxCountingNumber; i++)
    {
        array.push(i);
    }

    var finishTime = Date.now();

    var functionDuration = (finishTime - startTime) / 1000; // convert from milliseconds to seconds with "/1000"
    console.log(`The for loop function took ${functionDuration} seconds to run.`);
}
forLoopRacer(1000);
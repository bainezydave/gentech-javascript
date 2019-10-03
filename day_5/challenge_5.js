/*
CHALLENGE 5: Loop & Iterator Racer, Mini App Edition

This is very similar to challenge 3 & 4 from yesterday - if you haven't done those yet, no big deal. Start here.
If you did complete those challenges yesterday, this should be quick for you! 

Write a little app that prompts the user to ask what type of loop or iterator they want to run.
There should be a class that contains functions for racing each type of loop or array iterator.
These functions need to use loops or array iterators to print numbers from 1 to a specific number (eg. 1000).
The app should only stop running when the user chooses to exit.
You might want to present options in a list:
- 1: For loop
- 2: While Loop
- 3: Do-While Loop
- 4: For-Of Loop
- 5: Array.forEach
- 6: All at once
- 7: Exit

Your class should contain functions that look like this:

// START CODE EXAMPLE
function forLoopRacer (maxCountingNumber) {
    var startTime = Date.now();

    // your loop stuff goes here 
    for (var i = 0; i < maxCountingNumber; i++){
        console.log(i);
    }

    var finishTime = Date.now();

    var functionDuration = (finishTime - startTime) / 1000; // convert from milliseconds to seconds with "/1000"
    console.log(`The for loop function took ${functionDuration} seconds to run.`);
}
forLoopRacer(1000);

// END CODE EXAMPLE

Make sure you write functions that cover these types of loops:
    - while
    - do while
    - for of
    - array.forEach
And yes, your functions must be able to count up to any number. They must use a parameter!
You may have to create an array of numbers for the "for of" and "array.forEach" iterators - see if you can do that in a class constructor.
*/
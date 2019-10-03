/*
# CHALLENGE 2 - Random Number Magician
A magician on the street is about to start their magic trick. 
First, they are requesting a number (an Integer) from people on the street. 
They will then use that number, to chose that many random, whole numbers, between 1 and 100.
## 2.1 - Core Functionality
Create a method for the magician that will generate a list [array] of random, whole numbers from a given integer.
_E.g._ random_number_generator(5) should return [23,34,1,2,13] ... not the same numbers, but should return 5 of them
## 2.2 - Guaranteed Randomness
Can you ensure these numbers will be unique?
*/

function random_number_generator(val) 
{
    // Create an array of numbers from min (1) to max (100).
    let numbers = [], chosenNumbers = [], min = 1, max = 100;

    for (let i = min; i <= max; i++) 
    {
        numbers.push(i);
    }

    // Generate a random integer less than the current length of the array. 
    for (let i = 0; i < val; i++)
    {
        let randomNumber = Math.floor(Math.random() * numbers.length),
            chosenNumber = numbers[randomNumber];
        
        chosenNumbers.push(chosenNumber);

        // removes this number from the array so it can't be chosen twice.
        numbers.splice(randomNumber, 1);
    }

    console.log(chosenNumbers);
}

random_number_generator(100);
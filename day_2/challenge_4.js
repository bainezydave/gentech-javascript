// CHALLENGE 4 - Magic Number
// There are some crazy phenomina in maths - you're about to discover one!

// 4.1 - Magic Number Algorithm 
// Write a function that prompts the user to enter a 4 digit number, made up of
// at least 2 different numbers. 
// Rearrange the string of digits to form the largest and smallest 4 digit 
// numbers possible.
// Take these numbers, and subtract the smaller number from the larger.

// *E.g.* If the user entered 8082
// 8820 - 0288 = 8532
// 8532 - 2358 = 6174
// 7641 - 1467 = 6174

// It hits 6174, then stops.

// 4.2 Magic Number Iteration Counter

// Count how many iterations are required to reach the magical number 6174. What 
// is the number 6174 ?

(() =>
{
    var number = prompt("Enter a 4 digit number made up of at least 2 different numbers.");
    var uniqueNum = [...new Set(number)];
    
    // check if number meets requirements.
    if (uniqueNum.length <= 1 || isNaN(Number(number)) || number.length !== 4)
    {
        console.log("Not a valid number.");
        return;
    }
    
    // runs calculations on numbers
    var count = 0;

    while (number != "6174") 
    {
        var array = [];

        for (var i in number)
        {
            array.push(Number(number[i]));
        }

        var smallest = array.sort().join("");

        var largest = array.sort().reverse().join("");

        number = largest - smallest;

        console.log(`Largest: ${largest} Smallest: ${smallest} Sum: ${number}`);

        number = number.toString();

        count++;
    }

    console.log(`There are ${count} iterations to get to 6174.`);
    
})();



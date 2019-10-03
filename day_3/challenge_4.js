/*
CHALLENGE 4 - Array Square Mathematician 
## 4.1 - Core Functionality
Write a method that will take an array of numbers as its input. Square each of these numbers, and return the entire array
_E.g._ square_numbers_of_an_array([1, 2, 3, 4, 5]) should return [1, 4, 9, 16, 25]
_E.g._ square_numbers_of_an_array([9]) should return [81]
_E.g._ square_numbers_of_an_array([]) should return []
## 4.2 - Error-Proofing
Alter the method, so if it is given a data type in the array that is not a number, it will skip over instead of erroring out
_E.g._ square_numbers_of_an_array([4, 5, 6, "A", 7]) should return [16, 25, 36, 49]
*/

function squaredNumbers(arr)
{
    var newNumbers = [];

    if ( Array.isArray(arr) !== true ) return;

    for (let i in arr)
    {
        if ( isNaN(arr[i]) === true ) continue;

        let num = arr[i] * arr[i];

        newNumbers.push(num);
    }

    console.log(newNumbers);
}

squaredNumbers([1, 2, 3, 4, 5]); //[1, 4, 9, 16, 25]
squaredNumbers([9]); //[81]
squaredNumbers([]); //[]
squaredNumbers([4, 5, 6, "A", 7]); //[16, 25, 36, 49]
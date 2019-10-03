/*
# CHALLENGE 1 - Array Index Drills
We access elements inside of an array by index. Try out these drills to get a handle on it.
## 1.1 - Number Array
- Initialise an array named "arr", and it should contain the numbers 1, 2, 3, 4, 5.
- Get the number at the last index of the array and add it to the number at the second last index.
- Print the result.
## 1.2 - Word Array
- Initialise an array with the words "I", "LOVE", "JAVASCRIPT".
- Assemble each word in the array into a single string using concatenation.
- Print the resulting string to show that this works (do NOT print the array!).
## 1.3 - Number Array Looping Printer
- Use a loop to print each value of the numbers array.
## 1.4 - Reverse Number Array Looping Printer
- Use a loop to print each value of the numbers array in reverse without reversing the array.
*/

let arr = [1, 2, 3, 4, 5];

arr[arr.length - 2] +=  arr[arr.length - 1]

console.log(arr);


let words = ["I", "LOVE", "JAVASCRIPT"],
    sentence = words[0] + " " + words[1] + " " + words[2];

console.log(sentence);


for (var i in arr)
{
    console.log(arr[i]);
}

for (var i = arr.length - 1; i >= 0; i--)
{
    console.log( arr[i] );
}
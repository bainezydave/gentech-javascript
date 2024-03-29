// CHALLENGE 2 - String Reverser
// Write a method that will take a string, and will return a new string with the 
// same letters, in reverse order.

// _E.g._ reverse("hello") should return "olleh"
// _E.g._ reverse("bird") should return "drib"
// _E.g._ reverse("two words") should return "sdrow owt"

// So no - you can't use a built-in Javascript method for just reversing the input. 
// The "reverse" function that you write should have at least 1 loop inside of it.

function stringReverser(val)
{
    if (typeof val === "string")
    { 
        var reveresedString = [];
        for (var i = val.length - 1; i >= 0; i--)
        {
            reveresedString.push(val[i])
        }
        return reveresedString.join("");
    }
}

console.log( stringReverser(1) );
console.log( stringReverser("hello") );
console.log( stringReverser("hell") );



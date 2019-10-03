/*
CHALLENGE 2: Pig Latin Converter
​
What is pig latin? Pig latin takes the first letter of every word, moves it to the end of the word and adding ‘ay’. 
For example, "the quick brown fox" becomes "hetay uickqay rownbay oxfay".
​
Write a function that translates provided text to Pig Latin.
​
_E.g._ pig_latin("Sydney or Melbourne or Perth are possible destinations") should return "ydneySay roay elbourneMay roay erthPay reaay ossiblepay estinationsday"
​
_E.g._ pig_latin("A") should return "Aay"
​
_E.g._ pig_latin("") should return "ay"
​*/

function pigLatin(text)
{
    let words = text.split(" ");
    let convertedText = "";

    for (word in words)
    {
        convertedWord = words[word].substr(1) + words[word][0] + "ay ";
        convertedText += convertedWord;
    }
    console.log(convertedText);
}


pigLatin("Sydney or Melbourne or Perth are possible destinations"); //"ydneySay roay elbourneMay roay erthPay reaay ossiblepay estinationsday"
pigLatin("A"); //"Aay"
pigLatin(""); //"ay"
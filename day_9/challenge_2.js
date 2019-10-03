/*
CHALLENGE 2: Movie Review Terminal App

Create a little NodeJS terminal app that shows the ratings of a movie from the Open Movie Database API.
You should be able to prompt the user for a movie name, and then pass the user's desired movie name into the URL that you fetch data from.

You can check out the Open Movie Database API & documentation here: https://www.omdbapi.com/

This challenge requires you to install a NodeJS package so that you can use Javascript's new "fetch" functionality in the Node terminal.
In your working directory, run this command:
npm i node-fetch
So an example of the app in action:
"What movie would you like to see?"
// user enters "Avengers"
// the app fetches from the API URL
"The movie with the title of 'The Avengers' has a MetaCritic score of 69 and an IMDB rating of 8.0."

You can use the code below to start off with fetch ready for your NodeJS app:
*/
const fetch = require("node-fetch");

let userInput = process.stdin.setEncoding('utf-8');
console.log("What movie would you like to see?");
userInput.on('data', function (movie)
{
    searchMovie(movie);
});

function searchMovie(movie)
{
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=e3bf8942&t=${movie}`)
        .then(res => res.json())
        .then(data => console.log(`The movie with the title of '${data.Title}' (${data.Year}) has a MetaCritic score of ${data.Metascore} and an IMDB rating of ${data.imdbRating}.`))
        .then(() => process.exit())
        .catch(err => console.log(err));
}
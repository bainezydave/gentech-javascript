/*
CHALLENGE 1: Multi-Promise Handling

1.1 - Core App: 
Create a terminal app that pulls one joke from each of these APIs & only shows them all when everything has finished loading:
- https://sv443.net/jokeapi 
- https://github.com/15Dkatz/official_joke_api?ref=apilist.fun
- https://icanhazdadjoke.com/api

You should be able to use "Promise.all" to handle this cleanly & display 3 jokes all at the same time!

1.2 - Joke Race:
Modify the app so that it uses "Promise.race" to return the first joke that comes back from any of the APIs. Only show one joke! 
*/

const fetch = require('node-fetch');

joke1 = () => fetch("https://sv443.net/jokeapi/category/Any?format=json");
joke2 = () => fetch("https://official-joke-api.appspot.com/jokes/random");
joke3 = () => fetch("https://icanhazdadjoke.com/slack");

var jokes = [joke1(), joke2(), joke3()];

Promise.all(jokes)
    .then(result => Promise.all(result.map(v => v.json())))
    .then(data => printJokes(data))
    .catch(err => console.log(err));

function printJokes(jokes)
{
    // Joke 1
    if (jokes[0])
    {
        if (jokes[0].hasOwnProperty("joke"))
        {
            console.log('\x1b[36m%s\x1b[0m', jokes[0].joke);
        } else 
        {
            console.log('\x1b[36m%s\x1b[0m', `${jokes[0].setup} \n ${jokes[0].delivery} \n`);
        }
    }

    // Joke 2
    if (jokes[1])
    {
        console.log('\x1b[32m%s\x1b[0m', `${jokes[1].setup} \n ${jokes[1].punchline} \n`);
    }

    // Joke 3
    if (jokes[2])
    {
        console.log('\x1b[31m%s\x1b[0m', jokes[2].attachments[0].text);
    }
}



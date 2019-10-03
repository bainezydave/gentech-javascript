// Where we define all our helpers and export to another File.
const students = ["Bob", "Charlie", "Shun"];

const user = {
    name: "Bob",
    age: 25,
    hobbies: ["Painting", "music", "coding"],
    address: {
        street: "118 Walker",
        city: "Syndey",
        postcode: 2007
    },
    greet: function ()
    {
        return `Hello ${this.name}`;
    }
};

const fetch = require('node-fetch');

const myFuncs = {
    greet: () => "Hello",
    getPokemon: fetch("https://pokeapi.co/api/v2/pokemon/1/"),
    postData: fetch("https://httpbin.org/post",
        {
            method: "POST",
            body: JSON.stringify("body"),
            headers: { 'Content-Type': 'application/json' }
        }),
};


// export the code from 1 file to another. Only 1 export per file.
module.exports = { students, user, myFuncs };
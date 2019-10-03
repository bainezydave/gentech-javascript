// Import the date coming from another File.
const data = require('./1_util');


const { students, myFuncs, ...other } = data;

// data.students.push("Phillip");

// console.log(myFuncs.greet());

// for (student in students)
// {
//     console.log(students[student])
// }


const myPokemon = async () =>
{
    try
    {
        let data = await myFuncs.getPokemon;
        let res = await data.json();
        console.log(res.forms[0].name);
    } catch (e)
    {
        console.log(e);
    }
};

myPokemon();

// myFuncs.getPokemon
//     .then(res => res.json())
//     .then(val => console.log(val.forms[0].name));
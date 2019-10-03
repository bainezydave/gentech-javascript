console.log("Person 1: Shows ticket.");
console.log("Person 2: Shows ticket.");

const promiseMyGirlfriendIsBringingTickets = () => 
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() => resolve("ticket"), 5000);
    });
};


const getPopCorn = promiseMyGirlfriendIsBringingTickets().then(t =>
{
    console.log(`Girlfriend: I got the ${t}`);
    console.log("Boyfriend: Let's go in.");
    console.log("Girlfriend: I want Popcorn");
    return new Promise((resolve, reject) =>
    {
        resolve(`${t} & Popcorn`);
    });
});


const addButter = getPopCorn.then(items =>
{
    console.log(`Me: I got ${items}`);
    console.log("girlfirend: Let's go in.");
    return new Promise((resolve, reject) =>
    {
        resolve(`${items} butter`);
    });
});


addButter
    .then(t => console.log(`Person 3: shows ${t}`))
    .catch(err => console.log(err));


console.log("Person 4: Shows ticket.");
console.log("Person 5: Shows ticket.");









// console.log("Person 1: Shows ticket.");
// console.log("Person 2: Shows ticket.");

// async function promiseMyGirlfriendIsBringingTickets()
// {
//      setTimeout("Ticket", 5000);
// }


// promiseMyGirlfriendIsBringingTickets()
//     .then(t => console.log(`Person 3: shows ${t}`))
//     .catch(err => console.log(err));


// console.log("Person 4: Shows ticket.");
// console.log("Person 5: Shows ticket.");
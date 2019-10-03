console.log("Person 1: Shows ticket.");
console.log("Person 2: Shows ticket.");

// ES5
// async function preMovie()
// {
//     return "Ticket";
// }



// ES6
const preMovie = async () =>
{
    const bringTickets = new Promise((resolve, reject) => 
    {
        setTimeout(() => resolve("Ticket"), 3000)
    });

    let ticket = await bringTickets;

    console.log(`Girlfriend: I got the ${ticket}`);
    console.log("Boyfriend: Let's go in.");
    console.log("Girlfriend: I want Popcorn");

    // ===================================== //

    const getPopCorn = new Promise((resolve, reject) =>
    {
        resolve("Popcorn");
    });
    
    let popCorn = await getPopCorn;

    console.log(`Me: Got ${ticket} and ${popCorn}`);
    console.log("Girlfriend: I Want butter on my Pop corn.");

    // ===================================== //

    const addButter = new Promise((resolve, reject) =>
    {
        resolve("Butter");
    });

    let butter = await addButter;

    console.log(`Me: I got ${butter}`);

    // ===================================== //

    return ticket;
}

preMovie()
    .then(t => console.log(`Person 3: Shows the ${t}`))
    .catch(err => console.log(err));

console.log("Person 4: Shows ticket.");
console.log("Person 5: Shows ticket.");
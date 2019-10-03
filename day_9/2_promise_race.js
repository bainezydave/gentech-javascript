function user1()
{
    return new Promise((res, rej) =>
    {
        setTimeout(() => res("David"), 3000);
    });
}


function user2()
{
    return new Promise((res, rej) =>
    {
        setTimeout(() => res("Kats"), 3000);
    });
}


function user3()
{
    return new Promise((res, rej) =>
    {
        setTimeout(() => res("Shun"), 5000);
    });
}

var userList = [user1(), user2(), user3()];

Promise.race(userList)
    .then(userNames => console.log(userNames))
    .catch(err => console.log(err));
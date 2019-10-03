function adder(x, y)
{
    let answer = x + y;

    return new Promise((res, rej) =>
    {
        if (isNaN(answer)) rej("Please input numbers");
        res(answer);
    });
}

adder(4, 5)
    .then(answer => console.log(answer) )
    .catch(error => console.log(error));
    

    console.log("something")
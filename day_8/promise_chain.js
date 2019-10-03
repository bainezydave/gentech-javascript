function adder(x, y)
{
    let answer = x + y;

    return new Promise((res, rej) =>
    {
        if (isNaN(answer)) rej("Please input numbers");
        res(answer);
    });
}

adder(4, 4)
    .then(answer1 => adder(answer1, 5))
    .then(answer2 => adder(answer2, 5))
    .then(answer3 => adder(answer3, "deff"))
    .then(answer4 => console.log(answer4))
    .catch(error => console.log(error));
    
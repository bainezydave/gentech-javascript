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
    .then(answer1 =>
    {
        adder(answer1, 6)
            .then(answer2 =>
            {
                adder(answer2, 6)
                    .then(answer3 =>
                    {
                        console.log(answer3);
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
    
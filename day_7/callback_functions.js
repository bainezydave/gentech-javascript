// Callback functions are the functions that are passed to another 
// function and get exectues in the called function.

function adder(x, y, callback)
{
    let answer = x + y;
    if (typeof callback === 'function' && callback !== undefined)
    {
        return callback(answer);   
    } else
    {
        console.log(answer);
    }
}

function saySomething(input)
{
    console.log(`Asnwer is from the callback function ${input}`);
}

adder(5, 7, saySomething);


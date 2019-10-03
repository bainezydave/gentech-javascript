async function greet()
{
    return "Hello";
}

console.log(greet());

greet()
    .then(m => console.log(m))
    .catch(err => console.log(err))
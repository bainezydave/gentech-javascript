let ourPromise = new Promise((resolveValue, rejectValue) =>
{
    if (true)
    {
        resolveValue("All Good");
    } else
    {
        rejectValue("Oh no.")
    }
});

ourPromise
    .then(result => { console.log(result); })
    .catch(error => { console.log(error); });
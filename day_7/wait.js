function wait(ms)
{
    let currentTime = Date.now(),
        startTime = currentTime;
    
    while (currentTime - startTime < ms)
    {
        currentTime = Date.now();
        console.log(currentTime);
    }
}

wait(5000);

console.log("timer finished.")
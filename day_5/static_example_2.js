class Home
{
    constructor() { }
    static unlock(passPhrase)
    {
        console.log(passPhrase === "Please" ? "Please Enter!" : "Not Allowed!");
    }
}

Home.unlock("Please");
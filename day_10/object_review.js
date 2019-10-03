(() =>
{
    var person = {
        name: "Hayden",
        age: 572,
        hobbies: ["music", "drinking", "coding"],
        address: {
            street: "118 Walker Street",
            city: "Sydney",
            postCode: 2112
        },
        greet: function () 
        {
            console.log(`Hello ${this.name}`);
        }
    };
    
    console.table(person);

    person.name = "Alex";
    person.hobbies.push("regre");


    console.table(person);



})();

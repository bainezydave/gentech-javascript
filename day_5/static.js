class Dog
{
    constructor(name)
    {
        this.name = name;
        this.count++;
    }

    static dogCount()
    {
        return `the dog count is ${Dog.count}`;
    }
}

Dog.count = 0;

var dog1 = new Dog("Tommy");
var dog2 = new Dog("Rex");


console.log(Dog.dogCount());
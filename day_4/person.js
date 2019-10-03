function Person(firstName, lastName, age) 
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

// instance of function
var person1 = new Person("Bob", "ross", 20);

console.log(person1.name);
console.log(person1.age);

// to add custom function to a function object, use prototype keyword
Person.prototype.fullName = function () {

}
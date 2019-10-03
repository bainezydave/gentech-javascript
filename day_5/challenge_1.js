/*
CHALLENGE 1: Construct a Bee
Using the provided code (see below), create a constructor appropriate for the various class functions.
Hunger should be lower if the bee has eaten lots of food. (0 = full, can't eat any more)
Same with thirst. (0 = full, can't drink any more)
*/

class Bee
{
    constructor(name, positionX, positionY)
    {
        this.name = name;
        this.positionX = positionX;
        this.positionY = positionY;
    }

    getCurrentPosition() 
    {
        return (`The bee named ${this.name} is at coordinates X: ${this.positionX} , Y: ${this.positionY}`);
    }

    refillHunger() 
    {
        this.hungerLevel = 0;
    }

    refillThirst() 
    {
        this.thirstLevel = 0;
    }

    renameBee(newName) 
    { 
        this.name = newName;
    }

    moveToPosition(newX, newY)
    {
        this.positionX = newX;
        this.positionY = newY;
    }
}





var newBee = new Bee("Greg", 4, 4);
console.log(newBee.getCurrentPosition());

newBee.moveToPosition(10, 20);
console.log(newBee.getCurrentPosition());

/*
CHALLENGE 1.2: Queen Bee
Create a new QueenBee class that uses JavaScript class inheritance.
This class will inherit from your completed Bee class, and add new functions to the QueenBee class that covers the following:
- creates a new bee (give random values for things like name and position)
- adds the new bee to an array of bees stored in the QueenBee class
- print a list of all bees and their locations
*/

class QueenBee extends Bee 
{
    constructor(name, positionX, positionY)
    {
        super(name, positionX, positionY);
        let bee = { name, positionX, positionY };
        bees.push(bee);
    }

    listBees()
    {
        console.table(bees);
    }
}

var bees = [];

var bee3 = new QueenBee("vhgjgku", 2, 33);
var bee4 = new QueenBee("swqwqw", 10, 100);
var bee5 = new QueenBee("jiohjio", 112, 82);
var bee6 = new QueenBee("swqwqw", 99, 12);

bee3.listBees();
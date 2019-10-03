/*
CHALLENGE 4.1: JS Pets

Build on the class provided below. You must add more functions that let you do the following:
- increase happiness
- decrease happiness
- increase hunger
- decrease hunger
- increase thirst
- decrease thirst
- name the pet

Your JS app must prompt the user with some options:
- Name their pet
- Play with the pet (increase happiness)
- Feed the pet (decrease hunger)
- Give the pet a drink (decrease thirst)
- Let the pet sing (increase happiness, only available if hunger & thirst are at 0)

Every time the user chooses one of those options, one of these things must happen:
- If they played with the pet, hunger & thirst goes up by 1 each
- If the pet's hunger or thirst are at 0, happiness goes up by 1
- If the pet was fed or had a drink, happiness goes down by 1
- If the pet sang, happiness goes up by 10

*/
class Pet
{
    constructor(name)
    {
        this.name = name,
        this.happiness = 50,
        this.hunger = 0,
        this.thirst = 0;
    }

    increaseHappiness()
    {
        this.happiness++;
    }

    decreaseHappiness()
    {
        this.happiness--;
    }

    increaseHunger()
    {
        this.happiness++;
    }

    decreaseHunger()
    {
        this.happiness--;
    }

    increaseThirst()
    {
        this.happiness++;
    }

    decreaseThirst()
    {
        this.happiness--;
    }

    namePet(newName)
    {
        this.name = newName;
    }
}

var options = ["Name Pet", "Play with Pet", "Feed Pet", "Give Pet a Drink", "Let Pet Sing"]



/*
CHALLENGE 4.2: Multi-pet household

Create a Cat class and a Dog class. These should inherit from Pet.
The Pet app should prompt the user to ask if they want a dog or a cat as their pet. 

The cat's happiness goes up faster when its hunger & thirst are between 0 and 5.
The dog has a special function to Walk. Walking increases hunger & thirst by 3, and increases happiness by 3.

*/
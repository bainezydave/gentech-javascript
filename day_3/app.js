// ======== Destructuring arrays & Rest operator (...) ========

// var gentechClass = ["Dave", "Jo", "Ewe Lin", "Aiden"];
// var [...others] = gentechClass;
// console.log(others);


// ======== Rest operator creates copy of array ========

// var gentechClass = ["Dave", "Jo", "Ewe Lin", "Aiden"];
// var [...gentechCopy] = gentechClass;
// gentechClass[0] = "Alex";
// console.log(gentechClass);
// console.log(gentechCopy);


// ======== Destructuring objects & Rest operator (...) ========

// var people = {
//     name: "Alex",
//     age: 115,
//     hobby: "Gaming"
// };

// let { name, ...others } = people;
// console.log(name, others);


// ======== Rest operator creates copy of object ========

// var people = {
//     name: "Alex",
//     age: 115,
//     hobby: "Gaming"
// };

// let { ...peopleCopy } = people;
// people.name = "Derrek";

// console.log(people);
// console.log(peopleCopy);


// ======== Rest operator creates copy of object ========


// var superHeroesBirthPlace = {
//     marvel: {
//         spiderMan: "Brooklyn",
//         ironMan: "America",
//         thor: "asgard"
//     },
//     dc: {
//         superMan: "Krypton",
//         batMan: "Gotham",
//         aquaMan: "Atlantas"
//     }
// }

// let {marvel} = superHeroesBirthPlace;
// console.log(marvel);
// let { spiderMan } = superHeroesBirthPlace.marvel;
// console.log(spiderMan);


// var petAnimals = ["cat", "dog", "fish"];
// var wildAnimals = ["tiger", "Lion", "Hippo"];
// let allAnimals = [...petAnimals, ...wildAnimals];
// console.log(allAnimals);
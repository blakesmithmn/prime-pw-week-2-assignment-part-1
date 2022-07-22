// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
let firstName = 'Blake';
// 2 - Create a second variable called `lastName` and assign it the value of your last name
let lastName = 'Smith';
// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)
let fullName = firstName + lastName;
// 4 - Console log the value of `fullName`
console.log('fullName');
// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
let luckyNumber = 7;
// 6 - Console log this sentence, adding in the variables you created above: 
// 'My name is (full name), and I think (lucky number) is a winner!'.
// Refer back to the videos if you need help with this one.
console.log("My name is", fullName, "and I think", luckyNumber, "is a winner!");
// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
let adventurous = true;
// 8 - Create a variable named `food`, and set its value to a string of your favorite food
let food = 'asian food, chicken, and sour gummy candy';
// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
let pets = 0;
// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
let friendsPets = 1;
// 11 - Add two pets to your `pets` variable
pets += 2;
console.log(pets) //double checking it worked
// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const allowedPets = 3;
// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!",
// if it's not true, console log "How about we stay home?"
if (adventurous) {
    console.log('Adventures are great!');
}
else {
    console.log('How about we stay home?');
} //end adventurous check

// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"
if (luckyNumber === 2 && adventurous) {
    console.log('Roll the Dice!');
}
else {
    console.log("Maybe we don't try our luck");
} // this one felt weird not having some sort of log pop up ... so I hope the modification is ok!
// 15 - Write a conditional that console logs "I can have more pets!" 
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.
if (allowedPets > pets) {
    console.log('I can have more pets!');
}
else if (allowedPets == pets) {
    console.log('I have enough pets');
}
else {
    console.log('Oh no, I have too many pets!');
} //end pet check & checked working with other values for 'pets'

// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios. 
// console.log `mostPets` after the conditional has run.

let mostPets;
if (pets > friendsPets) {
    pets = mostPets;
    console.log('I have the most pets');
} else if (friendsPets = pets) {
    mostPets = 'Neither';
    console.log('We both have the same number of pets');
} else {
    mostPets = friendsPets;
    console.log('Chris has the most pets');
}

console.log(mostPets);

//I have the most pets but ONLY because of the additions earlier in the assignment <3

// 17 - Write a *switch* statement that logs:
//      "First is the worst" if your lucky number is 1
//      "Second is the best" if your lucky number is 2
//      "Third is the one with the polka dot dress" if your lucky number is 3
//      Otherwise, log "Luck is what happens when preparation meets opportunity"
//      You'll need to research how to use switch statements!

// key word switch with different cases 

switch (luckyNumber) {
    case 1:
        console.log('First is the Worst');
        break;
    case 2:
        console.log('Second is the Best');
        break;
    case 3:
        console.log('Third is the one with the Polka dot dress');
        break;
    default:
        console.log('Luck is what happens when preparation meets opportunity');
}

// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!
// i did research and wrote something out ... autosave ate it and it didn't make a ton of sense to me anyway?
// lets try this again ... i think i was really over-complicating it last time but i think i did it right now? it actually prints something so that's good right? LOL

adventurous = true ? console.log("Adventures are great!") : console.log("How about we stay home?");

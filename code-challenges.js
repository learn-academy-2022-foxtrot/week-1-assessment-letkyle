// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create the code that determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create the code that determines if a given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process: I want to make a conditional statement
// in that statement I want it to console.log whatever the temp is below or above boiling point and my catch all is the same"

// const temp = 42

// if(temp > 212){
//     console.log(temp + " is above boiling point")
// } else if(temp < 212){
//     console.log(temp + " is below boiling point")
// } else(consol.log(temp + " is at boiling point"))

// Expected output: "42 is below boiling point"

// const temp = 350

// if(temp > 212){
//     console.log(temp + " is above boiling point")
// } else if(temp < 212){
//     console.log(temp + " is below boiling point")
// } else(console.log(temp + " is at boiling point"))

// // Expected output: "350 is above boiling point"


// const temp = 212

// if(temp > 212){
//     console.log(temp + " is above boiling point")
// } else if(temp < 212){
//     console.log(temp + " is below boiling point")
// } else(console.log(temp + " is at boiling point"))

// Expected output: "212 is at boiling point"

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process: I will just console.log both const and put a "+" to add them together but add .length to both in order to add both arrays into one and count the length.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

// console.log(padres1984WorldSeriesRuns.length + padres1998WorldSeriesRuns.length)

// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process: I will need to turn the string into an array by splitting it and then reversing the aray then joining it again

const currentCohort = "Foxtrot 2022"

// const arrayCurrentCohort = currentCohort.split("")

// console.log(arrayCurrentCohort.reverse().join(""))

// Expected output: "2202 tortxoF"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process: I have to add a method in order to get the index of the value which in this case is the last duplicate number

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42

//console.log(myNumbers.lastIndexOf(givenValue1))
// Expected output: 7

const givenValue2 = 10

//console.log(myNumbers.lastIndexOf(givenValue2))
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process: I will need to use the method .sort on the array then that shoots it out from least to greatest then how I will get greatest to least is that i will add the .reverse method.

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]

// sanDiegoSummerTemperatures.sort((a, b) => a - b)
// console.log(sanDiegoSummerTemperatures.reverse())

// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]

// sanDiegoWinterTemperatures.sort((a, b) => a - b)
// console.log(sanDiegoWinterTemperatures.reverse())

// Expected output: [68, 67, 66, 66, 62, 59, 59]

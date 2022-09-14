// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
//  console.log(cohort.length)

// a) Your answer: 9
// b) Verify and explain: I thought it was 9 because there are 9 indexes since index "L" would start at zero but instead when I ran the code it counted the length and 0 counts as 1 in .length


// --------------------2) What will this log?

const greeting = "Hello World!"
//console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: I was right :D, since we are returning the greeting with the index brackets with a 4 in it it should return o ==> H[0]e[1]l[2]l[3]o[4] [5]
                                       

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
//console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: Like the problem above except we assigned index = to "1" so basically when you log languages[index] it looks like languages[1]


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"] 
//console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY, SUNDAY
// b) Verify and explain: It did not log that, instead it came out with a type error stating that .touppercase is not a function, this is because the method of .touppercase does not apply to arrays but instead it applys to strings 

// example // const weekendDaysTest = "bob"
// console.log(weekendDaysTest.toUpperCase())
// output: BOB


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
//console.log(typeofdataTypes.length)

// a) Your answer: It will come as an error
// b) Verify and explain: .length is a string method that does not apply to arrays

// // example 
// const dataTypesTest = "number"
// console.log(dataTypesTest.length)

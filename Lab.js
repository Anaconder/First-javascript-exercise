// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

// Check if all numbers are divisible by 5. Cache the result in a variable.
const isdivisibleby5 =(n1%5)+(n2%5)+(n3%5)+(n4%5) == 0;
console.log(`Are they all divisible by 5 ? ${isdivisibleby5}.`);


// Check if the first number is larger than the last. Cache the result in a variable.
const islarger = n1>n4 ;
console.log(`n1>n4 ? ${islarger}.`);


// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
const sub =n2-n1
console.log(`what is n2-n1 ? ${sub}.`);

// Multiply the result by the third number.
const product=sub*n3;
console.log(`what is the product of(n2-n1) and n3 ? ${product}.`);

// Find the remainder of dividing the result by the fourth number.
const modulo= product % n4;
console.log(`What is the remainder when divided by n4 ? ${modulo}.`);
// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.



const d = 1500;
const s1 = 55;
const s2 = 60;
const s3 = 75;
const b= 175;
// How many gallons of fuel will you need for the entire trip?
const fuel1= d/30;
console.log(`The gallons of feul at 55mph is ? ${fuel1} gallons.`);
const fuel2= d/28;
console.log(`The gallons of feul at 60mph is ? ${fuel2} gallons.`);
const fuel3= d/23;
console.log(`The gallons of feul at 75mph is ? ${fuel3} gallons.`);


// Will your budget be enough to cover the fuel expense?
const cost1=fuel1 *3;
console.log(`The cost of feul at 55mph is ? ${cost1} dollars.`);
const cost2=fuel2 *3;
console.log(`The cost of feul at 60mph is ? ${cost2} dollars.`);
const cost3=fuel3 *3;
console.log(`The cost of feul at 75mph is ? ${cost3} dollars.`);

const budget1=cost1<=b;
console.log(`Will your budget be enough to cover the fuel expense at 55mph? ${budget1}`);

const budget2=cost2<=b;
console.log(`Will your budget be enough to cover the fuel expense at 60mph? ${budget2}`);

const budget3=cost3<=b;
console.log(`Will your budget be enough to cover the fuel expense at 75mph? ${budget3}`);


// How long will the trip take, in hours?
const time1= d/s1;
console.log(`How long will the trip take, in hours at 55mph? ${time1} hours`);

const time2= d/s2;
console.log(`How long will the trip take, in hours at 60mph? ${time2} hours`);

const time3= d/s3;
console.log(`How long will the trip take, in hours at 75mph? ${time1} hours`);


// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip
console.log('It will make the most sense to travel at 60mph');
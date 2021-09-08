  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];

for (let num of nums) {
  results.push(num*2);
}

console.log(results);

// Using map()
const multiplyByTwo2 = function(num) {
  return num * 2;
}
const mutiplyByTwo = num => num * 2;
// in reality, don't need to define the function outside the map method
// can pass the function to the map method directly

const mapResults = nums.map(mutiplyByTwo);

console.log(mapResults);

// Simplified w/ map()
// moving the function inside the map parentheses
const simplified = nums.map(function(num) {return num * 2;});
console.log(simplified);

// Simplfied w/ map() + arrow function
// this is the typical way of writing the map method - with arrow function
const simplifiedArrow = nums.map(num => num * 2);
console.log(simplifiedArrow);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

// iterate through the array of students
// return array containing their name and their id

const details = students.map(student => [student.name, student.id]);
console.log(details); //[ [ 'Mark', 1 ], [ 'Ariel', 2 ], [ 'Jason', 3 ] ] array of arrays

// return array of objects containing name and id
const detailsObj = students.map(student => {
  const container = {};
  container.name = student.name;
  container.id = student.id;
  return container;
});
console.log(detailsObj)
// array

const myArray = [0, 2, 4, 5, 6, 7, 1, 8, 11];
const newArray = [12, 3, 45, 67, 8, 90, 43, 33];
// console.log(myArray);

// console.log(myArray.push(12));
// let q = myArray.concat(newArray)
// console.log(q);

const num_ber = [...myArray, ...newArray]
console.log(num_ber);

console.log(Array.isArray("Mahesh"))
console.log(Array.from("Mahesh"))
console.log(Array.from({ name: "Mahesh" }))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


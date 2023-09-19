// january - 1 - 1970   Date

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());


// Tue Sep 19 2023 21:13:10 GMT+0530 (India Standard Time)
// Tue Sep 19 2023
// 9/19/2023
// 21:13:10 GMT+0530 (India Standard Time)
// 2023-09-19T15:43:10.675Z
// 2023-09-19T15:43:10.675Z

let myCreatedDate = new Date(2023, 0, 21)
console.log(myCreatedDate.toDateString);


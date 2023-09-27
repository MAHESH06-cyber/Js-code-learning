// singleton

// object literals
// object.create

const mySym = Symbol("key1")

const jsUser = {
    name: "Mahesh",
    age: 22,
    [mySym]: "mykey1",
    location: "Dhule",
    email: "maheshchaudhari2@hotmail.com",
    isLoggedIn: false
}

// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);

// console.log(Object.keys(jsUser));
// console.log(Object.values(jsUser));

const course = {
    courseName: "js is the best",
    price: "1299",
    instructor :"Mahesh"
}

const { courseName } = course
console.log(courseName);







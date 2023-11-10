//  for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    // console.log(num);
}

const welcome = " good afternoon";
for (const greet of welcome) {
    // console.log(`hi everyone ,${greet}`);
}

// Maps

const map = new Map();
map.set('In', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

for (const [key] of map) {
    console.log(key);
}

let name = "Mahesh"
let colour = "orange"

const red = () => {
    let name = "merry"
    let colour = "blue"
    console.log(`${name} loves ${colour} colour`)
}

// red()

let star = () => (console.log("print my name"));

//  iife (Immediately Invikeod Function Expressions)

(function make() {
    console.log("connected!");
})();

((say) => {
    console.log(`unNamed iife ${say}`);
})("cool");

((think) => {
    console.log(`say that before ${think}`)
})("you think");

(function dbConnect() {
    
})();
// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

let counterObj = new Date();
let count = 0;
const counter = setInterval(() => {
  count++;
  console.log(count);
  if (count === 100) {
    clearInterval(counter);
  }
}, 1000);

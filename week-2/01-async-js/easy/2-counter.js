// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout);
let counter = 15;
let count = 1;
function callback() {
  console.log(count);
  count++;
  if (count <= counter) {
    setTimeout(callback, 1000);
  }
}

callback();

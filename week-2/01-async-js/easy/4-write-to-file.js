// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");
const str = "amended data here is!! (changes (～￣▽￣)~)";
fs.writeFile("read.txt", str, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("success!");
  }
  // file written successfully
});

fs.readFile("read.txt", "utf-8", function (err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

/*

* expensive operation.
todo: observing async nature of js

*/
let m = 0;
for (let i = 0; i < 10; i++) {
  m++;
  console.log(m);
}

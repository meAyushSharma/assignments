// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

function myCleanFileFunction() {
  return new Promise(function (resolve, reject) {
    fs.readFile("clean.txt", "utf-8", function (err, data) {
      if (err) {
        console.error(err);
      } else {
        resolve(data);
      }
    });
  });
}

function fn(data) {
  data = data.trim();
  console.log(data);
  fs.writeFile("clean.txt", data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("successfully written data");
    }
  });
}

myCleanFileFunction().then(fn);

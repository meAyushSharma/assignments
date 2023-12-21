/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

//returns the correct count for strings with vowels
//returns 0 for strings without vowels
//returns 0 for an empty string
//handles case-insensitivity correctly
//returns the correct count for strings with spaces
//returns the correct count for strings with punctuation marks

function countVowels(str) {
  str = str.toLowerCase();
  if (str.length == 0) {
    return 0;
  }
  str = str.replace(/\s/g, "");
  str = str.replace(/[.,\?/#!$%\^&\*;:{}=\-_`~()]/g, "");
  str = str.replace(/['a','e','i','o','u']/g, "$");
  console.log(str);
  str = str.split("$");
  console.log(str);
  if (str.length == 0) {
    return 0;
  }
  return str.length - 1;
}

const ans = countVowels("oding is fu");
console.log(ans);

module.exports = countVowels;

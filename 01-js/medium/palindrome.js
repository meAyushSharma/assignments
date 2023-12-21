/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// function isPalindrome(str) {
//   const ln = str.length;
//   let a = 0;
//   for (i = 0; i < ln / 2; i++) {
//     if (str[i] == str[ln - i]) {
//       a++;
//     } else {
//       return false;
//     }
//   }
//   if (a == ln / 2) {
//     return true;
//   }
// }

function isPalindrome(str) {
  //case insensitivity
  str = str.toLowerCase();
  // str = str.trim();
  //removing punchuations
  str = str.replace(/[.,\?/#!$%\^&\*;:{}=\-_`~()]/g, "");
  //removing all white spaces
  str = str.replace(/\s/g, "");
  console.log(str);

  const l = str.length;
  let c = 0;
  if (l == 0 || l == 1) {
    return true;
  }
  if (l % 2 == 0) {
    let str1 = str.slice(0, l / 2);
    let str2 = str.slice(l / 2, l);
    console.log(str1, str2);
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] == str2[str2.length - 1 - i]) {
        c++;
      }
      if (c == str1.length) {
        return true;
      }
    }
    return false;
  } else {
    let str1 = str.slice(0, l / 2);
    let str2 = str.slice(l / 2 + 1, l);
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] == str2[str2.length - 1 - i]) {
        c++;
      }
      if (c == str1.length) {
        return true;
      }
    }
    return false;
  }
}

let ans = isPalindrome("      A man a plan a canal Panama ");
console.log(ans);
module.exports = isPalindrome;

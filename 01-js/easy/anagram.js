/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1=str1.toLowerCase();
  str2=str2.toLowerCase();
  if(str1.length == str2.length){
    let myArr=[];
    for(i=0; i<str1.length; i++){
      myArr.push(str1[i]);
    }
    // console.log(myArr);
    for(i=0; i< str2.length; i++){
      for(j=0; j< myArr.length; j++){
        if(myArr[j]==str2[i]){
          myArr.splice(j,1);
          str2.replace(str2[i], '');
        }
      }
    }
    if(myArr.length==0){
      return true;
    }
    return false;
    
  }
  else {
    return false;
  }

}

const ans = isAnagram("aayushh sharma ji", "AAYUshh armashij ");
console.log(ans);

module.exports = isAnagram;

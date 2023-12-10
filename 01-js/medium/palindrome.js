/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  function alphaOnly(a){
    let b=''
    for(let char of a){
      if (char >= 'a' && char <= 'z'){
        b+= char
      }
    }
    return b
  }

  str = str.toLowerCase()
  str = alphaOnly(str)
  let l = str.length
  for(let i = 0; i<l; i++){
    if (str[i] != str[l-1-i]){
      return false
    }
  }
  return true
}

module.exports = isPalindrome;

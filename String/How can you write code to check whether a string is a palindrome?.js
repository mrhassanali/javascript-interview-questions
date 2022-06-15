/* Palindrome : string with same as if we reverse the string e.g Level */
function checkPalindrome(str) {
  return str.split("").reverse().join("") === str;
}
console.log(checkPalindrome("level")); // return true if match

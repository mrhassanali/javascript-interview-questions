/**
 * An anagram is a string that is formed by rearranging the characters of another string, but containing the same set of characters.
 * First, check if both strings have the same length. If not, they cannot be anagrams.
 * Convert both strings into arrays and sort them.
 * Compare the sorted arrays to determine if they are anagrams.
 */

function checkAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let str1ToArr = [...str1].sort();
  let str2ToArr = [...str2].sort();

  for (let i = 0; i < str1.length; i++) {
    if (str1ToArr[i] !== str2ToArr[i]) {
      return false;
    }
  }

  return true;
}

console.log(checkAnagrams("abcd", "dcba"));

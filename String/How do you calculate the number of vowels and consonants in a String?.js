/**
 * @declare vowels count for count the number of vowel in string.
 * @delcare consonants count for count in a word that do not have a vowel between them.
 * @declare vowel in array.
 */
function vowelConsonants(str) {
  let vowel = 0;
  let consonants = 0;
  let vowelCharacter = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < str.length; i++) {
    if (vowelCharacter.includes(str[i])) {
      vowel++;
    } else {
      consonants++;
    }
  }
  return { vowel, consonants };
}
console.log(vowelConsonants("Hassan Ali"));

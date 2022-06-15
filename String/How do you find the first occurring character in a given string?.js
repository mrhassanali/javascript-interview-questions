function findFirstOccurringCharacter(str) {
    let charMap = {};
    
    for (let char of str) {
        if (charMap[char]) {
            return char;
        } else {
            charMap[char] = true;
        }
    }
    
    return null; // If no repeating character found
}

const inputString = "hello";
const firstOccurringChar = findFirstOccurringCharacter(inputString);
console.log("First occurring character:", firstOccurringChar);
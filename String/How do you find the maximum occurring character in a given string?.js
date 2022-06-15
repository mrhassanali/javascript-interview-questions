function characterOccurance(str) {
  if (typeof str.trim() != "string") return "Invalid String";
  let map = new Map();

  let repeatedCharacter;
  let count = 0;
  for (var i = 0; i < str.length; i++) {
    let key = str[i];
    map.set(key, (map.get(key) || 0) + 1);

    // Update Answer
    if (count < map.get(key)) {
      repeatedCharacter = key;
      count = map.get(key);
    }
  }
  console.log(repeatedCharacter + " = " + count);
}

characterOccurance("Hassan Ali");

let str = "Split this string";
// Split the String without using split method in js (Interview question)
 // split array method 1
let method1 = [...str];   
// convert character
for (let i = 0; i < method1.length; i++) {
  if (method1[i] >= "A" && method1 <= "Z") {
    method1[i] = method1[i].toLowerCase();
  } else if (method1[i] >= "a" && method1 <= "z") {
    method1[i] = method1[i].toUpperCase();
  }
}

let method2 = str.split(""); // split array method 2
console.log(method1);
console.log(method2);

let str = "Hello World!";
let mystring = "";
for (var i = str.length - 1; i >= 0; i--) {
  mystring += str[i];
}
console.log(mystring);

console.log([...str].reverse().join(""));
console.log(str.spit("").reverse().join(""));

// Can you find duplicate numbers in an array?
let arr = [1, 1, 5, 9, 9, 10, 10];

//Remove the dublicate number
let set = new Set([...arr]);
console.log(set);

// find dublicate using object + array
let dublicate = [];
let uniqueNumber = [];
arr.forEach((item) => {
  if (!uniqueNumber.includes(item)) {
    uniqueNumber.push(item);
  } else {
    dublicate.push(item);
  }
});
console.log("Unique Array = " + uniqueNumber);
console.log("Dublicate Array = " + dublicate);

// find the dublicate number  using filter() + indexOf()
// indexOf() method return first element found
const filterIndex = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log("Dublicate = " + filterIndex);

let arr = [100, 200, 300, 10, 40];
// sort the array
let sort = arr.sort((a, b) => a - b);
//Mehod 1
let reverseArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reverseArr.push(arr[i]);
}
console.log(reverseArr);
// Method 02
console.log(sort.reverse());

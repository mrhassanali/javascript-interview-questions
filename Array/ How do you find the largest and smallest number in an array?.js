// How do you find the largest and smallest number in an array?
let arr = [1, 2, 6, 10, 50];
// find Large Number in Array
let large = arr[0];
let small = arr[0];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] > large) {
    large = arr[i];
  } else {
    small = arr[i];
  }
}
console.log("Large = " + large);
console.log("Small = " + small);

let arr = [23,10,5,1,9];

let large = arr[0];

for(var i = 0; i<arr.length; i++){
    if(large<arr[i]){
        large = arr[i];
    }
}

console.log("Large Value = " + large);

let small = arr[0];
for(var i = 0; i<arr.length; i++){
  if(small>arr[i]){
    small = arr[i];
  }
}
console.log("Small Value = "+small);
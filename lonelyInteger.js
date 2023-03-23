// Given an array of integers, where all elements but one occur twice, find the unique element.
// The indexOf will return first occurrence of the value and the lastIndexOf will return the last occurence of the value.

// Example:
// var anyString = "Brave new world";
// var a = anyString.indexOf("w")); // result = 8
// var b = anyString.lastIndexOf("w")); // result 10

let a = [1, 2, 3, 4, 3, 2, 1];

function lonelyinteger(a) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    if (a.lastIndexOf(a[i]) === a.indexOf(a[i])) {
      answer = i;
    }
  }
  console.log(a[answer]);
}

lonelyinteger(a);
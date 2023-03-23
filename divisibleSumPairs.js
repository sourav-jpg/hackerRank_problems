// Given an array of integers and a positive integer k , determine the number of (i,j)  pairs where i<j  and arr[i] + arr[j] is divisible by k .

const ar = [1, 3, 2, 6, 1, 2];

let n = ar.length;
let k = 3;

function divisibleSumPairs(n, k, ar) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      let res = ar[i] + ar[j];
      if (res % k === 0) {
        count++;
      }
    }
  }
  console.log(count);
}
divisibleSumPairs(n, k, ar);

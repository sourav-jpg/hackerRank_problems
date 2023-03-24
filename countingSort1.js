// Another sorting method, the counting sort, does not require comparison. Instead, you create an integer array whose index range covers the entire range of values in your array to sort. Each time a value occurs in the original array, you increment the counter at that index. At the end, run through your counting array, printing the value of each non-zero valued index that number of times.

const arr = [1, 1, 3, 2, 1];
function countingSort(arr) {
  let frequencyArray = new Array(100).fill(0);
  arr.forEach((item) => {
    frequencyArray[item] += 1;
  });
  console.log(frequencyArray);
}

countingSort(arr);



// const arr = [1, 1, 1, 1];
// function countingSort(arr) {
//   let frequencyArray = new Array(10).fill(0);
//   arr.forEach((item) => {
//     frequencyArray[item] += 1;
//   });
//   console.log(frequencyArray);
// }

// countingSort(arr);
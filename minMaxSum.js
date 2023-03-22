// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example:
// arr =[1,3,5,7,9]
// The minimum sum is  1+3+5+7 =16 and the maximum sum is 3+5+7+9 =24. The function prints
// 16 24


//IMP sort method 
const numbers = [74,18,10,5,84,24,105];
numbers.sort();
console.log(numbers);


// const arr = [1,2,3,4,5];

// function miniMaxSum(arr) {
//     arr.sort((a, b) => a - b)
//     let minSum = 0;
//     let maxSum = 0;
//     for (let i = 0; i < arr.length-1; i++) {
//         minSum += arr[i]
//     }
//     for (let i = arr.length - 1; i > 0; i--) {
//         maxSum += arr[i]
//     }
//     console.log(`${minSum} ${maxSum}`)
// }

// miniMaxSum(arr)
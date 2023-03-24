// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix arr is shown below:
// 1 2 3
// 4 5 6
// 9 8 9

// The left-to-right diagonal =1+5+9=15 . The right to left diagonal =3+5+9=17 . Their absolute difference is|15-17| = 2.

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

function diagonalDifference(arr) {
  let diagonal1 = 0,
    diagonal2 = 0;
  for (let i = 0; i < arr.length; i++) {
    diagonal1 += arr[i][i];
    diagonal2 += arr[i][arr.length - 1 - i];
  }
  let result = Math.abs(diagonal1 - diagonal2);
  console.log(result);
}

diagonalDifference(arr);

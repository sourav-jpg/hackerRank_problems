// Example
// arr =[1,1,0,-1,-1]
// There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

// 0.400000
// 0.400000
// 0.200000
// 0.200000

// const arr =[1,1,0,-1,-1];
// let positive =[];
// let negative =[];
// let zero = [];
// let answer =[];

// function positiveVal(positive){
//     if(positive){
//         let result = positive.length/arr.length
//          let p =  result.toFixed(6)
//         // const p = Math.round(positive.length / arr.length * 1000000.0 ) / 1000000
//         console.log("div of p",p);
//         answer.push(p)
//     }

// }

// function negativeVal(negative){
//     if(negative){
//         let result = negative.length/arr.length
//          let n =  result.toFixed(6)
//         console.log("div of n",n);
//         answer.push(n)

//     }
// }

// function zeroVal(zero){
//     if(zero){
//         let result = zero.length/arr.length
//          let z =  result.toFixed(6)
//         console.log("div of z",z);
//         answer.push(z)
//     }
// }

// function plusMinus(arr){
//     for(let i =0;i<arr.length;i++){
//         if(arr[i]>0){
//            positive.push(arr[i])
//         }else if(arr[i]<0){
//             negative.push(arr[i])
//         }else{
//             zero.push(arr[i])
//         }
//     }

//     positiveVal(positive);
//     negativeVal(negative);
//     zeroVal(zero);

// }

// plusMinus(arr);
// console.log("answer",answer);

// console.log(positive);
// console.log(negative);
// console.log(zero);

const arr = [-4, 3, -9, 0, 4, 1];
// const b = [1 ,2 ,3 ,-1 ,-2 ,-3, 0 ,0];

let n = arr.length;
let positive = 0;
let negative = 0;
let zero = 0;

function plusMinus(arr) {
  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }
  console.log(`${(positive / n).toFixed(6)}`);
  console.log(`${(negative / n).toFixed(6)}`);
  console.log(`${(zero / n).toFixed(6)}`);
}

plusMinus(arr);


const a = [-4, 3, -9, 0, 4, 1]



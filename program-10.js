// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

let arr1 = [1, 0, 2, 3, 4];
let arr2 = [3, 5, 6, 7, 8, 13];

function sumIndexValue(a1, a2) {
  let result = [];
  let maxLength = a1.length > a2.length ? a1.length : a2.length;

  for (let i = 0; i < maxLength; i++) {
    let val1 = i < a1.length ? a1[i] : 0;
    let val2 = i < a2.length ? a2[i] : 0;
    result.push(val1 + val2);
  }

  return result;
}

console.log(sumIndexValue(arr1, arr2));

// Sample input:
// arr1 = [1, 0, 2, 3, 4];
// arr2 = [3, 5, 6, 7, 8, 13];

// Expected Output: [4, 5, 8, 10, 12, 13]

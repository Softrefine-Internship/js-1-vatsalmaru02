// Write a JavaScript program to compute the union of two arrays.

let arr1 = [1, 2, 3];
let arr2 = [100, 2, 1, 10];

function unionArrays(a1, a2) {
  let union = [];

  for (let i = 0; i < a1.length; i++) {
    if (union.indexOf(a1[i]) === -1) {
      union.push(a1[i]);
    }
  }

  for (let j = 0; j < a2.length; j++) {
    if (union.indexOf(a2[j]) === -1) {
      union.push(a2[j]);
    }
  }

  for (let i = 0; i < union.length - 1; i++) {
    for (let j = 0; j < union.length - 1; j++) {
      if (union[j] > union[j + 1]) {
        let temp = union[j];
        union[j] = union[j + 1];
        union[j + 1] = temp;
      }
    }
  }

  return union;
}

console.log(unionArrays(arr1, arr2));

// Sample input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10];

// Expected Output: c = [1, 2, 3, 10, 100]

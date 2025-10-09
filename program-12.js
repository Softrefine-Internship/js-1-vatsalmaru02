// Write a JavaScript function to find the difference between two arrays.

let arr1 = [1, 2, 3];
let arr2 = [100, 2, 1, 10];

function differenceArrays(a1, a2) {
  let diff = [];

  for (let i = 0; i < a1.length; i++) {
    if (a2.indexOf(a1[i]) === -1) {
      diff.push(a1[i]);
    }
  }

  for (let i = 0; i < a2.length; i++) {
    if (a1.indexOf(a2[i]) === -1) {
      diff.push(a2[i]);
    }
  }

  for (let i = 0; i < diff.length - 1; i++) {
    for (let j = 0; j < diff.length - 1-i; j++) {
      if (diff[j] > diff[j + 1]) {
        let temp = diff[j];
        diff[j] = diff[j + 1];
        diff[j + 1] = temp;
      }
    }
  }

  return diff;
}

console.log(differenceArrays(arr1, arr2));

// Sample Input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10]

// Expected Output: c = [3, 10, 100]

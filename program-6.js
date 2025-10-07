// Merge two arrays and remove duplicate items from the merged array in JavaScript.

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [3, 4, 5, 7];

function mergedAndRemove(arr1, arr2) {
  let merged = [];

  for (let i = 0; i < arr1.length; i++) {
    merged.push(arr1[i]);
  }

  for (j = 0; j < arr2.length; j++) {
    if (merged.indexOf(arr2[j]) === -1) {
      merged.push(arr2[j]);
    }
  }
  return merged;
}

console.log(mergedAndRemove(arr1, arr2));
// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]

// Write a JavaScript function which takes two arrays as an argument and returns merged array in ascending order.

let arr1 = [3, 5, 1];
let arr2 = [4, 2];

function mergedAndSort(arr1, arr2) {
  let merged = [];

  for (let i = 0; i < arr1.length; i++) {
    merged.push(arr1[i]);
  }

  for (let j = 0; j < arr2.length; j++) {
    merged.push(arr2[j]);
  }

  //   console.log(merged);

  for (let i = 0; i < merged.length; i++) {
    for (let j = 0; j < merged.length; j++) {
      if (merged[j] > merged[j + 1]) {
        let temp = merged[j];
        merged[j] = merged[j + 1];
        merged[j + 1] = temp;
      }
    }
  }
  return merged;
}

console.log(mergedAndSort(arr1, arr2));
// Sample Input:
// arr1 = [3, 5, 1]
// arr2 = [4, 2]

// Expected output: [1, 2, 3, 4, 5]

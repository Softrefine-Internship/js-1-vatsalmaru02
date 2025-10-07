// Write javascript function which takes nested array as an argument and returns flatten array as output.

const sampleInput = [1, 2, [3, 4], [5, [6, 7]]];

function flattenArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];

    if (typeof element === "object") {
      let flatPart = flattenArray(element);

      for (let j = 0; j < flatPart.length; j++) {
        result[result.length] = flatPart[j];
      }
    } else {
      result[result.length] = element;
    }
  }
  return result;
}

const output = flattenArray(sampleInput);
console.log(output);
// Sample Input: [1, 2, [3, 4], [5, [6, 7]]];
// Expected Output: [1, 2, 3, 4, 5, 6, 7];

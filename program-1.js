// Write a JavaScript program to clone an array.

const originalArray = ["hello", "hi", 3, 4, 5];
const cloned = cloneArray(originalArray);

function cloneArray(originalArray) {
  const cloneArray = [];

  for (let i = 0; i < originalArray.length; i++) {
    cloneArray[i] = originalArray[i];
  }
  return cloneArray;
}

console.log("Original Array: ", originalArray);
console.log("Cloned Array: ", cloned);

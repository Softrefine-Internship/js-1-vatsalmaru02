// Write a JavaScript program to find the most frequent item in an array.

let array = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

function mostFrequent(arr) {
  let maxCount = 0;
  let mostIteam = 0;

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count > maxCount) {
      maxCount = count;
      mostIteam = arr[i];
    }
  }

  return mostIteam + ", " + maxCount + " times";
}

console.log(mostFrequent(array));
// Sample input : [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Expected Output : console.log(a, "5 times")

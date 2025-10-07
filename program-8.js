// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.

let number = "025468";

function insertDashes(num) {
  let result = "";

  for (let i = 0; i < num.length; i++) {
    result += num[i];

    if (
      i < num.length - 1 &&
      Number(num[i]) % 2 === 0 &&
      Number(num[i + 1]) % 2 === 0
    ) {
      result += "-";
    }
  }
  return result;
}

console.log(insertDashes(number));

// Sample input: 025468
// Expected output: 0-254-6-8.

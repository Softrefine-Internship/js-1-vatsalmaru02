// Write javascript program to remove duplicate objects from an array.

let array = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" },
];

function removeDulpicate(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let obj = arr[i];
    let isDuplicate = false;

    for (let j = 0; j < result.length; j++) {
      if (
        result[j].title === obj.title &&
        result[j].author === obj.author
      ) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      result.push(obj);
    }
  }
  return result;
}

console.log(removeDulpicate(array));

// Sample Input:
// array = [
//  { title: "C++", author: "Bjarne" },
//  { title: "Java", author: "James" },
//  { title: "Python", author: "Guido" },
//  { title: "Java", author: "James" },
// ];

// Expected Output:
// [
//  { title: 'C++', author: 'Bjarne' },
//  { title: 'Java', author: 'James' },
//  { title: 'Python', author: 'Guido' }
// ]

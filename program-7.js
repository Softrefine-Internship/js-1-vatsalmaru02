// Write javascript program to remove duplicate objects from an array.

let array = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" },
];

function removeDulpicate(arr) {
  let original = [];

  for (let i = 0; i < arr.length; i++) {
    let obj = arr[i];
    let isDuplicate = false;

    for (let j = 0; j < original.length; j++) {
      if (
        original[j].title === obj.title &&
        original[j].author === obj.author
      ) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      original.push(obj);
    }
  }
  return original;
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

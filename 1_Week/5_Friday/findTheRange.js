// Starting array
let array = [28, 43, -12, 30, 4, 0, -36];

// Write your solution below:
let smallestNum = array[0];
let largestNum = array[0];

for (let i = 0; i < array.length; i++) {
  if (smallestNum > array[i]) {
    smallestNum = array[i];
  } else if (largestNum < array[i]) {
    largestNum = array[i];
  }
}

console.log(smallestNum, largestNum);

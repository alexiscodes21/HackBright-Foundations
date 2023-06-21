// console.log("Hello Everyone");

// const ssn = '001-10-0001';

// console.log(`This is my ssn: ${ssn}`);

// console.log("This is my ssn: " + ssn);

// let firstName = "Alexis"
// let age = "28";

// const isCool = undefined;

// if(isCool === true) {
//     console.log(`Wow ${firstName}, you're so cool!`)
// } else if (isCool === false) {
//     console.log ("I still think you're cool!");
// } else {
//     console.log("Idk what that is?");
// }

let x = 10;
let y = 4;
let z = 6 + 9;
let sum = x + y + z;
console.log(sum);

let player1 = 91;
let player2 = 91;

if (player1 >= player2) {
  console.log("Player 1 wins!");
}

if (player1 <= player2) {
  console.log("Player 2 wins!");
}

if (player1 !== player2) {
  console.log("It's a tie.");
}

if (10 == "10") {
  console.log("This is true");
}

if (10 === "10") {
  console.log("This is false");
}

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("What is your name: ", function (name) {
  console.log("Your name is: " + name);
  reader.question("What is your name: ", function (age) {
    console.log("Your name is: " + age);
    reader.question("What is your name: ", function (favorite_color) {
      console.log("Your name is: " + favorite_color);
    });
  });
});

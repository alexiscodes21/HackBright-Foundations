/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

let backpack = [];
console.log(backpack);

backpack.push('sword');
backpack.push('shield');
backpack.push('food');

console.log(backpack);

// remove shield
backpack.splice(1,1);
console.log(backpack);

let furCoat = 'Fur Coat';

backpack.push(furCoat);
console.log(backpack);

// remove furcoat
backpack.pop()
console.log(backpack);

// let itemCount = backpack.length;
// console.log(`Number of items: ${itemCount}`);

backpack.push('flint', 'blanket', 'knife', 'toothbrush');
let itemCount = backpack.length;
console.log(`Number of items: ${itemCount}`);

let samBag = backpack.slice(1);
console.log(samBag);

let backpack2 = backpack.splice(backpack.length/2);

console.log(`Bag 1: ${backpack}`);
console.log(`Bag 1: ${backpack2}`);

for (let i = 0; i < backpack.length; i++) {
    console.log("***", backpack[i]);
}

for (let i = 0; i < backpack2.length - 1; i++) {
    console.log("---", backpack2[i]);
}

if (backpack2.length >= 5) {
    for (let i = 0; i < 5; i++) {
        console.log("---", backpack2[i]);
    }
} else {
    for (let i = 0; i < backpack2.length; i++) {
        console.log("---", backpack2[i]);
    }
}

console.log("------")
for (let i = backpack2.length; i >=0; i--) {
    console.log(backpack2[i]);
}
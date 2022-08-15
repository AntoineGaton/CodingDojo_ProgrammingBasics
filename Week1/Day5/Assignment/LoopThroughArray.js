// 1. Write a for loop that will traverse through an array of numbers, and print each number.

// 2. Write a for loop that will traverse through an array of numbers, and print the sum of the number and the index of the number in the array.

// 3. Write a for loop that will traverse through an array of numbers, and print ONLY the numbers greater than 5.

// NINJA BONUS: Modify your solution for #3 so that any numbers in the array that are NOT greater than 5 are instead replaced with a string of "No dice." This string should NOT be printed.

// #1
var arr1 = [8, 6, 7, 5, 3, 0, 9];
// #2
var arr2 = [4, 7, 13, 13, 19, 37, -2];
// #3
var arr3 = [6, 2, 12, 14, -24, 5, 0];

function displayArray(array) {
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
}

function sumArray(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        console.log(`Value ${array[index]} is in index ${index}.`)
        sum += array[index];
    }
    console.log(`The sum of the array is ${sum}.`);
}

function greaterThanFive(array) {
    for (let index = 0; index < array.length; index++) {
        if(array[index] > 5) {
            console.log(`Value ${array[index]} located in index ${index} is greater than greater than five.`);
        }
        else{
            array[index] = "No Dice!";
        }
    }
}

displayArray(arr1);
sumArray(arr2);
greaterThanFive(arr3);
console.log(arr3);
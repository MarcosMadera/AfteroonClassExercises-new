//Exercise 1: Create a Todo List

let toDoList = ["Get Up", "Study Coding", "Sleep", "Repeat"];

// Add a new task
toDoList.push("Walk the dog");

// Remove the first task
toDoList.shift();

// Log the updated list
console.log(toDoList);

//exercise 2: Count Even Numbers

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Count the number of even numbers
let evenCount = numbers.filter(num => num % 2 === 0).length;

// Log the result
console.log(`There are ${evenCount} even numbers in the array.`);



//Exercise 3: Reverse an Array

// Create an array
let arr = [1, 2, 3, 4, 5];

// Reverse the array using a loop
let reversedArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
}

// Log the reversed array
console.log(reversedArr);





//Exercise 4: Find the Largest Number

// Create an array of numbers
let numbers2 = [10, 25, 3, 76, 42, 99, 8];

// Assume the first number is the largest
let largest = numbers2[0];

// Loop through the array to find the largest number
for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > largest) {
        largest = numbers2[i];
    }
}

// Log the result
console.log("The largest number is:", largest);


//Exercise 5: Dynamic Greeting

function greetUsers(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(`Hello, ${names[i]}! Welcome!`);
    }
}

// Example usage
greetUsers(["Alice", "Bob", "Charlie"]);


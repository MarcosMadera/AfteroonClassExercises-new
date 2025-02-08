//Exercise 1

// const car = {
//     make: "Jeep",
//     model: "Grand Cherokee",
//     year: 2003,
//     getInfo: function () {
//       console.log(`Car Info: ${this.year} ${this.make} ${this.model}`);
//     },
//   };
  
  
//   car.getInfo();
  
//   //Exercise 2

//   const student = {
//     name: "James",
//     age: 17,
//     grades: [85, 90, 78, 92, 88],
//     calculateAverageGrade: function () {
//       const total = this.grades.reduce((sum, grade) => sum + grade, 0);
//       return total / this.grades.length;
//     },
//   };
  
//   // Example usage:
//   console.log(`Average Grade: ${student.calculateAverageGrade()}`);

  //Exercise 3

// const button = document.getElementById("changeColorButton");
// const element = document.getElementById("myElement");


// button.addEventListener("click", function () {
//   element.style.backgroundColor = "lightblue";
// });

//Exercise 4


// const button = document.getElementById('changeTextButton');
// const paragraph = document.getElementById('text');


// button.addEventListener('click', () => {
 
//   paragraph.textContent = 'This is the new text!';
// });


//Exercise 5

const itemList = document.getElementById('itemList');
const newItemInput = document.getElementById('newItemInput');
const addItemButton = document.getElementById('addItemButton');

// Add a click event listener to the button
addItemButton.addEventListener('click', () => {
  // Get the value from the input field
  const newItemText = newItemInput.value.trim();

  // Check if the input is not empty
  if (newItemText !== '') {
    // Create a new list item element
    const newItem = document.createElement('li');
    newItem.textContent = newItemText;

    // Add the new item to the list
    itemList.appendChild(newItem);

    // Clear the input field
    newItemInput.value = '';
  } else {
    alert('Please enter a valid item.');
  }
});
// movingthisfile
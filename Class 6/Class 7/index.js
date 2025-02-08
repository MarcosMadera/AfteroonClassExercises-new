// Exercise 1
    // //Show the alert when the page is loaded
    // window.onload = function() {
    //   alert("Welcome to My Website!");
    // };

    //Exercise 2

    
    // const paragraph = document.getElementById("text");
    // const button = document.getElementById("changeTextButton");

    // button.addEventListener("click", function() {
    //   paragraph.textContent = "You clicked the button!";
    // });

    //Exercise 3

// Select the buttons and the image element
const image1Button = document.getElementById("picbtn1");
const image2Button = document.getElementById("picbtn2");
const displayedImage = document.getElementById("swtchpics");

// Add click event listeners to the buttons
image1Button.addEventListener("click", function () {
  displayedImage.src = "image1.jpg"; // Change to the first uploaded image
  displayedImage.alt = "Image 1"; // Update alt text for accessibility
});

// image2Button.addEventListener("click", function () {
//   displayedImage.src = "image2.jpg"; // Change to the second uploaded image
//   displayedImage.alt = "Image 2"; // Update alt text for accessibility
// });

  
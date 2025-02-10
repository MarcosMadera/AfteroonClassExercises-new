// Starter code in app.js
import { add, multiply } from './mathUtils.js';

const button = document.getElementById('calculateButton');
const result = document.getElementById('result');

// Event listener for the button
button.addEventListener('click', () => {
  const a = 5;
  const b = 10;

  // Using imported functions (to be completed in mathUtils.js)
  const sum = add(a, b);
  const product = multiply(a, b);

  result.textContent = `Sum: ${sum}, Product: ${product}`;
});
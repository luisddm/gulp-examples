'use strict';

// Get the NodeList of input DOM elements with the numbers to sum
const numsList = document.querySelectorAll('.num');

// Convert NodeList to Array
const numsArray = [...numsList];

// Get the rest of the DOM elements
const showResult = document.getElementById('show-result');
const calculateResult = document.getElementById('calculate-result');

// Calculate button event
calculateResult.addEventListener('click', calculate);

function calculate() {
  // Do the sum and show the result in the showResult element
  const result =
    numsArray
      .map(num => +num.value)
      .reduce((prevNum, nextNum) => prevNum + nextNum, 0);

  showResult.innerHTML = result;
}

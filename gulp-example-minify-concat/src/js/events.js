'use strict';

// Get the DOM elements to vars
var worldElement = document.getElementById('world');
var clickableElement = document.getElementById('clickable');

// Hide the greeting
worldElement.style.display = 'none';

// Register the event
clickableElement.addEventListener('click', showGreeting);

// Toggle the greeting
function showGreeting() {
  if (worldElement.style.display === 'none') {
    worldElement.style.display = 'block';
  } else {
    worldElement.style.display = 'none';
  }
}

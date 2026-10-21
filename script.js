// Select DOM elements
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');

// Initialize state
let count = 0;

// Increment button click handler
incrementBtn.addEventListener('click', () => {
  count++;
  counterDisplay.textContent = count;
});

// Reset button click handler
resetBtn.addEventListener('click', () => {
  count = 0;
  counterDisplay.textContent = count;
});

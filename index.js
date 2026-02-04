//Simple Javascript program to run the counter  with frontend
let count = 0;

// Function to update the counter display
function updateDisplay() {
    document.getElementById('counter').innerText = count;
}
// Function to increment the counter
function increment() {
    count++;
    updateDisplay();
}
// Function to decrement the counter
function decrement() {
    count--;
    updateDisplay();
}
// Initialize display
updateDisplay();
// Attach event listeners to buttons
document.getElementById('incrementBtn').addEventListener('click', increment);
document.getElementById('decrementBtn').addEventListener('click', decrement);

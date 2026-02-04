//Simple Javascript program with counter logic
let count = 0;

// Function to update the counter display
function updateDisplay() {
    if (typeof document !== 'undefined') {
        document.getElementById('counter').innerText = count;
    }
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

// Function to get current count (useful for testing)
function getCount() {
    return count;
}

// Function to reset counter (useful for testing)
function resetCount() {
    count = 0;
    updateDisplay();
}

// Initialize display only in browser environment
if (typeof document !== 'undefined') {
    updateDisplay();
    // Attach event listeners to buttons
    document.getElementById('incrementBtn').addEventListener('click', increment);
    document.getElementById('decrementBtn').addEventListener('click', decrement);
}

// Export for Node.js testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { increment, decrement, getCount, resetCount, updateDisplay };
}

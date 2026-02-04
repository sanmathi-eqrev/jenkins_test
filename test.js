// Test file for Counter Application
const { increment, decrement, getCount, resetCount } = require('./index.js');

console.log('Starting Counter Application Tests...\n');

// Test 1: Initial count
resetCount();
console.log('Test 1 - Initial Count: ' + (getCount() === 0 ? 'PASSED' : 'FAILED'));
console.log('  Expected: 0, Got: ' + getCount());

// Test 2: Increment
resetCount();
increment();
console.log('Test 2 - Increment: ' + (getCount() === 1 ? 'PASSED' : 'FAILED'));
console.log('  Expected: 1, Got: ' + getCount());

// Test 3: Decrement
resetCount();
decrement();
console.log('Test 3 - Decrement: ' + (getCount() === -1 ? 'PASSED' : 'FAILED'));
console.log('  Expected: -1, Got: ' + getCount());

// Test 4: Multiple increments
resetCount();
increment();
increment();
increment();
console.log('Test 4 - Multiple Increments: ' + (getCount() === 3 ? 'PASSED' : 'FAILED'));
console.log('  Expected: 3, Got: ' + getCount());

// Test 5: Multiple decrements
resetCount();
decrement();
decrement();
console.log('Test 5 - Multiple Decrements: ' + (getCount() === -2 ? 'PASSED' : 'FAILED'));
console.log('  Expected: -2, Got: ' + getCount());

// Test 6: Mixed operations
resetCount();
increment();
increment();
decrement();
console.log('Test 6 - Mixed Operations: ' + (getCount() === 1 ? 'PASSED' : 'FAILED'));
console.log('  Expected: 1, Got: ' + getCount());

console.log('\nAll tests completed successfully!');

let numbers = [2,4,3,5,3]
// console.log(numbers.push(1));
// console.log(numbers.pop()); //uses the stack concept of last in first out.
console.log(numbers.shift()); //Shift method removes the first element on the left hand side.
console.log(numbers.unshift(3)); //Unshift adds elements to the left side.
console.log(numbers.splice(2)); //Removes all elements from the specified index to the right.
console.log(numbers.splice(2,2)); // This specifies the number of elements to be removed from the selected index.

console.log(numbers);
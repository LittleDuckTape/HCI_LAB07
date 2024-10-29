// Write a function sumArray() that accepts an array of numbers and returns teh sum of all numbers in the array.

function sumArray(arr) {
    let sum = 0;
    arr.forEach(num => sum += num);
    return sum;
}

// Testing:

console.log(sumArray([1, 2, 3])); // 6
console.log(sumArray([10, 3, 10, 4])); // 27
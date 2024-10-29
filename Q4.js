// Write a function isUniform() which takes an array as an argument and returns true if all elements in the array are identical. Otherwise, it should return false

function isUniform(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return false;
        }
    }
    return true;
}

// Testing:

console.log(isUniform([1, 1, 1, 1])); // true
console.log(isUniform([1, 2, 1, 1])); // false
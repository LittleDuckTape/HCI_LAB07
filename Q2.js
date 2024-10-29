// Write a function printReverse() that takes an array as an argument and prints out the elements in the array in reverse order on the browser's JavaScript console (don't actually reverse the array itself)

function printReverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

// Testing:

printReverse([1, 2, 3, 4]);
printReverse(['a', 'b']);
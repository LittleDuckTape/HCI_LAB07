// Write a function palindrome() that takes a string as an argument and returns true if the string is a palindrome, and false otherwise. A palindrome is a word, phrase, or sequence that reads the same backwards as forward

function palindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Testing:

console.log(palindrome('racecar')); // true
console.log(palindrome('hello')); // false
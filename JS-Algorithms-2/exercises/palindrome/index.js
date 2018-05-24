// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const reversedStr = str.split('').reduce((rev, char) => char + rev);

    // Long version to write out
    // if (reversedStr === str) {
    //     return true;
    // }
    // return false;

    // Shorter more concise return statement
    return str === reversedStr;
}

module.exports = palindrome;

// 1:
// function palindrome(str) {
//     const reversedStr = str.split('').reduce((rev, char) => char + rev);

//     // Long version to write out
//     // if (reversedStr === str) {
//     //     return true;
//     // }
//     // return false;

//     // Shorter more concise return statement
//     return str === reversedStr;
// }

// 2: Not ideal as it does twice the comparisons as it needs to
// after comparing the first half of the array, the second half is redundant
// function palindrome(str) {
//     return str.split('').every((char, i) => {
//         return char === str[str.length - i - 1];
//     });
// }
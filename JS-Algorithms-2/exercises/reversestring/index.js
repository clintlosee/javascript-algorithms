// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // return str.split('').reduce((reversed, character) => {
    //     return character + reversed;
    // }, '');

    // refactored
    return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;

// 1:
// function reverse(str) {
//     const newStr = str.split('').reverse().join('');
//     return newStr;
// }

// 2:
// function reverse(str) {
//     let reversed= '';

//     // older for loop syntax
//     // for (var i = 0; i < str.length; i++) {
//     //     reversed = str[i] + reversed;
//     // }

//     // new ES6 syntax for loop iteration
//     for (let character of str) {
//         reversed = character + reversed;
//     }

//     return reversed;
// }

// 3:


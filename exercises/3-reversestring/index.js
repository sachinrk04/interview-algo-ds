// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Method-1

// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// Method-2

// function reverse(str) {
//     let reversed = '';
//     for (let ch of str) {
//         reversed = ch + reversed;
//     }
//     return reversed;
// }

// Method-3

function reverse(str) {
    // return str.split('').reduce((reversed, ch) => {
    //     return ch + reversed;
    // }, '');
    return str.split('').reduce((reversed, ch) => ch + reversed, '');
}

module.exports = reverse;
// const add = (a, b) => {
//     for (let i = 0; i < 9e27; i++) { }
//     console.log(a + b);
// }
// console.log('start');
// const A = add(1, 2);
// const B = add(2, 3);
// const C = add(3, 4);
// console.log('end');

// const add = (a, b) => {
//     setTimeout(() => {
//         for (let i = 0; i < 9e27; i++) { }
//         console.log(a + b);
//     }, 5000);
// }
// console.log('start');
// const A = add(1, 2);
// const B = add(2, 3);
// const C = add(3, 4);
// console.log('end');
module.exports = function () {
    console.log('Josh Edward');
};
module.exports();
const getName = require('./pattern1');
getName(); // Josh Edward
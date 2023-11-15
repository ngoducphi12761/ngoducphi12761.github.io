var add = require('./myfile');
// console.log(add(2,3));

var fs = require('fs');

// fs.readFile('myfile.js', function(e,o){
//     console.log(e, o, toString())
// });

// var i =1;
// i++;
// for (let j =0; j<5; j++){
//     console.log(i);
// }

console.log("before: ", add.a);
// add.a.b = add.a.b+1;
add.a[0] =3;
console.log("after addition", add.a);
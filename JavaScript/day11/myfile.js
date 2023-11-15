// let a = {b:1};
let a = [1, 3]
function add(){
    return {a:'a'};
}
function printA(){
    console.log("Here A",a);
}
module.exports = {a:a, print:printA};
// module.exports = add;
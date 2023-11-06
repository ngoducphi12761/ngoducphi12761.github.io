let a = {};
let b = {a:1, b:2, c: "apple", d :["apple","Pear"]};
console.log(b.c);
b.a = 2;
b.d.push("grapes");
console.log(b.a, b.d);


let obj = {a:2, b:2}
function convert(){
    let arr = [];
    for (let key in obj){
        arr.push(key+obj[key]);
    }
    return arr;
}
console.log(convert(obj));

let a = 10;
let myString = "apple";
let numbers = [1, 2, 3];
let booleanValue = false;
////


// console.log("2" +3);
// console.log("2" ==2); // doesnot check type
// console.log("2" ===2); // stricky rule to check value

function add(a, b, c) {
    if ((a > b) && (a > c))
        return a;
    else
        return a + c;
}

console.log(add(10, 2, 5));
const myArray = [1, 3, 4, 5];
loopP(myArray);
function loopP(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }
}
const arr = [1, 4, 5, 6, 7];
// const b = a.map(function(elem, i, a))
// function stringLoop(str){
//     let myStr = "";
//     for (let ele of str) 
//     if (){
//         {console.log(ele)}
//     }
// }
// isRevertString("level");
console.log(isRevertString("level"));
console.log(isRevertString("testttt"));
console.log(isRevertString("e2322e12sssffe"));
function isRevertString(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
let arr2 = ['apple', 'pear', 'apple', 'banana', 'grapes', 'grapes'];
function removeApple(arr2) {
    var tempArr = [];
    for (let each of arr2) {
        if (each != "apple")
            tempArr.push(each);
    }
    return tempArr;
}
console.log(removeApple(arr2));
function max(a, b) {
    return (a > b) ? a : b;
}
function maxOfThree(a, b, c) {
    if (a > b && a > c) return a;
    else if (b > c) return b;
    else return c;
}
function isVowel(str) {
    if (str[0] != "a" || str[0] != "e" || str[0] != "o" || str[0] != "u" || str[0] != "i") {
        return false;
    }
    return true;
}
function sumNum(arr) {
    var sum = 0;
    for (var each of arr) {
        sum += each;
    }
    return sum;
}
function multiply(arr) {
    var sum = 0;
    for (var each of arr) {
        sum *= each;
    }
    return sum;
}
console.log(reverse("test"));
function reverse(str) {
    var temStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        temStr += str[i]; 
    }
    return temStr;
}
function findLongestWord(arr) {
    var tem = 0;
    for (var each of arr) {
        if (each.length > tem) tem = each.length;
    }
    return tem;
}
let myArr = [10, 3, 2, 4]
function sliceArray(myArr, start, end) {
    let tempArr = [];
    for (let i = start; i < end; i++) {
        tempArr.push(myArr[i]);
    }
    return tempArr;
}
console.log(sliceArray(myArr, 1,4));
let myArr2 = ["Bill","Tekken", "Loopy"];
function filterLongWords (myArr, length) {
    let tempArr = [];
    for (var each of myArr){
        if( each.length > length) tempArr.push(each);
        }
        return tempArr;
}
console.log(filterLongWords(myArr2, 4));
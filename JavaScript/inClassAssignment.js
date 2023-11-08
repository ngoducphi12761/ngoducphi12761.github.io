let a = {};
let b = {a: 1, b:2, c:"apple", d:["apple", "Pear"], name: "warp", age: 30};

console.log(a, b);

console.log(b.c);

b.a = b.a +2;
console.log(b.a);

b.e = "earch";
console.log(b);

delete b.a;
console.log(b);

b.b = "new"
console.log(b);

console.log(b.name)
let prop = 'name'
console.log(b[prop])
console.log("=========================")
let tempArr = [];
for (let key in b) {
    console.log(key, b[key])
    tempArr.push (b[key]);
}
console.log(tempArr)
console.log("========Inverse=========")
let simpleObj ={name:'wap',age:30,skill:'javascript'};
let tempArr1 ={};
for (let key in simpleObj) {
    tempArr1[simpleObj[key]]= key;
}
console.log(tempArr1);
//Inverse
// let simpleObj ={name:'wap',age:30,skill:'javascript'};
// let newObj = {};
// for(let key in simpleObj){
//     newObj[simpleObj[key]]=key;
// }
console.log("========Collect names=========")
let temp =[];
let temp2 =[];
let objArray = [{name:'wap',id:'472'},{name:'ea',id:'568'}];
for(let each of objArray){
    temp.push(each.name)
    let objTemp ={};
    objTemp["name"] = each.name;
    temp2.push(objTemp)
}
console.log(temp);
console.log(temp2);
console.log("========Objects=========")
console.log(typeof {a:1, b:2});
console.log(typeof [10,20])

console.log("========Array=========")
let arr1 = [3, 4];
let arr2 = arr1;
arr1.push(9);
console.log(arr1, arr2);
let arr3 = [...arr1]
arr1.push(10);
console.log(arr1, arr3);

console.log("========Array=========")

let num1= 10;
let num2 = num1
num2 = num2 +1;
console.log(num1,num2);

console.log("========Convert Object To Array=========")
// convertObjectToArray({a:1, b:2, c:"string", d:{x:1, y:w}})
// console.log(convertObjectToArray({a:1, b:2, c:"string", d:{x:1, y:w}}))
function convertObjectToArray(obj) {
    var result = [];
    for (var key in obj) {
    //   if (obj.hasOwnProperty(key)) {
    //     result.push([key, obj[key]]);
    //   }
    
        result.push([key, obj[key]]);

    }
    return result;
  }

  // Example usage:
  const obj = {a:1, b:[1,2], c:"string", d:{x:1, y:2}};
  const convertedArray = convertObjectToArray(obj);
  console.log(convertedArray);
  console.log("========Convert Object To Array 222222222=========")
let obj2 = {a:1, b:2, c:[10,20], d:{x:1, y:2}}

function convert(obj){
    let array =[];
    for (let key in obj){
        if (Array.isArray(obj[key])){
            let str = '';
            for (let ele of obj[key]){
                str += ele;
            }
            console.log(str);
            array.push(key +str);
        }
        else if (typeof obj[key] == 'object' ){
            let objValue = obj[key];
            for (let key1 in objValue){
                array.push(key + key1 + objValue[key1])
            }
        }
        else array.push(key + obj[key]);
    }
    return array;
}
console.log(convert(obj2));

function destructureArray(array) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        obj[typeof array[i] + i] = array[i];
    }
    return obj
}
console.log(destructureArray([50,'apple',{a:1}]));
function destroyAnArray(arr){
    let obj = {};
    for (var i = 0; i < arr.length; i++){
        obj[typeof arr[i] +i] = arr[i];
    }
    return obj
}
console.log(destroyAnArray([50,'apple',{a:1}]));

function arrayToString(array) {
    let stringOutput = '';
    for (let ele of array) {
        stringOutput += ele + ",";
    }
 //   let string = stringOutput.substring(0, stringOutput.length - 1)
  //  return string;
  return stringOutput;
}
 console.log(arrayToString(['a','b','c']));
 console.log("========Convert Object To Array 33333333333=========")
 function minifyObject(objArray) {
    let finalArray = [];
    for (let ele of objArray) {
        let tempObj = {};
        for (let key in ele) {
            if (key != 'a'){
                tempObj[key]=ele[key];
            }
       }
       finalArray.push(tempObj);
    }
    return finalArray;
}
// console.log(minifyObject([{ a: 1, b: 2, c: 2 }, { a: 2, b: 3, c: 4 }]))
let arr4 = [1,3,4,5]
let temArr4 = arr4.slice(-3);
console.log(temArr4, arr4)
// let arr5 = [1,3,4,5]
// let temArr5 = arr5.splice(1, 2, "slice");
// console.log(temArr5, arr5)



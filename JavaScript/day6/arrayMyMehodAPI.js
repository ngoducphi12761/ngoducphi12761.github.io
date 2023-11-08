function sum() {
    console.log("test")
}

let array = [{ name: "Ram", age: 10 }, { name: 'vivek', age: 30 }]

function filterArray(array, givenAge) {
    let temArry = [];
    temArry = array.filter(function (value, indx, array) {
        return (value.age > givenAge);
    })
    return temArry;
}
function filterArrayName(array, givenCharacter) {
    let temArry = [];
    temArry = array.filter(function (value, indx, array) {
        return (value.name.includes(givenCharacter));
    })
    return temArry;
}

function filterArrayNameReduce(array) {
    let temArry = [];
    temArry = array.filter(function (value, indx, array) {
        return (value.name.includes(givenCharacter));
    })
    return temArry;
}

console.log(filterArrayName(array, 'm'))

let array2 = [1, 4, 5]
function filterArrayNameReduce(array) {
    let temArry = [];
    temArry = array.reduce(function (acc,value, indx, array) {
        console.log(acc,value, indx);
        if (indx == 1)
        return value;
    },1)
    return temArry;
}
console.log(filterArrayNameReduce(array2))

f


let a = {};
let b = { a: 1, b: 2, c: "apple", d: ["apple", "Pear"] };
console.log(b.c);
b.a = 2;
b.d.push("grapes");
console.log(b.a, b.d);


let obj = { a: 2, b: 2 }
function convert() {
    let arr = [];
    for (let key in obj) {
        arr.push(key + obj[key]);
    }
    return arr;
}
console.log(convert(obj));

let obj2 = { a: 1, b: "rectangle", c: { d: ["test", "long"] } };
console.log(obj2);
obj2 = {};
console.log(obj2);
// obj2 = null;
console.log(obj2);
obj2.a = 2;
console.log(obj2);
let key = 1;
obj2[key] = "this ";
console.log(obj2);


loopingObject(obj2)

function loopingObject(obj) {
    for (var key in obj) {
        console.log("key valye", key, obj[key]);
    }
}
// console.log(loopingObject({a:3,c:"this is a test"}));
let obj3 = obj2;

console.log(obj3);
obj3.d = "new"
console.log(obj3);
console.log(obj2);
// function ab(){
//     return {
//         a:1
//     }
// }
// console.log( ab());

// function b1(){
//     return 
//     {
//         a:1
//     }
// }
// console.log( b1());
let array2 = [{ a: 1 }, "string", 34, { b: 1 }, { a: [{ a: "test" }, { c: "1" }] }];
let subArr = array2.slice(1, 4);
console.log("array", array2, "; subArray ", subArr);
let newArray = [{ e: "string" }, { f: 1 }]
let mergeArray = subArr.concat(newArray);
console.log(mergeArray);
let d = 2;
console.log(Array.isArray(d));

let objArray = [{ name: "a", age: 20 }, { name: "b", age: 14 }, { name: "c", age: 40 }]
console.log(objArray.reduce(function (accumulator, element, index, array) {
    return accumulator + element.age;
}, 0));
let objArray2 = [{ name: "a", age: 20 }, { name: "b", age: 14 }, { name: "c", age: 40 }]
console.log(objArray.reduce(function (accumulator, element, index, array) {
    accumulator.push(element.name);
    return accumulator;
}, []));
/*
. Write a function, scoreExams, that takes an array of arrays of student answers and an array of 
the correct answers. It should compare each student’s answers against the correct answers and 
return an array holding the scores of each student. The score for each student is a count of the 
number of correct answers (i.e., matches with the key of correct answers). For example 
const studentAnswers = [[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]]; 
const correctAnswers = [3, 1, 2,4]; 
scoreExams(studentAnswers, correctAnswers)); --> [3,2,3];
*/
function pointCompare(arrStu, arr) {
    let arrPoints = [];

    for (let i = 0; i < arrStu.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arrStu[i][j] === arr[j])
                count++;

        }
        arrPoints.push(count);

    }
    return arrPoints;

}
let arrStu = [[1, 1, 2, 4], [2, 1, 2, 2], [3, 1, 3, 4]];
let arr4 = [3, 1, 2, 4]
console.log("avarage point", pointCompare(arrStu, arr4));

/*
Write a function, scoreForecasts, that takes 2 parameters which are each arrays. The 
first is an array of temperature forecasts. The second is an array of observed 
temperatures. If the forecast temperature is within 2 degrees of the actual that is 100% 
accurate. If the forecast is within 5 degrees that is 80% accurate. If it is within 10 
degrees that is 60% accurate. If the forecast is outside 10 degrees that is a miss or 0% 
accurate. scoreForecasts should find the percent accuracy for each forecast and return 
the average accuracy for a set of forecast temperatures. 
const forecast1 = [80, 90, 85]; 
const observed1 = [82, 95, 70]; 
scoreForecasts(forecast1, observed1) ;
1st Temp (80,82) - 2 degrees – 100% 
2nd Temp (90,95) - 5 degrees – 80% 
3rd Temp (85,70) - 15 degrees – 0% 
PercentArray [100,80,0] 
RESULT Average (100 + 80 + 0)/3 = 60 
2. const forecast2 = [80, 80, 80]; 
const observed2 = [82, 85, 74]; 
scoreForecasts(forecast2, observed2) à 
PercentArray [100,80,60] 
RESULT Average (100 + 80 + 60)/3 = 80 
*/
let forcastArr = [80, 90, 85];
let observed1 = [82, 95, 70];
function tempForcast(forcastArr, obsArr) {
    let arr = [];
    var j = 0;
    let re = 0;
    for (var i = 0; i < forcastArr.length; i++) {
        if (Math.abs(forcastArr[i] - obsArr[i]) <= 2)
            re = 100;
        else if (Math.abs(forcastArr[i] - obsArr[i]) > 2 || Math.abs(forcastArr[i] - obsArr[i]) <= 5)
            re = 80;
        else if (Math.abs(forcastArr[i] - obsArr[i]) > 5 || Math.abs(forcastArr[i] - obsArr[i]) <= 10)
            re = 60;
        else re = 0;
        arr.push(re);

    }
    let sum = 0;
    for (let i of arr) {
        sum += i;
    }
    return sum / obsArr.length;
}
console.log(tempForcast(forcastArr, observed1));
/*
 Write a function, firstRowColSum, to determine the sum of first row and first column of 
a 2-dimensional array and return an array of first row sum and first column sum
testArr1 = [ [1,2,3], [5,2,3], [9,2,3] ] 
first row Sum = 1+2+3 = 6
first column Sum = 1+5+9 ->15 
firstRowColSum (testArr1) à [6, 15]
testArr2 = [ [1, 2], [3, 4], [5, 6]]
first row Sum = 1+2 =3
first column Sum = 1+3+5 ->9
firstRowColSum (testArr2) à [3, 9]
console.log("expect : [6,15] ", firstRowColSum (testArr1])); 
console.log("expect : [3,9] ", firstRowColSum (testArr2))
*/
function firstRowColSum(arr) {
    if (arr.length < 1) return 0;
    //first row
    let sum = 0;
    let arrRe = [];
    for (let i = 0; i < arr[0].length; i++) {
        sum += arr[0][i];
    }
    arrRe.push(sum);
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i][0];
    }
    arrRe.push(sum);
    return arrRe;
}
var testArr2 = [[1, 2], [3, 4], [5, 6]]
let testArr1 = [[1, 2, 3], [5, 2, 3], [9, 2, 3]]
console.log("expect : [3,9] ", firstRowColSum(testArr2))
console.log("expect : [6,15] ", firstRowColSum(testArr1));
/*
Cars
let tataTiago = {name:"Tata Tiago",manufacturer:"Tata",fuelType:"petrol",bodyType:"hatchback", 
seatingCapacity:5,price:5000} 
let nexon = {name:"Tata Nexon",manufacturer:"Tata",fuelType:"diesel",bodyType:"SUV", 
seatingCapacity:5,price:7000}; 
let mahindra = {name:"Mahindra XUV700",manufacturer:"Mahindra",fuelType:"petrol", 
bodyType:"SUV", seatingCapacity:5,price:7500}; 
let mg = {name:"MG ZS EV",manufacturer:"Mahindra",fuelType:"Electric",bodyType:"SUV", 
seatingCapacity:5,price:25000}; 
let volvo ={name:"Volvo XC90",manufacturer:"Volvo",fuelType:"petrol",bodyType:"hybrid", 
seatingCapacity:7,price:35000};
let list = [tataTiago,nexon,mahindra,mg,volvo]
a. Get Petrol Cars below given price
getPetrolCarsWithinPrice(list,15000)->
[
 Car {
 name: 'Tata Tiago', 
 manufacturer: 'Tata', 
 fuelType: 'petrol', 
 bodyType: 'hatchback', 
 seatingCapacity: 5, 
 price: 5000
 },
 Car {
 name: 'Mahindra XUV700',
 manufacturer: 'Mahindra',
 fuelType: 'petrol', 
 bodyType: 'SUV',
 seatingCapacity: 5, 
 price: 7500
 }
] 
b. Return the number of cars by each Manufacturer
groupByManufacturer(list) -> { Tata: 2, Mahindra: 2, Volvo: 1 }
c. Sort the list by given filter. If filter is price, show the list from cheapest to highest price, if filter 
is 'bodyType' , sort the list by bodyType.length.
sortThemByGivenFilter(list,"bodyType") ->
[
 Car {
 name: 'Tata Nexon', 
 manufacturer: 'Tata', 
 fuelType: 'diesel', 
 bodyType: 'SUV',
 seatingCapacity: 5, 
 price: 7000
 },
 Car {
 name: 'Mahindra XUV700', 
 manufacturer: 'Mahindra',
 fuelType: 'petrol', 
 bodyType: 'SUV',
 seatingCapacity: 5, 
 price: 7500
 },
 Car {
 name: 'MG ZS EV', 
 manufacturer: 'Mahindra',
 fuelType: 'Electric', 
 bodyType: 'SUV',
 seatingCapacity: 5, 
 price: 25000
 },
 Car {
 name: 'Volvo XC90', 
 manufacturer: 'Volvo', 
 fuelType: 'petrol',
 bodyType: 'hybrid',
 seatingCapacity: 7,
 price: 35000
 },
 Car {
 name: 'Tata Tiago',
 manufacturer: 'Tata',
 fuelType: 'petrol',
 bodyType: 'hatchback',
 seatingCapacity: 5,
 price: 5000
 }
]
d. Add another property serviceCost with given value to all the car objects in the list.
addServiceCostToAllCars(list,100)->
[
 Car {
 name: 'Tata Tiago', 
 manufacturer: 'Tata', 
 fuelType: 'petrol', 
 bodyType: 'hatchback', 
 seatingCapacity: 5, 
 price: 5000,
 serviceCost: 1000 
 },
 Car {
 name: 'Tata Nexon', 
 manufacturer: 'Tata', 
 fuelType: 'diesel', 
 bodyType: 'SUV',
 seatingCapacity: 5, 
 price: 7000,
 serviceCost: 1000 
 },
 Car {
 name: 'Mahindra XUV700', 
 manufacturer: 'Mahindra',
 fuelType: 'petrol', 
 bodyType: 'SUV',
 seatingCapacity: 5, 
 price: 7500,
 serviceCost: 1000 
 },
 Car {
 name: 'MG ZS EV',
 manufacturer: 'Mahindra',
 fuelType: 'Electric',
 bodyType: 'SUV',
 seatingCapacity: 5,
 price: 25000,
 serviceCost: 1000
 },
 Car {
 name: 'Volvo XC90',
 manufacturer: 'Volvo',
 fuelType: 'petrol',
 bodyType: 'hybrid',
 seatingCapacity: 7,
 price: 35000,
 serviceCost: 1000
 }
]

*/

let tataTiago = {
    name: "Tata Tiago",
    manufacturer: "Tata",
    fuelType: "petrol",
    bodyType: "hatchback",
    seatingCapacity: 5,
    price: 500
}
let nexon = {
    name: "Tata Nexon",
    manufacturer: "Tata",
    fuelType: "diesel",
    bodyType: "SUV",
    seatingCapacity: 5,
    price: 7000
}
let mg = {
    name: "MG ZS EV",
    manufacturer: "Mahindra",
    fuelType: "Electric",
    bodyType: "SUV",
    seatingCapacity: 5,
    price: 25000
};
let volvo = {
    name: "Volvo XC90",
    manufacturer: "Volvo",
    fuelType: "petrol",
    bodyType: "hybrid",
    seatingCapacity: 7,
    price: 35000
};
let Mahindra = {
    name: 'Mahindra XUV700',
    manufacturer: 'Mahindra',
    fuelType: 'petrol',
    bodyType: 'SUV',
    seatingCapacity: 5,
    price: 7500
}
let listCar = [tataTiago, nexon, Mahindra, mg, volvo];
function getPetrolCarsWithinPrice(listCar, givenPrice) {
    let carArray = [];
    for (let each of listCar) {
        if (each.price < givenPrice && each.fuelType == "petrol") {
            carArray.push(each);
        }
    }
    return carArray;
}
console.log("getPetrolCarsWithinPrice ", getPetrolCarsWithinPrice(listCar, 12000));

function groupByManufacturer(list) {
    let manufacturerArray = {};
    for (let each of list) {
        if (manufacturerArray[each.manufacturer])
            manufacturerArray[each.manufacturer]++;
        else
            manufacturerArray[each.manufacturer] = 1;
    }
    return manufacturerArray;

}
console.log(groupByManufacturer(listCar))
console.log(groupByManufacturer2(listCar))
function groupByManufacturer2(list) {
    let countByManufacturer = {};
    for (let i = 0; i < list.length; i++) {
        let manufacturer = list[i].manufacturer;
        if (countByManufacturer.hasOwnProperty(manufacturer)) {
            countByManufacturer[manufacturer]++;
        } else {
            countByManufacturer[manufacturer] = 1;
        }
    }
    return countByManufacturer;
}

function groupByManufacturer3(listCar) {
    let objCar = {};
    for (let each of listCar) {
        if (objCar[each.manufacturer]) {
            objCar[each.manufacturer]++;
        }
        else
            objCar[each.manufacturer] = 1;
    }
    return objCar;
}
console.log(groupByManufacturer3(listCar))

function sortThemByGivenFilter(list, filter) {
    return list.sort(function (a, b) {
        if (filter == 'bodyType') {
            // return a.bodyType.length > b.bodyType.length? 1:-1;
            return a.bodyType.length > b.bodyType.length;
        }
        if (filter =='price'){
            return a.price - b.price;
        }
    })

}

console.log(sortThemByGivenFilter(listCar,"bodyType"))
console.log("========================================")
console.log(sortThemByGivenFilter(listCar,"price"))


function addServiceCostToAllCars(list, cost){
    let arrCar = [];
    for (let each of list){
        each.serviceCost = cost;
        arrCar.push(each);
    }
    return arrCar;
}
console.log(addServiceCostToAllCars(listCar,1000));

let frontDoor = {
    id: 1, 
    name: "Front Door Sensor", 
    type: 34, 
    manufacturer: "Climax",
    events: [{ time: "100", name: "Door Closed" }, { time: "101", name: "Door Opened" }]
}
let motionSensor = {
    id: 2, 
    name: "Motion Sensor", 
    type: 43,
    manufacturer: "NYCE",
    events: [{ time: "100", name: "Motion Detected" }]
};
let porticoLight = {
    id: 3, 
    name: "Portico Light", 
    type: 54, 
    manufacturer: "Osram",
    events: [{ time: "100", name: "Light off" }]
};
let mainEntrance = {
    id: 4, 
    name: "Main Entrance", 
    type: 34, 
    manufacturer: "Climax",
    events: [{ time: "100", name: "Door Closed" }]
};
let listSensor = [frontDoor, motionSensor, porticoLight, mainEntrance];

function groupByManufacturerSensor(list){
    let obj = {};
    for (let each of list){
        if (obj[each.manufacturer])
        obj[each.manufacturer]++;
        else
        obj[each.manufacturer]= 1;
    }
    return obj;
}
console.log(groupByManufacturerSensor(listSensor));

function getLatestEventOfSensor(list, id){
    let maxTime =0, objMaxEvent;
    for (let sensor of listSensor){
        if (sensor.id = id){
            for (let event of sensor.events){
                    if (event.time > maxTime){
                        maxTime =  event.time;
                        objMaxEvent = event;
                    }
            }
        }
    }
    return objMaxEvent;
}
console.log(getLatestEventOfSensor(listSensor, 1));

function findMostPopularManufacturer(list){
    let objGroupManufacture = groupByManufacturerSensor(list);
    let max = 0;
    let nameMf = "";
    for (let eachMF in  objGroupManufacture){
        if (objGroupManufacture[eachMF] > max){
            max = objGroupManufacture.eachMF;
            nameMf = eachMF;
        }
    }
    return nameMf;
}

console.log("Popular Manufacture: ",findMostPopularManufacturer(listSensor));
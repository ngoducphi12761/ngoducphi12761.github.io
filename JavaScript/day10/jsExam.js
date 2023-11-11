// function a() {
//     console.log(x); // consult Global for x and print 20 from Global 
// }
// function b() {
//     var x = 10;
//     a(); // consult Global for a 
// }
// var x = 20;
// b();
// function b() {
//     function a() {
//         console.log(x);
//     }
//     var x = 10;
//     a();
// }
// var x = 20;
// b(); 

// function b() {
//     function a() {
//         console.log(x);
//     }
//     a();
// }
// var x = 20;
// b();

// function f() {
//     var a = 1, b = 20, c;
//     console.log(a + " " + b + " " + c); // 1 20 un
//     function g() {
//         var b = 300, c = 4000;
//         console.log(a + " " + b + " " + c); // 1 300 4000
//         a = a + b + c;
//         console.log(a + " " + b + " " + c); //4301 300 4000
//     }
//     console.log(a + " " + b + " " + c); // 1 20 un
//     g();
//     console.log(a + " " + b + " " + c); //4301 20 un
// }
// f();

// var x = 10;
// function main() {
//     console.log("x1 is:" + x);
//     x = 20;
//     console.log("x2 is:" + x);
//     if (x > 0) {
//         var x = 30;
//         console.log("x3 is:" + x);
//     }
//     console.log("x4 is:" + x);
//     var x = 40;
//     var f = function (x) {
//         console.log("x5 is:" + x);
//     };

//     f(50);
//     console.log("x6 is:" + x);
// }
// main();
// console.log("x7 is:" + x);

// function findMax(){
//     let max = -Infinity;
//     for (let i =0; i < arguments.length; i++){
//         if (max < arguments[i]) max = arguments[i];
//     }
//     return max;
// }
// const max1 = findMax(1,2,10,12,3,5,5);
// console.log(max1);


// let myArray = ['carrot', 'beetroot', 'radish'];
// const [, , test] = myArray;
// console.log("expect radish", test);

// function print(a, ...more) {
//     console.log(a, more, arguments.length);
// }
// print(5, [7, 10], { a: 2 })

// let myObject = {Yes: 1};
// let {Yes:right} = myObject;
// console.log("expected 1",right);

// let a = 3;
// let b = {a:2};
// let {a:myA} = b;
// let c = [1,2];
// let myArray =[...c, a, b];
// console.log(myArray);
// let scores = {marks:40, math:30};

// let grades = {grade:'B', marks:50};
// let scoresGrades = {...scores, ...grades };
// console.log(scoresGrades);

// let scores = { marks: 40, math: 30 };
// let grades = { grade: 'B', marks: 50 };

// // Merging the objects with spread syntax
// let scoresGrades = { ...scores, ...grades };

// console.log("expect {grade:'B', marks:50, math:30}", scoresGrades);

// let i = 5;
// function callme(i) {
//     console.log(i);
// }
// callme();
// let score = 10;
// function play() {
//     function display() {
//         console.log(score)
//     }
//     display();
// }
// play();

// let counter = 12;
// function increment() {

//     counter++;
//     if (counter > 5) {
//         var counter = 10;
//     }
//     console.log(counter)
// }
// increment();
// console.log(counter)

// function objectFn(obj) {
//     delete obj.a;
// }
// let obj = { a: 2 };
// objectFn(obj);
// console.log(obj);

// function objectFn(obj) {
//     delete obj.a;
// }
// let obj = { a: 2 };
// objectFn(obj);
// console.log(obj);
//Sample Comments

// function main() {//var x;
//     console.log("x1 is:" + x);//undefined? x is declared but not yet assigned, 
//     //there is local varaible with same name.
//     x = 20;
//     console.log("x2 is:" + x);//20? assign local variable
//     if (x > 0) {
//         var x = 30;//
//         console.log("x3 is:" + x);//30?local variable is reassigned.
//     }
//     console.log("x4 is:" + x);//30 (209) var is function scope, so you can read it out of block
//     var x = 40;
//     var f = function (x) {
//         console.log("x5 is:" + x);//50 x is parameter, x is called with 50(217)
//     };
//     f(50);
//     console.log("x6 is:" + x);//40 (213)local variable is assigned 40, 
// }
// main();
// console.log("x7 is:" + x);//10 (213, 209) local declaration of x inside the function.




// let grapes = "green"; 



// function fruits(){ 

//     return function(message){ 

//         return grapes; 

//     } 

// } 

// console.log(fruits()()); 


// 2. 
// let x = 10; 

// function globalVar(){ 

//     return function(){ 

//        return x; 

//     } 

// } 

// x = 20; 

// let fn = globalVar(); 

// console.log(fn ()); 





// 3. 
// function sport(message){ 

//     message = "Hi"; 

//     return function(message){ 

//         return message; 

//     } 

// } 

// let sportFn = sport("Hello"); 

// console.log("function 3 ",sportFn ("")); 





// // 4. 
// function test(x){ 

//     x = 10; 

//     x++; 

//     return function(){ 

//         return x++; 

//     } 

// } 

// console.log(test(2)()) 



// 5.
// function car(){ 

//     let color = "white"; 

//     function seat(){ 

//         let color = "brown"; 
//         console.log(color)//___________

//     } 

//     console.log(color)//___________

// } 

// car("black") 


// 6. 
// function department(){ 

//     let numberOfDepartments = 5; 
//     console.log(numberOfDepartments);
//     function software(){ 

//         let language = "javascript"; 
//         console.log(language)

//     } 

//     console.log(language) 

// } 

// department() 





// // 7. 
// function department(language){ 

//     let numberOfDepartments = 5; 
//     console.log(numberOfDepartments)
//     function software(){ 

//         let language = "javascript"; 
//         console.log(language);

//     } 

//     console.log(language) 

// } 

// department("java"); 




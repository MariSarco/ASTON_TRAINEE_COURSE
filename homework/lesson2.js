//////////////////////// Task 1 ////////////////////////

// var result = [];
// for (var i = 0; i < 5; i++) {
//     (function(num) {result[num] = function () {
//         console.log(num);
//     };})(i)
// }
// result[0](); //0
// result[1](); //1
// result[2](); //2
// result[3](); //3
// result[4](); //4

//////////////////////// Task 2 ////////////////////////

// function getGroup() {
//     let students = [];
//     let i = 0;
//     while (i < 10) {
//         (function (num) {students[num] = function() {
//             console.log(num);
//         }})(i);
//         i++;
//     }

//     return students;
// }

// let group = getGroup();

// group[0](); // 0
// group[5](); // 5

//////////////////////// Task 3 ////////////////////////

// const multiply = (y) => {
//     const next = (n = y) => {
//       return x => {
//         if (!x) {
//           return n;
//         }
//         return next(x * n);
//       };
//     };
//     return next();
//   }

// const result1 = multiply(2)(3)(4)();
// console.log(result1); // 24

// const result2 = multiply(2)(3)(4)(5)();
// console.log(result2); // 120

//////////////////////// Task 4 ////////////////////////

// function getUniqArray(arr) {
   
//         return arr.filter(function(item, pos) {
//             if(typeof item !== "number") throw Error("В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел")
//             return arr.indexOf(item) === pos;
//         })
  
// }

// console.log(getUniqArray([1,2,3,1,3,3,4,"htt"]))
// console.log(getUniqArray([1,2,3,1,3,3,4]))
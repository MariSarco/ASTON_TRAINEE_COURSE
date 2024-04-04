//////////////////////// Task 1 ////////////////////////

// console.log('1'); //синх
// setTimeout(() => console.log('2'), 1); //макротаска
// let promiseNew = new Promise((resolve) => {
//     console.log('3'); //синх
//     resolve();
// });
// promiseNew.then(() => console.log('4')); //микротаска
// setTimeout(() => console.log('5')); //макротаска
// console.log('6'); //синх
// Последовательность: 1, 3, 6, 4, 5, 2 (должно быть так)
// Последовательность: 1, 3, 6, 4, 2, 5 (по факту из-за того что в 6-ой строке не достаточная задержка, ситуация с теми самыми 4мс)

//////////////////////// Task 2 ////////////////////////

// let promiseTree = new Promise((resolve, reject) => {
//     resolve("a"); //не обработали через then, не выведет
//     console.log("1"); //синх
//     setTimeout(() => {
//         console.log("2"); //макротаска
//     }, 0);
//     console.log("3"); //синх
// });
// Последовательность: 1, 3, 2

//////////////////////// Task 3 ////////////////////////

// let promiseTwo = new Promise((resolve, reject) => {
//     resolve("a");
// });
// promiseTwo
//     .then((res) => {
//         return res + "b"; //все ок, клеим
//     })
//     .then((res) => {
//         return res + "с"; //в пред. все ок, клеим
//     })
//     .finally((res) => {
//         return res + "!!!!!!!"; //игнорим, не принимает и не возвращает
//     })
//     .catch((res) => {
//         return res + "d"; //игнорим, в пред. все ок
//     })
//     .then((res) => {
//         console.log(res); //выводим "abc"
//     });
// Последовательность: "abc"

//////////////////////// Task 4 ////////////////////////

// function doSmth() {
//     return Promise.resolve("123");
// }
// doSmth()
//     .then(function (a) {
//         console.log("1", a); //все ок, выводим 1 123
//         return a;
//     })
//     .then(function (b) {
//         console.log("2", b); //в пред. все ок, выводим 2 123
//         return Promise.reject("321"); 
//     })
//     .catch(function (err) {
//         console.log("3", err); //в пред. триггерили ошибку, выводим 3 321
//     })
//     .then(function (c) {
//         console.log("4", c); //в пред. все ок, выводим 4 undefined(в c ничего не передали)
//         return c;
//     });
// Последовательность: 1 123, 2 123, 3 321, 4 undefined

//////////////////////// Task 5 ////////////////////////

// console.log("1"); //синх
// setTimeout(function () {
//     console.log("2"); //макротаска
// }, 0);
// Promise.resolve().then(() => console.log("3")); //микротаска
// console.log("4"); //синх
// Последовательность: 1, 4, 3, 2

//////////////////////// Task 6 ////////////////////////


// !!!



// async function a() {
//   console.log("a");
// }

// console.log("1"); //синх

// (async function () {
//   console.log("f1"); //синх
//   await a();
//   console.log("f2"); //ждем выполнение a()
// })();
// console.log("2"); //синх
// Последовательность: 1, f1, a, 2, f2

//////////////////////// Task 7 ////////////////////////

// console.log(1); //синх

// setTimeout(() => console.log(2)); //макротаска

// async function func() {
//   console.log(3); //синх

//   await new Promise((resolve) => {
//     console.log(4); //синх
//     resolve();
//     console.log(5); //синх
//   })
//     .then(() => console.log(6)) //микротаска 1
//     .then(() => console.log(7)); //микротаска 2

//   console.log(8); //ждет завершения промиса
// }

// setTimeout(() => console.log(9)); //макротаска

// func();

// console.log(10); //синх
// Последовательность: 1, 3, 4, 5, 10, 6, 7, 2, 9

//////////////////////// Task 8* ////////////////////////

// function foo(callback) {
//     setTimeout(() => {
//         callback('A');
//     }, Math.random() * 100);
// }
// function bar(callback) {
//     setTimeout(() => {
//         callback('B');
//     }, Math.random() * 100);
// }
// function baz(callback) {
//     setTimeout(() => {
//         callback('C');
//     }, Math.random() * 100);
// }

// function fn(func) {
//     return new Promise(cb=>func(cb)); // ждем значение колбэка и кидаем в резолв
// }

// fn(foo)
// .then(cb=>console.log(cb)) //с резолва прилетел колбэк нужно функции
// .then(()=>fn(bar)) //как только успешно ВЫВЕЛИ значение колбэка пред. функции можем приступать к след. и так далее
// .then(cb=>console.log(cb))
// .then(()=>fn(baz))
// .then(cb=>console.log(cb))

//голову сломал

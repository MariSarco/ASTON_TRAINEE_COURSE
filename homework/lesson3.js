//////////////////////// Task 1 ////////////////////////

// const user = {
//     name: 'Bob',
//     funcFunc() {
//         return function() {
//             console.log(this);
//         }
//     },
//     funcArrow() {
//         return () => {
//             console.log(this);
//         }
//     },
//     arrowFunc: () => {
//         return function() {
//             console.log(this);
//         }
//     },
//     arrowArrow: () => {
//         return () => {
//             console.log(this);
//         }
//     },
// };
// user.arrowArrow()();

// user.funcFunc()(); // window. Из-за вложенности функций теряем контекст
// user.funcArrow()(); // Объект user, т.к. стрелочная не имеет своего контекста берет из funcArrow, у того в свое время this будет user
// user.arrowFunc()(); // window. Родитель стрелочная функция у которой глобальный контекст
// user.arrowArrow()(); // window. Родитель стрелочная функция у которой глобальный контекст
// Если правильно понял про последние два, присвоение к свойству происходит когда объект еще не создан

//////////////////////// Task 2 ////////////////////////

// var poke1 = {name:'Pikachu'};
// var poke2 = {name:'Chermander'};
// var poke3 = {name:'Bulbasaur'};

// var sayName = function(){ console.log(this.name) }

// sayName.bind(poke1).bind(poke2).call(poke3); //Pikachu. Если правильно понял, при первом bind создается "объект" с ссылкой на осн. функцию и выполняется, потому остальное не выполнится


//////////////////////// Task 3 ////////////////////////

// const obj = {
//     firstName: 'Bill',
//     lastName: 'Ivanov',

//     showFirstName: function () {
//         console.log(this.firstName);
//     },

//     showLastName: () => {
//         console.log(this.lastName);
//     }
// }

// obj.showFirstName(); // Bill. Не стрелочная функция в this будет объект obj
// obj.showLastName(); // undefined. Стрелочная функция не имеет собственного контекста. Не баг, а фича)

// obj.showFirstName.bind({ firstName: 'Boris' })(); // Boris. Bind вызываем раз
// obj.showFirstName.bind({ firstName: 'Boris' }).bind({ firstName: 'Oleg' })(); // Boris. Второй bind не сработает

// obj.showLastName.bind({ lastName: 'Boris' })(); // undefined. Стрелочная функция

//////////////////////// Task 4 ////////////////////////

// const user = {
//     name: 'Mike',
//     fn: function () {
//         console.log(this.name)
//     }
// }

// setTimeout(() => user.fn(), 1000) //по умолчанию в setTimeout конекст глобальный

//////////////////////// Task 5 ////////////////////////

// function askPassword(ok, fail) {
//   let password = 'rockstar2'
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'Вася',

//   loginOk() {
//     console.log(`${this.name} logged in`);
//   },

//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },

// };

// askPassword(() => user.loginOk(), () => user.loginFail()) //Вася failed to log in / Вася logged in;
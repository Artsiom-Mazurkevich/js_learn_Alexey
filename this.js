//this
// !'use strict' -> this = some object
// 'use strict' -> this = anything



//1. global scope

//2. functions, Arrow functions, object methods

//3. bind call apply
//.bind(this, arg1,arg2)() | .call(this, arg1, arg2)  .apply(this, [arg1, arg2])



//4. Constructors







/////////////////////
// console.log(this)  // -> this = Window (in global scope)
// console.log(this)  // -> this = Global (in NodeJS)
//////////////////



















////////////////////////////
// function fn () {
//     let a = 5
//     console.log(this.a)
// }         // this в обыной функции, будет определён в момент вызова функции!! до момента вызова
///////////////////////////





















//////////////////////////

// const obj = {
//     name: 'Alex',
//     fn: fn
// }
//
//
// function fn () {
//     let a = 5
//     console.log(this)
// }
//
//
// fn() // -> this = undefined -> ! use strict -> Window
//
// obj.fn() // -> this = obj
/////////////////////////






















////////////////////////////
// const user = {
//     name: 'Ram',
//     showName () {
//         console.log(this.name)
//     }
// }

// user.showName()  -> this = user


// const showName = user.showName;
// showName() -> this = Window (потому что не use strict)
/////////////////////////////





























///////////////////////////////////
// Стрелочная функция всегда берёт this из внешнего лексического окружения!!!
// const arrow = () => {
//     // [[Environment]] -> внешнее лексическое окружение = Window
//     console.log(this)   // -> this = Window
// }
//
// arrow()








// function fn() {
//
//     //this -?
//
//     const arr = () => {
//         console.log(this)
//     }
//     arr()
// }
//
// fn() // -> Window
//////////////////////////////////////





















/////////////////////////////////////////////////////////
// const usertest1 = {
//     name: 'Henry',
//     sayHi () {
//         (() => {
//             console.log(this.name)
//         })()
//     }
// }
// usertest1.sayHi() // -> 'Henry



// const usertest2 = {
//     name: 'Bob',
//     sayHi () {
//         (() => {
//             console.log(this.name)
//         }).call(this.name)
//     }
// }
// // В данном случае call не имеет отношения к контексту тк стрелочная функция будет брать this из lexical environment sayHi а sayHi вызывается от имени usertest2
// // Смысла байндить контекст стрелочной функции нет!!!!
// usertest2.sayHi() // -> 'Bob'


//////////////////////////////////////////////////////////////































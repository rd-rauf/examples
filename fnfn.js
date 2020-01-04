

// global.__globalFunVar = 1;

// outerFunction = (param1) => {
//     let outerVar = 1;
//     innerFunction = (param2) => {
//         let innerVar = 2;
//         setTimeout(() => {
//             console.log(global);
//         }, 1000);
//     }
//     return innerFunction;
// }
// outerFunction()();

// console.log('a');

// setTimeout(() => {
//     console.log(this);
//     //console.log('c');
// }, 1000);

// console.log('d');

// function fn() {
//     return setTimeout(() => {
//         console.log(1000);
//     }, 2000);
// }
// console.log(fn());

// function fn() {
//     console.log(this.value);
// }

let o = {
    value: "fn-1",
    fn: () => {
        console.log(this.value);
    }
}
let o2 = {
    value: "fn-2",
    fn: () => {
        console.log(this.value);
    }
}
let o3 = o.fn.bind(o2);
console.log(o3);
o3();
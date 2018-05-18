/**
 * Synopsis: unboundFn.bind(anyObjectThatCanContainThatFn):
 * The bind() method creates a new function that, when called, has its this keyword set to the provided value
 */

global.thisFunc = function (args) {
    let self = this;
    return "This is Global Scope: " + args;
}

function someFunc(args) {
    return this.thisFunc(args);
}

var p = function () {
    return {
        prop1: "From Function 1",
        thisFunc: function (arg) {
            return this.prop1 + " " + arg;
        }
    }
}();

var p2 = function () {
    return {
        prop1: "From Function 2",
        thisFunc: function (arg) {
            return this.prop1 + " " + arg;
        }
    }
}();

var bound = someFunc.bind(p, 10);       // Will point to p.thisFunc, passing 10 as argument
console.log("bound", bound(100));       // 100 would be ignored !! It will only be used if argument value '10' is omitted above statement

var bound = someFunc.bind(p2, 20);      // Will point to p2.thisFunc, passing 20 as argument
console.log("bound", bound(200));       // 200 would be ignored !! It will only be used if argument value '20' is omitted above statement

var bound = someFunc.bind(null, 30);      // Will point to p2.thisFunc, passing 20 as argument
console.log("bound", bound(200));       // 200 would be ignored !! It will only be used if argument value '20' is omitted above statement

console.log(someFunc.call(undefined, 100));     // This will eventually call 'global.thisFunc' via standalone 'someFunc', only if strict mode is off

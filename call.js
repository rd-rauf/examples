/**
 * Synopsis: Fn.call(object, params...):
 * Explicitly specify what 'this' should reference within the calling function
 */

global.thisFunc = function (args) {
    let self = this;
    return "This is Global Scope: " + args;
}

function someFunc(arg) {
    return this.thisFunc(arg);
}

var p = function () {
    return {
        prop1: "From Function 1",
        thisFunc: function (p1) {
            return this.prop1 + " : " + p1;
        }
    }
}();

var p2 = function () {
    return {
        prop1: "From Function 2",
        thisFunc: function (p2) {
            return this.prop1 + " : " + p2;
        }
    }
}();

console.log("Call: ");
console.log(someFunc.call(p, 10));
console.log(someFunc.call(p2, 20));

console.log("Apply: ");
console.log(someFunc.apply(p, [10]));
console.log(someFunc.apply(p2, [20]));

console.log(someFunc.call(undefined, 100));     // This will eventually call 'global.thisFunc' via standalone 'someFunc', only if strict mode is off

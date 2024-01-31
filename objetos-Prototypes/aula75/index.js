// new Object
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};

const objB = {
    chaveB: 'B'
    // __proto__: objA
};
const objC = new Object()
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA);

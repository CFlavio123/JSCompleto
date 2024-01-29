// Declaração de função (function hoisting)
falaOi();
function falaOi(){
    console.log('Oie');
}

// first-class objects (objetos de primeira classe)
// funcion expression
const souUmDado = function(){
    console.log('Sou um dado.');
};
souUmDado();

// Arrow function
const funcaoArrow = () =>{
    console.log('Sou uma arrow function');
};
funcaoArrow();

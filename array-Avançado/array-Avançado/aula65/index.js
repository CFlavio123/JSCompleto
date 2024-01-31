// Filter -> sempre retorna um array, com a mesma quantidade de elementos ou menos.
// Filter, map, reduce

//Retorne os numeros maiores que 10
//               0   1   2  3  4  5  6  7  8   9  10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor) {
//     return( valor > 10); 
// }

const numerosFiltrados = numeros.filter(valor => valor > 10);
// console.log(numerosFiltrados);




// retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo nome termina com a
const pessoas = [
    { nome : 'Luiz', idade : 62},
    { nome : 'Maria', idade : 23},
    { nome : 'Eduardo', idade : 55},
    { nome : 'Leticia', idade : 19},
    { nome : 'Rosana', idade : 32},
    { nome : 'Wallace', idade : 47},
];
const pessoasComNmoeGrande = pessoas.filter(obj => obj.nome.length >=5);
const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
});
console.log(pessoasComNmoeGrande);

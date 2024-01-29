// for in -> lê os indices ou chaves do objeto

const frutas = [ 'Pera', 'Maçã', 'Uva'];
const pessoas = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
};



for (let i in pessoas){
    console.log(pessoas.nome);
}
// for (let i=0;i<frutas.length;i++){
//     console.log(frutas[i]);
// }


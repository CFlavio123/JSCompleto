/*
Carlos Flávio Araújo tem 23 anos, pesa 67 kg
tem 1.65 de altura e seu IMC é de 24.609733700642796
Carlos Flávio nasceu em 2001
*/
const nome = 'Carlos Flávio';
const sobrenome = 'Araújo'
const idade = 23;
const peso = 67;
const alturaEmM = 1.65;
let imc; //peso / (altura * altura)
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
console.log(imc); 

anoNascimento = 2024 - idade;
console.log(anoNascimento);

//template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso}kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
/*
 Javascript é baseado em protótipos para passar propriedadaes e metodos de um objeto para outro.

 Definição de protótipo
 protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servido de modelo ou molde para futuras produções.

 todos os objetos tem a referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
 */

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
}

// Pessoa.prototype.estouAqui = 'HAHAHAHA';
Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new Pessoa('Luiz', 'O.'); //<- Pessoa = função construtora
const pessoa2 = new Pessoa('Maria', 'O.'); //<- Pessoa = função construtora
const data = new Date(); // <-- Date = função construtora

console.dir(pessoa1);
console.dir(data);

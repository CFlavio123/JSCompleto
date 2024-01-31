// definePropoerty = defineProperties
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preço = preço; 


    Object.defineProperty(this, 'estoque', {
        enumerable:true, // mostra a chave
        // value: estoque, //valor
        // writable: true, // pode alterar
        configurable: true, // configurável
        get: function(){
            return estoque;
        },
        set: function(valor) {
            
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
// função construtora

// function criaCalculadora() {
function Calculadora() {
  this.display = document.querySelector('.display');

  this.capturaCliques = () => {
    document.addEventListener('click', e => {
      const el = event.target;
      if (el.classList.contains('btn-num'))
    });
  }};


// const calculadora = criaCalculadora();
const calculadora = new Calculadora();
calculadora.inicia();

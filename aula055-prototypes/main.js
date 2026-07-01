// PROTOTYPES

// SEM PROTOTYPES
//function Pessoa(nome, sobrenome) {
    //this.nome = nome;
  //  this.sobrenome = sobrenome;
  //  this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
//}

//const pessoa1 = new Pessoa("João", "Silva");
//const pessoa2 = new Pessoa("Maria", "Santos");
//console.log(pessoa1.nomeCompleto());
//console.log(pessoa2.nomeCompleto());

// COM PROTOTYPES
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

let p1 = new Pessoa("João", "Silva");
let p2 = new Pessoa("Maria", "Santos");

console.log(p1.nomeCompleto());
console.log(p2.nomeCompleto());
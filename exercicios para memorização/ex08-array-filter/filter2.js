const pessoas = [
    {nome: 'Daniel', idade: 17},
    {nome: 'Ana', idade: 22},
    {nome: 'Carlos', idade: 15}
];

const PessoaVelha = pessoas.filter(maior => maior.idade >= 18)
console.log(PessoaVelha)
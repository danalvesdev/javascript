let pessoa = {
    nome: 'Daniel',
    idade: 17,
    cidade: 'Custódia'
};

console.log(`Olá, meu nome é ${pessoa.nome}, e moro na cidade de ${pessoa.cidade}.`)

function pessoas (nome, idade, cidade) {
    return{
        nome: nome,
        idade: idade, 
        cidade: cidade
    }
}

let pessoa1 = pessoas('Bella', 12, 'Custódia');
console.log(`Olá,meu nome é ${pessoa1.nome}, tenho ${pessoa1.idade} anos e moro na cidade de ${pessoa1.cidade}.`)
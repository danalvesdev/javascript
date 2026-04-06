const pessoa = {
    nome: "Daniel",
    idade: 17,
    endereco: {
        lugar: "Samambaia",
        cidade: "Custódia"
    }
};
const {nome , idade, endereco} = pessoa
console.log(nome, idade) 
console.log("Tirando o valor do objeto endereço")
const{endereco:{lugar, cidade}} = pessoa
console.log(lugar , cidade)
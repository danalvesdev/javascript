//Return
// Retorna um valor
//Termina a função
function soma(a, b){
    return a + b;
} 
 
console.log(soma(3, 10))

function criaPessoa(nome, sobrenome){
    return {nome , sobrenome};
}

const pessoa1 = criaPessoa('Daniel', 'Alves')
console.log(pessoa1)

function CriaMultiplicador(multiplicador){
    //Multiplicador 
    return function(n){
        return n * multiplicador
    };
}

const duplica = CriaMultiplicador(2);
const triplica = CriaMultiplicador(3);
const quadriplica = CriaMultiplicador(4);

console.log(duplica(10));
console.log(triplica(6));
console.log(quadriplica(2));
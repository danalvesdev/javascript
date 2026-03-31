function minhaFuncao(nome){
    console.log(`Olá ${nome},Bem-vindo(a) à aula de funções!`);
}

minhaFuncao("Daniel"); // Chama a função para executar o código dentro dela
minhaFuncao("Mayara"); // Chama a função para executar o código dentro dela 

function soma(a , b){ 
    const resultado = a * b
    return resultado
}

soma(2, 3)
console.log(soma (10, 3)) // Imprime o resultado da função soma no console

const raiz = function(n) {
    return n ** 0.5
};
console.log(raiz(16)) // Imprime o resultado da função raiz no console
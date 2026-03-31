//              0        1        2        3
const alunos = ['joao', 'maria', 'pedro', 'ana'];
//            4
alunos.push('Daniel') //adiciona um elemento no final do array
console.log(alunos);

alunos.pop(); //remove o ultimo elemento do array

alunos.unshift('Daniel'); //adiciona um elemento no inicio do array
alunos.unshift('Maria Clara');

alunos.shift(); //remove o primeiro elemento do array
console.log(alunos.slice(0, 2)); //retorna os elementos do array a partir do indice 0 até o indice 2 (sem incluir o indice 2)
console.log(alunos);
//              - 5       - 4     - 3   - 2     - 1
//               0        1       2        3       4
const nomes =['Maria', 'João', 'Carlos', 'Ana', 'Pedro'];

const removidos = nomes.splice(1, 4)
console.log(nomes);
console.log(`Foram removidos da lista os seguintes nomes: ${removidos}`)
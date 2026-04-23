function pessoa(nome, sobrenome, altura,peso){
    return {
        nome,
        sobrenome,
        fala:(assunto) {
            return `${this.peso} está ${assunto}`;
        }
    }
}

const p1 = pessoa('Dan', 'Alves', 1.80, 86);
console.log(p1.imc());
console.log(p1.fala('falando com voce'))
const p2 = pessoa('Maria', 'Silva', 1.65, 60);
console.log(p2.fala('falando com voce'));
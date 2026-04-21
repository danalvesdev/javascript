function pessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        fala:(assunto) {
            return `${this.peso} está ${assunto}`;
        }
    }
}

const p1 = pessoa('Dan', 'Alves')
console.log(p1.fala('falando com voce'))
function pessoa(nome, sobrenome, altura,peso){
    return {
        nome,
        sobrenome,
        fala (assunto) {
            return `${this.nome} ${this.sobrenome} está ${assunto}`;
        },
        altura: altura, 
        peso: peso,
        imc() {
            const gordura = this.peso / (this.altura ** 2)
            return gordura.toFixed(2)
        }
    }
}

const p1 = pessoa('Dan', 'Alves', 1.80, 86);
console.log(p1.imc());
console.log(p1.fala('falando com voce'))
const p2 = pessoa('Maria', 'Silva', 1.65, 60);
console.log(p2.fala('falando com voce'));
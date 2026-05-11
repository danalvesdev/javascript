// funções construtoras -> objetos
// funções fabricas -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    //Privados
    const ID = 12345
    const metodoInterno = function(){
        this.nome = ID
        if(this.nome === ID){
            console.log("Seja bem vindo")
        }else{
            console.log("Tente novamente!")
        }
    }

    //Atributos públicos
    this.nome = nome
    this.sobrenome = sobrenome
}

let p = new Pessoa('DAN and RENATA')

console.log(p.nome)
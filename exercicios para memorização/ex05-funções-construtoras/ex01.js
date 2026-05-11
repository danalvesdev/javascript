function Animal(nome,som){
    this.nome = nome
    this.som = som

    this.Falar = function(){
        console.log(`${this.nome} faz ${this.som}`)
    }
}

let A1 = new Animal("Gato","Miau")
let A2 = new Animal("Boi", "Muu")

A1.Falar()
A2.Falar()
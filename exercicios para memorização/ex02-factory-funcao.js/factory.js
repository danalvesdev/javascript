function criarCarro(Marca, Modelo, Ano){
    return{
        Marca,
        Modelo,
        Ano,
        detalhes(){
            return `Marca:${this.Marca} \nModelo:${this.Modelo} \nAno:${this.Ano}`;
        }
    }
}

let carro1 = criarCarro("Toyota","Hilux",2026)
console.log(carro1.detalhes());
console.log("----- NOVO PEDIDO -----")
let carro2 = criarCarro("Fiat", "Uno", 2000)
console.log(carro2.detalhes())
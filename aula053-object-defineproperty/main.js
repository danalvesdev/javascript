// Defineproperty - defineProperties
function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque' ,{
        enumerable: true, // mostra a chave 
        value: estoque, // valor
        writable: false, // pode alterar 
        configurable: false // Pode apagar
    })

    Object.defineProperties(this, {
        nome: {
            value: 'Mouse'
        },

        preco: {
            value: 40
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 333
console.log(p1)
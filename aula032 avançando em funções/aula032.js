// Declaração de função (Function hoisting)

falaOi()

function falaOi(){
    console.log('Oie')
}

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function(){
    console.log('Sou um dado');
}
souUmDado()

// Arrow function
let somar = (a, b) => {
    return 2 + 10
}

console.log(somar())

// Dentro de um objeto

const obj = {
    falar: function(){
        console.log('Estou falando..')
    }
};

obj.falar();
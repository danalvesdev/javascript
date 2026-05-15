function Somar(precos){
    if(precos.length === 0) return 0;

    return precos[0] + Somar(precos.slice(1))
}

console.log(Somar([10, 20, 30, 40]))
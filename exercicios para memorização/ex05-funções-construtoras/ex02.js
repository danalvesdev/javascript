function Funcionario(nome,cargo,salario){
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;

    this.MostrarInfo = function(){
        console.log(`Meu nome é ${this.nome},trabalho sendo ${this.cargo},e ganho um salário de ${this.salario}.`)
    };

    this.Aumento = function(porcentagem){
        this.salario = this.salario + (this.salario * porcentagem) / 100
        console.log(`Vamos lhe dar um aumento de ${porcentagem}%, seu salario agora é ${this.salario}`)
    }

    this.Verificar = function(){
        if(this.salario > 3000){
            console.log(`${this.nome} seu salário está acima da média!`)
        }else{
            console.log("Seu salário não está acima da média.")
        }
    }
}

let f1 = new Funcionario("Daniel", "Programador", 1200)
let f2 = new Funcionario("Bella", "Veterinaria", 3200)
f1.MostrarInfo()
f1.Aumento(10)
f1.Verificar()
console.log("\n")
f2.MostrarInfo()
f2.Aumento(20)
f2.Verificar()
function calcular(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let res = document.getElementById("resultado");   
     
    let imc = peso / (altura * altura).toFixed(2);
    if(imc < 18.5){
        res.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)`;
    }else{
        if(imc >= 18.5 && imc < 25){
            res.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Peso normal)`;

        }else if (imc >= 25 && imc < 30){
            res.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Sobrepeso)`;

        }else if(imc >= 30 && imc < 35){
            res.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau I)`;

        }else if(imc >= 35 && imc < 40){
            res.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau II)`;

        }else{
            res.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau III)`;
        }
    }
};
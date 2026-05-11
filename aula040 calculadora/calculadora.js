function CriarCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia() {
           this.cliqueBotoes();
        },


        ClearDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        Calcular(){
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if(!conta){
                    alert('Conta inválida');
                    return;
                }
                this.display.value = String(conta); 
            }catch (e) {               
                alert('Conta inválida');
                return;
            }
        }, 

        cliqueBotoes(){
            // this e a calculadora
            document.addEventListener('click', evento => {
                const elemento = evento.target;
                if (elemento.classList.contains('btn-num')) {
                    this.btnParaDisplay(elemento.innerText);
                }

                if(elemento.classList.contains('btn-clear')){
                    this.ClearDisplay();
                }

                if(elemento.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(elemento.classList.contains('btn-igual')){
                    this.Calcular();
                }
            });
        },
        btnParaDisplay(valor){
           this.display.value += valor;
        }
    };
}

const calculadora = CriarCalculadora();
calculadora.inicia()
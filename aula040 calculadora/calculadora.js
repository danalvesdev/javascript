function CriarCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
           btnParaDisplay();
        },

        cliqueBotoes(){
            document.addEventListener('click', function(evento) {
                const elemento = evento.target;
                if (elemento.classList.contains('btn-num')) {
                    this.btnParaDisplay();
                }
            });
        }
        btnParaDisplay(){
            const btnNum = document.querySelectorAll('.btn-num');
        }
    };
}

const calculadora = CriarCalculadora();
calculadora.inicia()
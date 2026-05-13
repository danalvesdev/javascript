function Calculadora() {
    this.display = document.querySelector(".display")
     this.inicia = () =>{
        this.capturaCliques();
        this.capturaEnter();
    }

    this.capturaEnter = () =>{
        this.display.addEventListener('keypress', e =>{
            if(e.keyCode === 13){
                this.realizaConta()
            };
        })
    }
    this.capturaCliques = () =>{
        document.addEventListener('click', event =>{
            const el = event.target;
            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear(el);
            if(el.classList.contains('btn-del')) this.deletar(el);
            if(el.classList.contains('btn-igual')) this.realizaConta(el);
        });
    }

    this.addNumDisplay = (el) =>{
        this.display.value += el.innerText;
        this.display.focus();
    };

    this.clear = (el) => {
        this.display.value = ''
    };

    this.deletar = (el) =>{
        this.display.value = this.display.value.slice(0, -1)
    };

    this.realizaConta = (el) => {
        try{
            let conta = eval(this.display.value);
            if(!conta){
                alert("Conta inválida")
                return
            }

            this.display.value = conta;
        }catch(e){
            alert("Conta inválida")
        }
    }
}

const calculadora = new Calculadora();
calculadora.inicia()
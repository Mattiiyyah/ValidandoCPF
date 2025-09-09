function ValidandoCpf() {
    return {
        cpf: document.querySelector('#cpf'),

        iniciar() {
            this.clicarBotao();
        },

        valorCpf() {
            const valorCpf =  this.cpf.value;
            const valorLimpo = valorCpf.replace(/\D+/g, '');

            return valorLimpo;
        },

        validandoCpf() {
          const valorCpf = this.valorCpf();
          const sequencia = this.sequencia();

          if(!Number(valorCpf)) return alert('Digite os valores em números');
          if(typeof valorCpf === 'undefined') return false;
          if(valorCpf.length !== 11) return false;
          if(sequencia) return false;

          const cpfParcial = valorCpf.slice(0, -2);
          const digito1 = this.criaDigito(cpfParcial);
          const digito2 = this.criaDigito(cpfParcial + digito1);

           const novoCpf = cpfParcial + digito1 + digito2;
           return novoCpf === valorCpf;

        },

        criaDigito(cpfparcial) {
           const cpfArray = Array.from(cpfparcial);
    
            let regressivo = cpfArray.length + 1;
            const total = cpfArray.reduce((ac, val) => {
                ac += (regressivo * Number(val));
                regressivo--;
                return ac;
            }, 0);

            const digito = 11 - (total % 11);
            return digito > 9 ? '0' : String(digito);
        },

        sequencia() {
            const valorCpf = this.valorCpf();

            if (!valorCpf) return false; 

            const sequencia = valorCpf[0].repeat(valorCpf.length);
            return sequencia === valorCpf;
        },
        
        clicarBotao() {
            document.addEventListener('click', (evento) => {
                const elemento = evento.target;

                if(elemento.classList.contains('enviar')) {
                   const cpfValidado = this.validandoCpf();
                   const divResultado = document.querySelector("#resultado");
                   
                   if(cpfValidado) {
                     divResultado.innerHTML = `
                        <div class="alert alert-success mt-3" role="alert">
                            <strong>Ótimo!</strong> Seu CPF é válido.
                        </div>

                         <img class="img-fluid d-block mx-auto mt-2" style="max-width: 150px;" alt="CPF Válido" src="assets/img/valido.png">
                      `;
                   } else {
                    divResultado.innerHTML = `
                        <div class="alert alert-danger mt-3" role="alert">
                            <strong>Atenção!</strong> Seu CPF é inválido.
                        </div>

                         <img class="img-fluid d-block mx-auto mt-2" style="max-width: 150px;" alt="CPF Inválido" src="assets/img/invalido.png">
                    `;
                   }
                }
            });
        },

    }
};

ValidandoCpf();
const validadorCpf = ValidandoCpf();
validadorCpf.iniciar();
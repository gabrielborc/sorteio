
class ParticipanteView {

    constructor() {
        this.tbody = document.querySelector('table tbody');
        this.form = document.querySelector('form');
        this.sortiado = document.querySelector('#sortiado');
        this.nomeSortiado = document.querySelector('#sortiado .nome-sortiado');
    }

    atualizaParticipantes(participantes) {
        this.esvaziaParticipantes();
        
        participantes.map((participante) => {
            let tr = document.createElement('tr');
            let td = document.createElement('td');

            td.innerHTML = participante.nome;
            tr.appendChild(td);
            this.tbody.appendChild(tr);  
        });

        this.limpaFormulario();
    }

    mostraSorteado(participante) {
        this.efeitoDeEsconderSorteado();
        this.efeitoDeMostrarSorteado();

        this.nomeSortiado.innerHTML = participante.nome;
    }

    esvaziaParticipantes() {
        this.tbody.innerHTML = '';
    }

    limpaFormulario() {
        this.form.reset();
    }

    efeitoDeMostrarSorteado() {
        setTimeout(() => {
            this.sortiado.style.width = 'initial';
            this.sortiado.style.height = 'initial';
            this.sortiado.style.opacity = '1';
            this.sortiado.style.visibility = 'visible';
        }, 300);
    }

    efeitoDeEsconderSorteado() {
        this.sortiado.style.width = '0px';
        this.sortiado.style.height = '0px';
        this.sortiado.style.opacity = '0';
        this.sortiado.style.visibility = 'hidden';
    }

}
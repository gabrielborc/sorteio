
class ParticipanteView {

    constructor() {
        this.tbody = document.querySelector('table tbody');
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
    }

    esvaziaParticipantes() {
        this.tbody.innerHTML = '';
    }

}
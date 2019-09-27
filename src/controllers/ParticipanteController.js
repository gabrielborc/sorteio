class ParticipanteController {

    constructor() {
        this._participantes = new Participantes();
        this._participanteView = new ParticipanteView();
    }

    adiciona(nome) {
        let participante = new Participante(nome);
        this._participantes.adiciona(participante);
        this._participanteView.atualizaParticipantes(this._participantes.paraArray());
    }

}
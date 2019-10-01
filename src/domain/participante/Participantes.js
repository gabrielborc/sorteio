class Participantes {

    constructor() {
        this._participantes = [];
        Object.freeze(this);
    }

    adiciona(participante) {
        this._participantes.push(participante);
    }

    remove(participante) {
        let index = this._participantes.indexOf(participante.nome);

        if (index >= 0) {
            this._participantes.splice(index, 1);
        }
    }

    soteia() {
        let indiceSorteado = Math.trunc(Math.random() * this._participantes.length);
        let sorteado = this._participantes[indiceSorteado];

        this._participantes.splice(indiceSorteado, 1);

        return sorteado;
    }

    paraArray() {
        return [].concat(this._participantes);
    }

}
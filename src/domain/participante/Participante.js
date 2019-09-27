class Participante {

    constructor(nome) {
        this._nome = nome;
        Object.freeze(this);
    }

    get nome() {
        return this._nome;
    }

}
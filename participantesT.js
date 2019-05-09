export default class ParticipantesT {
    constructor(participantes){
        this._nombre = participantes.nombre;
        this._email = participantes.email;
        this._fechaN = participantes.fechaN;
        this._nombreT = participantes.nombreT;

    }
    get nombre() {
        return this._nombre;
    }

    get email() {
        return this._email;
    }

    get fechaN() {
        return this._fechaN;
    }

    get nombreT() {
        return this._nombreT;
    }
}
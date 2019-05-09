export default class ParticipantesT {
    constructor(participantes){
        this._nombreParticipante = participantes.nombreParticipante;
        this._email = participantes.email;
        this._fechaN = participantes.fechaN;
        this._nombreT = participantes.nombreT;

    }
    get nombreParticipante() {
        return this._nombreParticipante;
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
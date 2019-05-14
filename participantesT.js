export default class ParticipantesT {
    constructor(participantes){
        this._nombreP = participantes.nombreP;
        this._email = participantes.email;
        this._fechaN = participantes.fechaN;
        this._nombreT = participantes.nombreT;

    }
    get nombreP() {
        return this._nombreP;
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
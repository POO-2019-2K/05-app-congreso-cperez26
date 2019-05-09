import ParticipantesT from "./participantesT.js";
export default class Participantes {
    constructor(tablaP) {
        this._tablaP = tablaP;
        this._participantes = [];
        this._initTablesP();
    }

    _initTablesP() {
        let lsParticipantes = JSON.parse(localStorage.getItem("participantes"));
        if (lsParticipantes === null) {
            return;
        }
        lsParticipantes.forEach((d, index) => {
            this._showInTable2(new ParticipantesT)
        });
    }
}
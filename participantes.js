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
    _showInTableP(participante) {
        let row = this._tablaPinsertRow(-1);

        let cellNombreP = row.insertCell(0);
        let cellEmail = row.insertCell(1);
        let cellFechaN = row.insertCell(2);
        let cellNombreT = row.insertCell(3);

        cellNombreP.innerHTML = participante.cellNombreP;
        cellEmail.innerHTML = participante.email;
        cellFechaN.innerHTML = participante.fechaN;
        cellNombreT.innerHTML = participante.nombreT;

        let objParticipante = {
            cellNombreP: participante.cellNombreP,
            email: participante.email,
            fechaN: participante.fechaN,
            nombreT: participante.nombreT,
        }
        this._participante.push(objParticipante);
    }
    addParticipantes(participante) {
        this._showInTableP(participante);
        localStorage.setItem("participantes", JSON.stringify(this._participantes));
        localStorage.setItem("participantes", JSON.stringify(this._participantes));
    }
}
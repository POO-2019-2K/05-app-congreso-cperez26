import Taller from "./taller.js"
export default class ListaTalleres {
    constructor(tabla) {
        this._tabla = tabla;
        this._talleres = [];
        this._initTables();
    }

    _initTables() {
        let lsTalleres = JSON.parse(localStorage.getItem("talleres"));
        if (lsTalleres === null) {
            return;
        }
        lsTalleres.forEach((e, index) => {
            this._showInTable(new Taller(e));
        });
    }

    _showInTable(taller) {
        let row = this._tabla.insertRow(-1);

        let cellNombre = row.insertCell(0);
        let cellFechaInicio = row.insertCell(1);
        let cellFechaFinal = row.insertCell(2);
        let cellHoras = row.insertCell(3);
        let cellLugares = row.insertCell(4);

        cellNombre.innerHTML = taller.nombre;
        cellFechaInicio.innerHTML = taller.fechaInicio;
        cellFechaFinal.innerHTML = taller.fechaFinal;
        cellHoras.innerHTML = taller.horas;
        cellLugares.innerHTML = taller.lugares;

        let objTaller = {
            nombre: taller.nombre,
            fechaInicio: taller.fechaInicio,
            fechaFinal: taller.fechaFinal,
            horas: taller.horas,
            lugares: taller.lugares
        }
        this._talleres.push(objTaller);
    }
    addTaller(taller) {
        this._showInTable(taller);
        localStorage.setItem("talleres", JSON.stringify(this._talleres));
        localStorage.setItem("talleres", JSON.stringify(this._talleres));
    }
}
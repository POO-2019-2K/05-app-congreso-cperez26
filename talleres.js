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
}
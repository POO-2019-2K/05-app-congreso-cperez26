export default class Talleres {
    constructor(taller){
        this._nombre = taller.nombre;
        this._fechaInicio = taller.fechaInicio;
        this._fechaFinal = taller.fechaFinal;
        this._horas = taller.horas;
        this._lugares = taller.lugares;
    }

    get nombre() {
        return this._nombre;
    }

    get fechaInicio() {
        return this._fechaInicio;
    }

    get fechaFinal() {
        return this._fechaFinal;
    }

    get horas() {
        return this._horas;
    }
    get lugares() {
        return this._lugares;
    }


}
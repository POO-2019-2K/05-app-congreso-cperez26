import Talleres from "./taller.js";
import ListaTalleres from "./talleres.js"
import Participantes from "./participantes.js";
import ParticipantesT from "./participantesT.js";
class Main {
    constructor() {
        let tabla = new ListaTalleres(document.querySelector("#tablaT"), document.querySelector("#info"));

        document.querySelector("#btn1").addEventListener("click", () => {

            let nombre = document.querySelector("#nombreT").value;
            let fechaInicio = document.querySelector("#fechaI").value;
            let fechaFinal = document.querySelector("#fechaF").value;
            let horas = document.querySelector("#horas").value;
            let lugares = document.querySelector("#lugares").value;


            let objTaller = {
                nombre: nombre,
                fechaInicio: fechaInicio,
                fechaFinal: fechaFinal,
                horas: horas,
                lugares: lugares
            }

            let taller = new Talleres(objTaller);

            tabla.addTaller(taller);


        })
    }

}
class Main1 {
    constructor() {
        let tabla1 = new ParticipantesT(document.querySelector("#listado"));
        document.querySelector("#btn2").addEventListener("click", () => {

            let nombreParticipante = document.querySelector("#nombre").value;
            let email = document.querySelector("#email").value;
            let fachaN = document.querySelector("#fechaN").value;
            let nombreT = document.querySelector("#nombreT").value;


            let objParticipante = {
                nombreParticipante: nombreParticipante,
                email: email,
                fachaN: fachaN,
                nombreT: nombreT
            }

            let participante = new Participantes(objParticipante);

            tabla1.addParticipantes(participante);

        })
    }
}

let m = new Main();
let m2 = new Main1();
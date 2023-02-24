import {Validacion} from "./Validacion.js";

/*Instanciar el objeto*/

const validacion = new Validacion(); 
const formulario = document.getElementById('form');
const btn = document.getElementById("btnSend");

//Objeto de validación
const formValid ={
    nombre: false,
    apellidos: true,
    mail: false,
    politica: false
}

//Validación
formulario.addEventListener("change", (e)=>{
    const inputId = e.target.id;
    const miValue = e.target.value;
    const miClass = e.target.classList;
    const validClass = ()=>{
        miClass.add("is-valid");
        miClass.remove("is-invalid");
    };
    const inValidClass = ()=>{
        miClass.add("is-invalid");
        miClass.remove("is-valid");
    };

    switch(inputId){/*evalúa una expresión, comparando el valor de esa expresión con una instancia case , y ejecuta declaraciones asociadas a ese case , así como las declaraciones en los case que siguen.*/
        case "names":/*es una instancia del switch que será evaluada*/
            formValid.nombres = validacion.validNames(miValue);
            formValid.nombres ? validClass() : inValidClass();
            console.log(Object.values(formValid));
            break;
        case "mail":
            formValid.mail = validacion.validMail(miValue);
            formValid.mail ? validClass() : inValidClass();
            console.log(Object.values(formValid));
            ;
        case "checkPolitica":
            if (e.target.checked) formValid.politica = true;
            else formValid.politica = false;
            console.log(Object.values(formValid));
            break;
    }
});

//Envío del formulario
btn.addEventListener("click", (e)=>{/*Registra un evento a un objeto en específico. El Objeto especifico (en-US) puede ser un simple elemento en un archivo, el mismo documento , una ventana o un XMLHttpRequest.*/
    e.preventDefault();/*Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo. */
    if (validacion.validarForm(formValid)=== -1){/**/
        alert("Enviando Formulario");/*muestra un diálogo de alerta con un mensaje opcional, y aguardará hasta que el usuario cierre la ventana de diálogo.*/
        let datos = new FormData(document.getElementById('form'));/*forData: proporciona una manera sencilla de construir un conjunto de parejas clave/valor que representan los campos de un formulario y sus valores, que pueden ser enviados fácilmente con el método XMLHttpRequest.send() (en-US).*/
        console.log(datos);
    }
});
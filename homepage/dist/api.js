'use strict';

fetch('https://jsonplaceholder.typicode.com/todos')/*
La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. */
.then( (response) => response.json())/*
1.El método then devuelve una Promise que permite encadenar métodos.
2.el response representa la respuesta a una solicitud. */
.then((json)=>{
    for(let object of json){
/*let: declara una variable local de bloque y, opcionalmente, la inicializa con un valor. */      
  console.log(object);
    }
})
.catch((error)=>console.error(error))
/*catch: programa una función para ser llamada cuando la promesa es rechazada. Devuelve inmediatamente un objeto Promise equivalente, lo que permite encadenar llamadas a otros métodos de promesas. Es un atajo para Promise.prototype.then(undefined, onRejected). */
.finally(console.info("Ha finalizado la petición"))
/*finally: programa una función que se llamará cuando la promesa se resuelva (se cumpla o se rechace). Devuelve inmediatamente un objeto Promise equivalente, lo que permite encadenar llamadas a otros métodos de promesas. */
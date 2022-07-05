//ACTUALIZANDO DATOS DE UNA COLECCION
//Para actualizar los datos de una coleccion debemos usar el método update() de Firebase.
//Debemos indicar --> la colección sobre la cuál vamos a modificar el documento
//                --> el documento que vamos a modificar
//                --> dentro de los parentesis update() recibe un objeto literal con la propiedad y el valor a modificar o agregar en el documento

import {db} from "../firebase/config"

actualizarDatos(){
	db.collection("nombre de la coleccion")
	//con el metodo collection indicamos la colección sobre la cual vamos a modificar un documento
	.doc(idDelDocumentoAModificar)
	//el metodo doc se utiliza para identificar el documento a modificar, dentro del parentesis ponemos el id que Firebase asigno al documento en su creacion
	.update({
		propiedad: valor
	})
	//el método update (asincronico) va a actualizar la info del documento, recibe un objeto literal donde indicamos la propiedad y el valor a modificar o agregar en el documento
	.then (() => {
		//codigo a ejecutar luego de actualizar el documento
	})
}

//Actualizando datos de un array --> arrayUnion() y arrayRemove() son dos metodos de Firebase para agregar y quitar elementos de un array dentro de una coleccion

//arrayUnion() --> permite agregar elementos a un array pero solo si aun no están presentes.
//             --> el primer paso para usar el método será importar el módulo de firebase dentro del componente

//arrayRemove() --> permite quitar un elemento existente en un array
//              --> el primer paso para usar el método será importar el módulo de firebase dentro del componente


import firebase from "firebase";

firebase.firestore.FieldValue.arrayUnion("elementoAAgregarAlArray")
firebase.firestore.FieldValue.arrayRemove("elementoAQuitarAlArray")
// arrayUnion() y arrayRemove() son metodos de firebase asociados a la base de datos de firebase. La propiedad field value chequea que el tipo de dato que vamos a modificar sea un array

//EJEMPLO --> combinando update() y arrayUnion() podemos agregar un nuevo dato al array dentro de una coleccion

import {db} from "../firebase/config"
import firebase from "firebase";

actualizarDatos(){
	db.collection("nombre de la coleccion")
	.doc(idDelDocumentoAModificar)
	.update({
		propiedad: firebase.firestore.FieldValue.arrayUnion("elementoAAgregarAlArray")
	})
	.then (() => {
		//codigo a ejecutar luego de actualizar el documento
	})
}

//Para hacer like --> debemos estar en el componente Post
//                --> touchable opacity  --> dar me gusta y deslikear, necesitamos estado booleano en base a si likeamos o no (usamos includes()).
//                --> metodo para likear (agregar usuario al array) y otro para deslikear(sacar usuario del array), el usuario debe ser el usuario logueado.
//                --> <3 con cantidad de likes (con length al array de likes)

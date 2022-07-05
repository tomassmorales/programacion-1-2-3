//Componentes con estado --> permiten incorporar eventos, pueden cambiar su contenido interno a traves de eventos externos
//Están atentos ante los eventos que lo rodean y saben reaccionar a los mismos cambiando su contenido en funcion de ellos.
//Se trabajan con una clase no con funciones (otro tipo de dato)

import React, {Component} from "react"

//Queremos traer el objeto component de react

class NombreComponente extends Component {
	render (){
		return (
		//código
		);
	}
}

export default NombreComponente;

//EVENTOS --> son manejados a traves de métodos que van a guardar la logica que realizara el componente cuando el evento suceda

//EL METODO --> contienen acciones a realizar, son métodos de nuestra clase: cosas que sabe hacer la clase
//Tienen la misma sintaxis de una funcion pero sin la palabra function
//Se escriben fuera del render

saludar (){
	alert("¡Bienvenido!")
}

//EL EVENTO --> son los mismos que en javascript, se escriben como si fuera un atributo html, se nombran usando la palabra on + nombre de evento (usando camelCase)
// Se usan llaves y palabra reservada this para asociarlo con el método a ejecutar (por que queremos que se aplique ESTA funcion de la clase)

render (){
	return (
		<h1 onClick = {()=> this.saludar()}>Título</h1> //Aplicamos un evento en un click dentro de este H1 para que al clickearlo salude
	);
}

//Cualquier componente con estado puede usar eventos y los eventos pueden modificar el estado de un componente

import React, {Component} from "react"

class NombreComponente extends Component {
	saludar (){
		alert("¡Bienvenido!")
	}
	render (){
		return (
			<div onMouseOver = {() => this.saludar()}></div>
		);
	}
}

export default NombreComponente;

//Si el evento necesita parametros invocamos al metodo de la siguiente manera

import React, {Component} from "react"

class NombreComponente extends Component {
	saludar (nombre){
		alert("¡Bienvenido!" + nombre)
	}
	render (){
		return (
			<div onMouseOver = {(nombre) => this.saludar(nombre)}>Persona</div>
		);
	}
}

export default NombreComponente;

//STATE Y SETSTATE
//Para que un componente pueda definir su estado inicial, modificarlo y tambien manejar props debemos tener en cuenta:
//1-El metodo constructor
//2-Definir state --> el estado es una caja donde se guarda un tipo de dato que vamos a usar en el componente
//3-Como pasar props
//4-El método setState() para modificar el estado inicial --> cambia los datos del state

//CONSTRUCTOR --> funcion que contiene la informacion del estado inicial de un componente y administra las props

//recibimos las props en el constructor y en super()
constructor(props) {
	super(props);
	//creamos el estado inicial del componente, es un objeto literal que puede manejar varias propiedades
	this.state = {
		valor:0,
		valor2: props.value
	}
}

//setState permite actualizar la informacion del objeto literal state de un componente,
//cuando el state se modifica el componente se vuelve a renderizar (solo el componente)

//Usamos el setState dentro de un método siempre que queramos actualizar el estado de un componente
//El estado se mantiene con la pagina cargada si la recargamos se reinicia
incrementar () {
	this.setState(
		{
			valor: this.sate.valor + 1 //hacemos que el valor del estado aumente en 1 cuando se llame a este metodo
		}
	)
}

//Ejecucion del metodo

render (){
	return (
		<button onClick = {() => this.incrementar()}>+</button> //el click en este boton va a modificar el estado del componente con el metodo incrementar
	);
}

//TODO JUNTO

import React, {Component} from "react"

class NombreComponente extends Component {
	constructor(props) {
		super(props);
		this.state = {
			valor:0,
			valor2: props.value
		}
	}
	incrementar () {
		this.setState(
			{
				valor: this.sate.valor + 1
			}
		)
	}
	saludar (nombre){
		alert("¡Bienvenido!" + nombre)
	}
	render (){
		return (
			<button onClick = {() => this.incrementar()}>+</button>
		);
	}}
}

export default NombreComponente;
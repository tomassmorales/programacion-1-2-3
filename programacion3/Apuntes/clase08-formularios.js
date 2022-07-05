//Formularios
//Los elementos de un formulario en HTML funcionan diferente a otros elementos del DOM,
//en react los elementos de formularios conservan naturalmente un estado interno
//Componentes controlados --> debemos hacer que react sea el unico que maneje los estados del componente 
//y controle lo que pasa con los campos del formulario, estos campos de formulario controlados por react son los componentes controlados

constuctor(props){
	super(props)
	this.state = {
		valor: ""
	}
}

evitarSubmit(event){
	event.preventDefault();
} //Detiene el envio del formulario utilizando preventDefault, pasamos el parámetro event que hace referencia a que evento va a prevenir, en este caso submit

controlarCambios(event){
	this.setState({valor:event.target.value}) // el atributo target identifica al campo objetivo del evento y la propiedad value obtiene el valor ingresado
} // obtiene el valor ingresado por el usuario en el campo input y utilizará el estado interno del componente


render(){
	return (
		 <form onSubmit = {(event)=> this.evitarSubmit(event)}> asi le evitamos el comportamiento default al formulario, el de enviar los datos
			<label>lorem</label>
			<input onChange={(event)=> this.controlarCambios(event)} value={this.state.valor}/> definimos el evento onChange que ejecuta la funcion de controlarCambios para obtener la info que el usuario ingresa en el campo
			<input type="submit" value="Submit" />
		</form>
	);
}


//setState() extendido --> setState hace cambios al estado del componente haciendo renderizar al componente, no siempre lo hace inmediatamente, es un método asincrónico
//                         por eso setState puede recibir un callback como segundo parámetro que se ejecutará una vez el estado se actualizó correctamente.
//                         Asi evitamos que los cambios no se hayan renderizado correctamente y React garantiza que se ejecutará una vez que la actualizacion del estado haya sido aplicada

controlarCambios(){
	this.setState({
		propiedad: ""
	},
	()=> console.log(event);
	)
}


import React, {Component} from "react"

class Formulario extends Component {
	constructor(props){
		super(props);
		this.state = {
			value: ""
		}
	}

	evitarDefault(event){
		console.log("Evitando envio del formulario");
		event.preventDefault();
	}

	obtenerDatos(datos){
		this.setState({
			value: datos.target.value
		},
		()=> this.props.filtrar(this.state.value)
		)
	}

	render(){
		return(
			<form onSubmit= {(event)=> this.evitarDefault(event)}>
				{/* <label>{this.state.value}</label> */}
				<input type= "text" name= "usuario" placeholder= "Ingrese Usuario" onChange = {(dato) => this.obtenerDatos(dato)} value={this.state.value}/>
				{/* <button type= "submit">Ingresar</button> */}
			</form>
		);
	}

}

export default Formulario;
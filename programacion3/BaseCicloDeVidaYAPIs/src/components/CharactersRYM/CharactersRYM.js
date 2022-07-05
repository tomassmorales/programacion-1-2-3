import React, {Component} from "react";
import CardRYM from "../CardRYM/CardRYM";
import "../CharactersRYM/CharactersRYM.css"
import Formulario from "../Formulario/Formulario"

class CharactersRYM extends Component {
	constructor(props){
		super(props);
		this.state ={
			data: "",
			page: 1,
			filtro: ""
		}
	}
	componentDidMount(){
		fetch("https://rickandmortyapi.com/api/character/?page=" + this.state.page + "&name=" + this.state.filtro)
		.then(response => response.json())
		.then(data => this.setState(
			{
			data: data.results,
			filtro: data.results,
			page: data.info.next
			}
		))
		.catch(error => console.log(error))
	}
	cargarMas(){
		fetch(this.state.page)
		.then(response => response.json())
		.then(data => this.setState(
			{ 
			filtro: this.state.data.concat(data.results),//Agrega al array actual los elementos del siguiente
			page: data.info.next
			}
		))
		.catch(error => console.log(error))
	}
	eliminar(id){
		let personajesQueQuedan = this.state.filtro.filter(personaje => personaje.id !== id)
		this.setState(
			{
				filtro: personajesQueQuedan
			}
		)
	}
	reset(){
		fetch("https://rickandmortyapi.com/api/character")
		.then(response => response.json())
		.then(data => this.setState(
			{
			filtro: data.results,
			page: data.info.next
			}
		))
		.catch(error => console.log(error))
	}
	filtrarPersonajes(textoAFiltrar){
		let personajesFiltrados = this.state.data.filter(personaje => 
			personaje.name.toLowerCase().includes(textoAFiltrar.toLowerCase())
		)
		this.setState({
			filtro: personajesFiltrados,
		})
		console.log(personajesFiltrados);
	}
	render(){
		return (
			<React.Fragment>
			<Formulario filtrar = {(textoAFiltrar)=> this.filtrarPersonajes(textoAFiltrar)}/>
			<button onClick = {() => this.reset()}>RESET</button>
			<div className = "personajes">
			{this.state.filtro === "" ? <h1>Cargando...</h1> : 
			this.state.filtro.map((personaje, idx) => <CardRYM key = {personaje.name + idx} info = {personaje} borrar= {(id)=> this.eliminar(id)}/>)}
			<button onClick = {() => this.cargarMas()}>CARGAR MÁS</button>
			</div>
			</React.Fragment>
		);
	}
}

export default CharactersRYM;
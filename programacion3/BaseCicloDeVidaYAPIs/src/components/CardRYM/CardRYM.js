import React, {Component} from "react";
import "../CardRYM/CardRYM.css"

class CardRYM extends Component {
	constructor(props){
		super(props);
		this.state ={
		}
	}
	render(){
		// console.log(this.state.data);
		return (
			<div className = "card">
				<img src = {this.props.info.image}/>
		                <h2>{this.props.info.name}</h2>
				<ul>
					<li>{this.props.info.status}</li>
					<li>{this.props.info.species}</li>
				</ul>
				<button onClick= {()=> this.props.borrar(this.props.info.id)}>BORRAR</button>
			</div>
		);
	}
}

export default CardRYM;
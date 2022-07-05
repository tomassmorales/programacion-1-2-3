
const autos = {
	lista: [
		{
			marca: "ferrari",
			modelo: "la-ferrari",
			anio: 2019,
			color: "rojo",
			describirse: function(){

				let marca = this.marca;
				let modelo = this.modelo;
				let anio = this.anio;
				let color = this.color;
				return `Este auto marca ${marca} es el modelo ${modelo} de color ${color}, salido en el año ${anio}`;
			}
		},
		{
			marca: "lamborghini",
			modelo: "murcielago",
			anio: 2010,
			color: "negro",
			describirse: function(){

				let marca = this.marca;
				let modelo = this.modelo;
				let anio = this.anio;
				let color = this.color;
				return `Este auto marca ${marca} es el modelo ${modelo} de color ${color}, salido en el año ${anio}`;
			}
		},
		{
			marca: "lamborghini",
			modelo: "aventador",
			anio: 2010,
			color: "amarillo",
			describirse: function(){

				let marca = this.marca;
				let modelo = this.modelo;
				let anio = this.anio;
				let color = this.color;
				return `Este auto marca ${marca} es el modelo ${modelo} de color ${color}, salido en el año ${anio}`;
			}
		},
		{
			marca: "bmw",
			modelo: "x5",
			anio: 2012,
			color: "gris",
			describirse: function(){

				let marca = this.marca;
				let modelo = this.modelo;
				let anio = this.anio;
				let color = this.color;
				return `Este auto marca ${marca} es el modelo ${modelo} de color ${color}, salido en el año ${anio}`;
			}
		},
		{
			marca: "ferrari",
			modelo: "enzo",
			anio: 1983,
			color: "rojo",
			describirse: function(){

				let marca = this.marca;
				let modelo = this.modelo;
				let anio = this.anio;
				let color = this.color;
				return `Este auto marca ${marca} es el modelo ${modelo} de color ${color}, salido en el año ${anio}`;
			}
		},
		{
			marca: "audi",
			modelo: "r8",
			anio: 2009,
			color: "amarillo",
			describirse: function(){

				let marca = this.marca;
				let modelo = this.modelo;
				let anio = this.anio;
				let color = this.color;
				return `Este auto marca ${marca} es el modelo ${modelo} de color ${color}, salido en el año ${anio}`;
			}
		},
		{
			marca: "lamborghini",
			modelo: "centenario",
			anio: 2010,
			color: "azul",
			describirse: function(){

				let marca = this.marca;
				let modelo = this.modelo;
				let anio = this.anio;
				let color = this.color;
				return `Este auto marca ${marca} es el modelo ${modelo} de color ${color}, salido en el año ${anio}`;
			}
		},
		{
			marca: "alpha-romeo",
			modelo: "mito",
			anio: 2010,
			color: "rojo",
			describirse: function(){

				let marca = this.marca;
				let modelo = this.modelo;
				let anio = this.anio;
				let color = this.color;
				return `Este auto marca ${marca} es el modelo ${modelo} de color ${color}, salido en el año ${anio}`;
			}
		},
		{
			marca: "bmw",
			modelo: "x6",
			anio: 2012,
			color: "blanco",
			describirse: function(){

				let marca = this.marca;
				let modelo = this.modelo;
				let anio = this.anio;
				let color = this.color;
				return `Este auto marca ${marca} es el modelo ${modelo} de color ${color}, salido en el año ${anio}`;
			}
		},
		{
			marca: "ford",
			modelo: "ranger-raptor",
			anio: 2019,
			color: "blanco",
			describirse: function(){

				let marca = this.marca;
				let modelo = this.modelo;
				let anio = this.anio;
				let color = this.color;
				return `Este auto marca ${marca} es el modelo ${modelo} de color ${color}, salido en el año ${anio}`;
			}
		}
	],
	porColor: function(color){
		let coleccionAutos = [];
		for(let i = 0; i < autos.lista.length; i++){
			let auto = autos.lista[i];
			if(auto.color == color.toLowerCase()){
				coleccionAutos.push(auto);
			}
		}

		if(coleccionAutos.length === 0){
			return `No hay autos de color ${color}`;
		}else{
			return coleccionAutos;
		}
	},
	porMarca: function(marca){
		let coleccionAutos = [];
		for(let i = 0; i < autos.lista.length; i++){
			let auto = autos.lista[i];
			if(auto.marca == marca.toLowerCase()){
				coleccionAutos.push(auto);
			}
		}

		if(coleccionAutos.length === 0){
			return `No hay autos ${marca}`;
		}else{
			return coleccionAutos;
		}
	},
	porAnio: function(anio){
		let coleccionAutos = [];
		for(let i = 0; i < autos.lista.length; i++){
			let auto = autos.lista[i];
			if(auto.anio == anio.toLowerCase()){
				coleccionAutos.push(auto);
			}
		}

		if(coleccionAutos.length === 0){
			return `No hay autos del año ${anio}`;
		}else{
			return coleccionAutos;
		}
	},
	porModelo: function(modelo){
		let coleccionAutos = [];
		for(let i = 0; i < autos.lista.length; i++){
			let auto = autos.lista[i];
			if(auto.modelo == modelo.toLowerCase()){
				coleccionAutos.push(auto);
			}
		}

		if(coleccionAutos.length === 0){
			return `No hay autos del modelo ${modelo}`;
		}else{
			return coleccionAutos;
		}
	},
}


module.exports = autos;
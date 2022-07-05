
const autos = {
	lista: [
		{
			marca: "Ferrari",
			modelo: "La Ferrari",
			anio: 2019,
			color: "Rojo",
			describirse: function(){

				let marca = this.marca;
				let modelo = this.modelo;
				let anio = this.anio;
				let color = this.color;
				return `Este auto marca ${marca} es el modelo ${modelo} de color ${color}, salido en el año ${anio}`;
			}
		},
		{
			marca: "Lamborghini",
			modelo: "Murcielago",
			anio: 2010,
			color: "Negro",
			describirse: function(){

				let marca = this.marca;
				let modelo = this.modelo;
				let anio = this.anio;
				let color = this.color;
				return `Este auto marca ${marca} es el modelo ${modelo} de color ${color}, salido en el año ${anio}`;
			}
		},
		{
			marca: "Lamborghini",
			modelo: "Aventador",
			anio: 2010,
			color: "Amarillo",
			describirse: function(){

				let marca = this.marca;
				let modelo = this.modelo;
				let anio = this.anio;
				let color = this.color;
				return `Este auto marca ${marca} es el modelo ${modelo} de color ${color}, salido en el año ${anio}`;
			}
		},
		{
			marca: "BMW",
			modelo: "X5",
			anio: 2012,
			color: "Gris",
			describirse: function(){

				let marca = this.marca;
				let modelo = this.modelo;
				let anio = this.anio;
				let color = this.color;
				return `Este auto marca ${marca} es el modelo ${modelo} de color ${color}, salido en el año ${anio}`;
			}
		},
		{
			marca: "Ferrari",
			modelo: "Enzo",
			anio: 1983,
			color: "Rojo",
			describirse: function(){

				let marca = this.marca;
				let modelo = this.modelo;
				let anio = this.anio;
				let color = this.color;
				return `Este auto marca ${marca} es el modelo ${modelo} de color ${color}, salido en el año ${anio}`;
			}
		},
		{
			marca: "Audi",
			modelo: "R8",
			anio: 2009,
			color: "Amarillo",
			describirse: function(){

				let marca = this.marca;
				let modelo = this.modelo;
				let anio = this.anio;
				let color = this.color;
				return `Este auto marca ${marca} es el modelo ${modelo} de color ${color}, salido en el año ${anio}`;
			}
		},
		{
			marca: "Lamborghini",
			modelo: "Centenario",
			anio: 2010,
			color: "Azul",
			describirse: function(){

				let marca = this.marca;
				let modelo = this.modelo;
				let anio = this.anio;
				let color = this.color;
				return `Este auto marca ${marca} es el modelo ${modelo} de color ${color}, salido en el año ${anio}`;
			}
		},
		{
			marca: "Alpha Romeo",
			modelo: "Mito",
			anio: 2010,
			color: "Rojo",
			describirse: function(){

				let marca = this.marca;
				let modelo = this.modelo;
				let anio = this.anio;
				let color = this.color;
				return `Este auto marca ${marca} es el modelo ${modelo} de color ${color}, salido en el año ${anio}`;
			}
		},
		{
			marca: "BMW",
			modelo: "X6",
			anio: 2012,
			color: "Blanco",
			describirse: function(){

				let marca = this.marca;
				let modelo = this.modelo;
				let anio = this.anio;
				let color = this.color;
				return `Este auto marca ${marca} es el modelo ${modelo} de color ${color}, salido en el año ${anio}`;
			}
		},
		{
			marca: "Ford",
			modelo: "Ranger Raptor",
			anio: 2019,
			color: "Blanco",
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
			if(auto.color == color){
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
			if(auto.marca == marca){
				coleccionAutos.push(auto);
			}
		}

		if(coleccionAutos.length === 0){
			return `No hay autos de color ${marca}`;
		}else{
			return coleccionAutos;
		}
	},
	porAnio: function(anio){
		let coleccionAutos = [];
		for(let i = 0; i < autos.lista.length; i++){
			let auto = autos.lista[i];
			if(auto.anio == anio){
				coleccionAutos.push(auto);
			}
		}

		if(coleccionAutos.length === 0){
			return `No hay autos de color ${anio}`;
		}else{
			return coleccionAutos;
		}
	},
}


module.exports = autos;
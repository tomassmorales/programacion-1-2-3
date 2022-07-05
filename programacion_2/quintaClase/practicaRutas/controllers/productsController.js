
const autos = require('../modulos/autos');

const productsController = {
	index: function(req,res){
		let listaAutos = autos.lista
		return res.render('products', {productos: listaAutos, titulo : "Catalogo"});
	},
	porMarca: function(req,res){
		let marca = req.params.marca;
		let autosMarca = autos.porMarca(marca);
	
		if (autosMarca.length > 0 && marca != "default"){
			res.render('products', {productos: autosMarca, titulo : "Por Marca"});
		}else{
			res.send(`No hay autos de la marca ${marca}, agregue la marca en la url`);
		}
	},
	porColor: function(req,res){
	
		let color = req.params.color;
		let autosColor = autos.porColor(color);

		if(autosColor.length > 0 && color != "default"){
			res.render('products', {productos: autosColor, titulo : "Por Color"});
		}else{
			res.send(`No hay autos de color ${color}, ingrese un color en la url`);
		}
	
	},
	porModeloAnio: function(req,res){

		let modelo = req.params.modelo;
		let anio = req.params.anio;
		let autosModelo = autos.porModelo(modelo);

		if(autosModelo.length > 0 && modelo != "default"){
			if(anio == undefined){
				res.render('products', {productos: autosModelo, titulo : "Por Modelo"});
			}else{
				let autosModeloAnio = [];
				for(let i = 0; i < autosModelo.length; i++){
					
					let autito = autosModelo[i];
					let anioAuto = autosModelo[i].anio;
	
					console.log(anioAuto);
	
					if (anioAuto > anio){
						autosModeloAnio.push(autito);
					}
				};
	
				if(autosModeloAnio.length == 0){
					res.send(`No hay autos que correspondan al modelo ${modelo} despues del año ${anio}`)
				}else{
					res.render('products', {productos: autosModeloAnio, titulo : "Por Modelo y Año"});
				};
			}
		}else{
			res.send(`No hay autos del modelo ${modelo}, ingrese el modelo en la url, si quiere agregar un año ingrese de esta manera /valorModelo/valorAnio`);
		}
	},
	porAnio: function(req,res){
	
		let anio = req.params.anio;
		let autosAnio = autos.porAnio(anio);
	
		if(autosAnio.length > 0 && anio != "default"){
			res.render('products', {productos: autosAnio, titulo : "Por Año"});
		}else{
			res.send(`No hay autos del año en adelante ${anio}, ingrese un valor en la url`);
		}
	
	},
}

module.exports = productsController;
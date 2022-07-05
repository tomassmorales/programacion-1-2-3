
/*Modulo de terceros*/

const moment = require(`moment`);

let fecha = moment().format();

console.log(fecha);

const quotesPeliculas = require(`popular-movie-quotes`);

console.log(quotesPeliculas);

for(let i = 0; i < 3; i++){
console.log(quotesPeliculas.getRandomQuote());
}


/*Modulo propio */

const calculadora = require(`./modules/calculadoraModule`);

console.log(calculadora.multiplicar(3,3));

const autos = require(`./modules/autos`);

console.log(autos.lista);

for(let i = 0; i < autos.lista.length; i++){
	let auto = autos.lista[i];

	console.log(autos.lista[i].describirse());
}

console.log(autos.porColor("Rojo"));

console.log(autos.porMarca("Ferrari"));

console.log(autos.porAnio(2019));
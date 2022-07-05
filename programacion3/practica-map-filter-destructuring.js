//MAP

//1
let numeros = [1, 5, 7, 12, 89, 23]

let numerosDobles = numeros.map(function (num) {
	return num * 2
})

console.log(numerosDobles);


//2
let strings = numeros.map(function (num) {
	return num.toString()
});

console.log(strings);

//3
let nombres = ["franco", "martina", "leonardo", "jose", "lucia", "josefina"]

let nombresMayus = nombres.map(function (nombre) {
	return nombre.toUpperCase()
})

console.log(nombresMayus);

//4
let personas = [{
		nombre: "Angelina Jolie",
		edad: 80
	},
	{
		nombre: "Eric Jones",
		edad: 2
	},
	{
		nombre: "Paris Hilton",
		edad: 5
	},
	{
		nombre: "Kayne West",
		edad: 16
	},
	{
		nombre: "Bob Ziroll",
		edad: 100
	}
]

let soloNombres = personas.map(function (persona) {
	return persona.nombre
})

console.log(soloNombres);

//5
let matrix = personas.map(function (persona) {

	let mensaje;

	if (persona.edad >= 60){
		mensaje = `${persona.nombre} puede entrar en la matrix`;
		return [
			persona.nombre,
			mensaje
		]
	} else {
		mensaje = `${persona.nombre} es demasiado peque`;
		return [
			persona.nombre,
			mensaje
		]
	}
})

console.log(matrix);

//6
let enHTMl = personas.map(function(persona){
	return `<h2>${persona.nombre}</h2><p>${persona.edad}</p>`
})
console.log(enHTMl);

//FILTER

//1
let numeroDos = [66,3,2,5,26,101]

let cincoOMas = numeroDos.filter(function(numero){
	return numero > 5
})

console.log(cincoOMas);

//2

let pares = numeroDos.filter(function(numero){
	return numero%2
})

console.log(pares);

//3
let words = ["dog", "wolf", "by", "family", "eaten", "camping"]

let menosDeCinco = words.filter(function(palabra){
	return palabra.length < 5
})

console.log(menosDeCinco);

//4
let listaPersonas = [{
	nombre: "Angelina Jolie",
	afiliado: true
},
{
	nombre: "Eric Jones",
	afiliado: false
},
{
	nombre: "Paris Hilton",
	afiliado: true
},
{
	nombre: "Kayne West",
	afiliado: false
},
{
	nombre: "Bob Ziroll",
	afiliado: true
}
]

let miembroIlluminati = listaPersonas.filter(function(persona){
	return persona.afiliado
})

console.log(miembroIlluminati);
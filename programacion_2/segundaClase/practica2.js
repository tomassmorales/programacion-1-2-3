

let idioma = "fr";

if(idioma === "es"){
	console.log("Hola!");
}else if (idioma === "en"){
	console.log("Hello!");
}else if (idioma === "fr" ){
	console.log("Bounjour!");
}else{
	console.log(":/");
}


let diaSemana = "Jueves";

if(diaSemana === "Lunes"){
	console.log("Feliz Lunes!");
}else if (diaSemana === "Martes"){
	console.log("Feliz Martes!");
}else if (diaSemana === "Miercoles"){
	console.log("Feliz Miercoles!");
}else if (diaSemana === "Jueves"){
	console.log("Feliz Jueves!");
}else if (diaSemana === "Viernes"){
	console.log("Feliz Viernes!");
}else if (diaSemana === "Sabado"){
	console.log("Feliz Sabado!");
}else if (diaSemana === "Domingo"){
	console.log("Feliz Domingo!");
}


let persona = {
	nombre: "Tomás",
	apellido: "Morales",
	edad: 21,
	ciudad: "Tucumán"
}

console.log(persona.nombre.length);

if (persona.edad < 18 && persona.ciudad === undefined){
	console.log(`Hola ${persona.nombre} ${persona.apellido} criatura viajera!`);
} else if (persona.edad > 18 && persona.ciudad === undefined){
	console.log(`Hola ${persona.nombre} ${persona.apellido} eminencia viajera!`);
}else {
 
if (persona.edad > 18){
	console.log(`Hola ${persona.nombre} ${persona.apellido} de ${persona.ciudad}!`);
}else if (persona.edad < 18){
	console.log(`Hola mini ${persona.nombre} ${persona.apellido} de ${persona.ciudad}!`);
}
}

if(persona.nombre.length <= 4){
	console.log("Que nombre cortito");
}

if(persona.ciudad === "Winterfell"){
	console.log("Winter is coming");
}

/*Bucles*/

let base = 7;
let resultados = [];

for(let i = 0; i < 11; i++){
	resultados.push(base*i)
}

console.log(resultados);

let destinos = ["Hawaii","Los Angeles" ,"Paris","Bruselas","Londres"];

for (let i = 0; i < destinos.length; i++) {
	console.log(`Destino numero ${i+1} : ${destinos[i]}`);	
}


let notas = [95,68,66,70,80,90,100,85,65,78]

for(let i = 0; i < notas.length; i++){
	let nota = notas[i];

	if(nota > 90){
		console.log("Nota: A");
	}else if (nota > 80 && nota < 90){
		console.log("Nota: B");
	}else if (nota > 70 && nota < 80){
		console.log("Nota: C");
	}else if (nota > 65 && nota < 70){
		console.log("Nota: D");
	}else{
		console.log("Nota:F");
	}
}

let ganancias = [
	{
		mes: 1,
		saldo: 1000
	},
	{
		mes: 2,
		saldo: 1500
	},
	{
		mes: 3,
		saldo: 500
	},
	{
		mes: 4,
		saldo: 800
	}
];

let balance = 0;

let cantidadPositivos = 0;

for(let i = 0; i < ganancias.length; i++){

	console.log(`El mes ${ganancias[i].mes} tuvo un saldo de ${ganancias[i].saldo}`);

	if (ganancias[i].saldo > 0){
		console.log(`El mes ${ganancias[i].mes} tuvo un saldo positivo`);
		cantidadPositivos = cantidadPositivos + 1;
	}else{
		console.log(`El mes ${ganancias[i].mes} tuvo un saldo negativo`);
	}

	balance = balance + ganancias[i].saldo;
}

console.log(balance);
console.log(cantidadPositivos);

let personas = [
	{
	    nombre: "Jon",
	    apellido: "Snow",
	    edad: 23,
	    ciudad: "Winterfell"
	},
	{
	    nombre: "Daenerys",
	    apellido: "Targaryen",
	    edad: 19
	},
	{
	    nombre: "Arya",
	    apellido: "Stark",
	    edad: 12,
	    ciudad: "Winterfell"
	},
	{
		nombre: "Tyrion",
		apellido: "Lannister",
		edad: 32,
		ciudad: "Casterly Rock"
	    }
	]

	
for(let i = 0; i < personas.length; i++){
	if (personas[i].edad < 18 && personas[i].ciudad === undefined){
		console.log(`Hola ${personas[i].nombre} ${personas[i].apellido} criatura viajera!`);
	} else if (personas[i].edad > 18 && personas[i].ciudad === undefined){
		console.log(`Hola ${personas[i].nombre} ${personas[i].apellido} eminencia viajera!`);
	}else {
	
	if (personas[i].edad > 18){
		console.log(`Hola ${personas[i].nombre} ${personas[i].apellido} de ${personas[i].ciudad}!`);
	}else if (personas[i].edad < 18){
	       console.log(`Hola mini ${personas[i].nombre} ${personas[i].apellido} de ${personas[i].ciudad}!`);
	}
	}	
	if(personas[i].nombre.length <= 4){
		console.log("Que nombre cortito");
	}
	
	if(personas[i].ciudad === "Winterfell"){
		console.log("Winter is coming");
	}
}
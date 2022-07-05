//Const de objeto puede ser modificado por que no cambia el tipo de dato
//Arrow functions son siempre anonimas

let sumar = (a,b) => {
	return a + b
};

console.log(sumar(5,5));

//If ternario cambia la sintaxis y retorna un resultado

// let resultado = condicion ? primeraExpresion : segundaExpresion

let result = 4 > 10 ? "El 4 es más grande" : "El 10 es más grande";

console.log(result);

//Ejercicios de Repaso

//1
let subject = "Programación III";
let year = 2022;

//2
let favoriteSites = ["netflix.com", "amazon.com", "mercadolibre.com", "google.com"]

//Si la variable es de scope local entonces la podriamos usar dentro del bloque de codigo donde se encuentre

console.log(favoriteSites[3]);

favoriteSites.pop()

console.log(favoriteSites);

favoriteSites.push("youtube.com");

console.log(favoriteSites);

//3

const person = {
	name: "Tomás",
	lastName: "Morales",
	age: 21,
}

console.log(`Hola mi nombre es ${person.name} ${person.lastName} y tengo ${person.age}`);

//4

person.sites = favoriteSites

console.log(person.sites);

console.log(person.sites[1]);

//5

let cursos = [
	{
		nombre: "Programación I",
		descripcion: "Primer curso de programacion",
		alumnos: 28,
		diasCursada: ["Martes", "Viernes"]
	},
	{
		nombre: "Programación II",
		descripcion: "Segundo curso de programacion",
		alumnos: 28,
		diasCursada: ["Lunes", "Jueves"]
	},
	{
		nombre: "Programación III",
		descripcion: "Tercer curso de programacion",
		alumnos: 28,
		diasCursada: ["Lunes", "Miercoles"]
	},
	{
		nombre: "Swift",
		descripcion: "Curso de apple",
		alumnos: 28,
		diasCursada: ["Martes", "Viernes"]
	},
	{
		nombre: "Android",
		descripcion: "Curso de Android",
		alumnos: 28,
		diasCursada: ["Martes", "Viernes"]
	},
	{
		nombre: "Diseño",
		descripcion: "Curso de diseño",
		alumnos: 28,
		diasCursada: ["Martes", "Viernes"]
	},
]

console.log(cursos[2]);

console.log(cursos[3].nombre);

cursos[1].diasCursada.push("Viernes")

console.log(cursos[1]);

for(let i = 0; i < cursos.length; i++){
	cursos[i].alumnosDatos = [
		{
			nombre: "Tomás",
			apellido: "Morales"
		},
		{
			nombre: "Juan",
			apellido: "Gonzales"
		},
		{
			nombre: "Jaime",
			apellido: "Perez"
		}
	]
}

console.log(cursos);

console.log(cursos[2].alumnosDatos[0].nombre);

//FUNCIONES

let saludar = () => {
	return "Hola"
}

let multiplicar = (a,b) => {
	return a*b
}

let anonima = () => {
	return "Soy una función sin nombre"
}

let esPar = (nunero) => {
	return numero%2 === 0;
}

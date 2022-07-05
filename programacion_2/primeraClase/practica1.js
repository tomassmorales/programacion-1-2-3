
let subject = `Tomás`;
let year = 2021;

let favoriteSites = ["netflix.com", "youtube.com", "google.com", "instagram.com"];

console.log(favoriteSites[3]);

favoriteSites.pop();

console.log(favoriteSites);

favoriteSites.push("nasa.gov");

console.log(favoriteSites);

const person = {
	name: "Tomás",
	lastName: "Morales",
	age: 21,
	sites: favoriteSites,
}

console.log(`Hola mi nombre es ${person.name} y tengo ${person.age}`);

console.log(person.sites);

console.log(person.sites[1]);

let cursos = [
	{
		nombreCurso: "Programacion I",
		descripcion: "Programar" ,
		cantAlumnos: 25,
		diasCursada: ["martes", "viernes"],
		alumnos: [
			{
				nombre: "Tomás",
				edad: 21,
			},
			{
				nombre: "Javier",
				edad: 20,
			},
		],
	},
	{
		nombreCurso: "Programacion II",
		descripcion: "Programar",
		cantAlumnos: 29,
		diasCursada: ["lunes", "jueves"],
		alumnos: [
			{
				nombre: "Tomás",
				edad: 21,
			},
			{
				nombre: "Javier",
				edad: 20,
			},
		],
	},
	{
		nombreCurso: "Admin",
		descripcion: "empresas",
		cantAlumnos: 60,
		diasCursada: ["lunes", "miercoles", "viernes"],
		alumnos: [
			{
				nombre: "Tomás",
				edad: 21,
			},
			{
				nombre: "Javier",
				edad: 20,
			},
		],
	},
	{
		nombreCurso: "matematica I",
		descripcion: "matematicas",
		cantAlumnos: 60,
		diasCursada: ["martes", "miercoles", "lunes"],
		alumnos: [
			{
				nombre: "Tomás",
				edad: 21,
			},
			{
				nombre: "Javier",
				edad: 20,
			},
		],
	},
	{
		nombreCurso: "Historia",
		descripcion: "historiar",
		cantAlumnos: 50,
		diasCursada: ["lunes", "jueves"],
		alumnos: [
			{
				nombre: "Tomás",
				edad: 21,
			},
			{
				nombre: "Javier",
				edad: 20,
			},
		],
	},
	{
		nombreCurso: "Literatura Mundial Moderna",
		descripcion: "Comprender libros",
		cantAlumnos: 50 ,
		diasCursada: ["martes", "miercoles"],
		alumnos: [
			{
				nombre: "Tomás",
				apellido: "Morales",
			},
			{
				nombre: "Javier",
				apellido: "Perez",
			},
		],
	}
]

console.log(cursos[2]);

console.log(cursos[3].nombreCurso);

cursos[1].diasCursada.push("martes");

console.log(cursos[1].diasCursada);

console.log(cursos[2].alumnos[0].nombre);




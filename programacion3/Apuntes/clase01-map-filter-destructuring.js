//map y filter permiten recorrer el array completo y nos permiten operar con cada elemento y retornar un nuevo array modificado
//con el resultado del proceso
//map y filter reciben una funcion callback como parametro

//MAP

let numeros = [2,4,6]

let dobleNumeros = numeros.map(function(num){
	return num*2 
	//Se ejecuta para cada elemento del array y retorna un array nuevo
	//El num es importante por que representa a cada elemento del array numeros en este caso
})

console.log(dobleNumeros);

//FILTER

//Permite recorrer el array y filtrar los elementos segun una condicion definida en el callback, retorna un nuevo array que tiene
//los elementos que cumplen con la condicion devolviendo un nuevo array que puede tener menos elementos que el original

let edades = [22,8,17,14,30]

let mayores = edades.filter(function(edad){
	return edad > 18;
	//Filtramos por aquellos que son mayores a 18
});

console.log(mayores);

//DESTRUCTURING

//Sirve para obtener datos especificos de un objeto literal, no modifica el array u objeto literal, lo unico que hace es copiar
//los valores de una manera practica y rapida

let persona = {
	nombre: "Tomás",
	edad: 21,
	faltas: 1
}

let {nombre,edad} = persona;

console.log(nombre);
console.log(edad);

//Entre llaves van las variables que queremos crear y despues del igual va el objeto de donde obtenemos esos datos

//cambiar el nombre de la variable que estamos usando

// let {nombre, faltas: totalFaltas} = persona;
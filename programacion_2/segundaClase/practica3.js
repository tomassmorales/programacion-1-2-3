function calcularConsumo (edad, consumoDiario, producto){

	espectativaVida = 80;

	if (edad < 18){
		console.log("Sos menor");
	}else{
		consumoAnual = consumoDiario*365;
		añosDeVida = espectativaVida - edad;
		consumoTotal = añosDeVida*consumoAnual;
		return `Necesitaras ${consumoTotal} de ${producto} para que dure el resto de tu vida`;
	}

}

let ejemplo = calcularConsumo(21,2,"chocolate");

console.log(ejemplo);

let datos = [6,7,8,7];

function cambiarElUltimo (array, dato){
	array.pop();

	array.push(dato);
}

cambiarElUltimo(datos, 9);

console.log(datos);

let libro = {
	nombre: "Harry Potter",
	genero: "Fantasia",
	cantidadDePalabras: 100000,
	paraAdultos: false,
	describirse: function(){
		return `${this.nombre} - ${this.genero}`;
	} ,
	puedeLeerlo: function(edad){
		if(this.paraAdultos === true){
			if(edad > 18){
				return true
			}else{
				return false
			}
		}else{
			return true
		}
	}
}

console.log(libro.describirse());

console.log(libro.puedeLeerlo(21));


let saludar = () => `Hola`;

console.log(saludar());

let multiplicar = (valor1, valor2) => valor1*valor2;

console.log(multiplicar(5,2));

let ejemplo2 = () => `Soy una función sin nombre :(`;

console.log(ejemplo2());

let esPar = (numero) => numero%2 === 0;

console.log(esPar(10));

function celsiusAFarenheit (temperatura){
	let celFar = (temperatura*9/5) + 32;

	return `${temperatura}C son ${celFar}F`;
}

console.log(celsiusAFarenheit(32));

function fahrenheitACelcius (temperatura){
	let farCel = (temperatura-32)*5/9;

	return `${temperatura}F son ${farCel}C`;
}

console.log(fahrenheitACelcius(200));

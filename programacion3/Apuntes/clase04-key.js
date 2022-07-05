//KEY PROP Y MAP

//Key prop nos va a ayudar a trabajar en react con el metodo map
//Usamos map y key cuando en las props viene un array de elementos:

let nombres = ["Tomás", "Ale", "Lionel"];

<MyList usuarios={nombres}/> //El array se pasa dentro de llaves {} por que estas nos permiten
// escribir tipos de datos de javascript en JSX

//Dentro del componente vamos a recibir las props como parámetro de la función (LAS PROPS ES UN OBJETO LITERAL)
//Dentro de la estructura de JSX debemos iterar sobre el array recibido para poder imprimir los usuarios --> usamos map

//Iteramos el array con map y por cada iteración vamos a imprimir un li con el valor de cada posicion.
function MyList(props) {
	return(
		<ul>
			{props.usuarios.map(usuario => <li>{usuario}</li>)}
		</ul>
	);
}

//En las dev tools veremos un warning que dice que cada iterador tiene que tener una key prop unica
//React nos pide identificar univocamente cada uno de los elementos que imprimimos en el map --> usamos la key prop
//Esta key ayuda a react a identificar estos elementos, tiene que ser unicas y no se muestran en el HTML. Solo la vamos a usar cuando iteremos arrays
//Por medio de la key React identifica que elemento se vio afectado ya sea cambiado, agregado o eliminado

//Usamos el segundo parametro de map i o idx que almacena el indice correspondiente al elemento que esta recorriendo (parecido al i de los ciclos for)
//El idx es un parámetro optativo (se puede presindir de el) pero en este caso nos sirve para generar la key
function MyList(props) {
	return(
		<ul>
			{props.usuarios.map((usuario, idx) => <li key= {usuario + idx}>{usuario}</li>)}
		</ul>
	);
}
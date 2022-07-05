//COMPONENTES --> es una pieza de la interfaz de usuario 
// caracteristicas --> permite ser reutilizable, cumple funcion determinada y trabaja de manera aislada

//COMPONENTES STATELESS (sin estado)
//Componentes funcionales (funciones) que internamente implementan un return con logica sencilla que entrega una estructura html
//DENTRO DEL RETURN NO PUEDEN HABER ETIQUETAS HERMANAS, no pueden haber multiples elementos en el mismo nivel
//En caso de contener varios elementos que queramos unificar ponemos:
<React.Fragment></React.Fragment> //No crea otro elemento o nodo en el DOM sino que hace cumplir la regla de 1 solo elemento en la funcion
//React fragment viene de el objeto React por lo tanto tiene que estar importado antes en el archivo antes de usarlo


//CREACION DE COMPONENTE
//Creamos archivo .js con el nombre de la funcion que llevara adentro ejemplo: Navbar.js la primera letra va en mayúscula (también en el nombre de la funcion):

import React from "react"; //Siempre tenemos que importar react para que funcione

function Navbar (){
	return (
		<nav>
			<a>Home</a>
		</nav>
	)
}

export default Navbar // por último exportamos para que el componente esté disponible donde queramos usarlo

//Estos componentes/archivos lo ponemos en una carpeta components dentro del src, que va a contener distintas carpetas por cada archivos/componentes
//Las carpetas de los componentes todas comenzando con mayúscula como el nombre del componente

//Uso del componente:
//Para usarlo en nuestra aplicación lo importamos desde la ruta en que lo creamos

import Navbar from "./components/Navbar/Navbar" //no hace falta poner la extensión js

//El componente se incluye en la estructura como un elemento html y es importante cerrarlo

function App() {
	return (
		<div className="App">
			<Navbar /> 
		</div>
	)
}

export default App;

//PROPS Y STYLING

//PROPS
//Son entradas de un componente de react, representan info que es pasada de componente padre
//que implementa a un componente hijo.
//Las props permiten insertar valores y eventos en el HTML
//Las props son recibidas por el componente hijo como un objeto literal
//Para definir props que puedan ser utilizadas por un componente debemos pasarlo como un atributo HTML al momento de implementar el HTML

//Componente padre
import React from "react";

function MiComponente () {
	return (
		<div>
			<Bienvenido name="Fernando"/>
		</div>
	);
}

export default MiComponente;

//Componente hijo
import React from "react";

function Bienvenido (props) {
	return (
		<h1>
			Hola, {props.name}
		</h1>
	);
}

export default Bienvenido;

//El componenete padre puede pasar cuantos atributos sean necesario

<Bienvenido name="Fernando" texto="La descripcion"/>

//Styling
//Podemos utilizar los estilos globales incluyendo la llamada hoja de estilos dentro de index.html
{/* <link href="/assets/css/app.css" rel="stylesheet"> */}
//Para aplicar estilos dentro del componente debemos tener en cuenta 3 pasos:
//1- importar el archivo css al componente
import "./hojaEstiloComponente.css";
//2-Asignar una clase al elemento
<h2 className= "nombreProducto"></h2>
//3-No repetir clases
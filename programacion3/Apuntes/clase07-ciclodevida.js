//CICLO DE VIDA
//En un cambio de estado el stateful component se renderiza de vuelta
//No siempre se dispondra de elementos JSX sobre el cual ejecutar una acción
//Se definen momentos de un componente donde podemos definir eventos en cada una de las etapas del ciclo de vida
//Se definen situaciones predefinidas en el componente y se las asocia a métodos (ciclo de vida):

//Se ponen debajo del constructor()

//componentDidMount() --> se ejecuta inmediatamente despues del primer renderizado del componente, podemos pedir informacion en esta etapa (APIs), se ejecuta una sola vez
//                    --> al pedir los datos el estado interno cambia y obliga al componente a volver a renderizarse

//componentDidUpdate() ––> se ejecuta cada vez que el componente sufre algun cambio de estado, no se ejecuta en primer renderizado, se usa por ejemplo para las funcionalidades de búsqueda
//                     --> puede recibir 2 parámetros, ambos objetos literales que representan las propiedades previas (prevProps) y el estado previo (prevState) del componente

//componentWillUnmount() ––> se invoca antes de desmontar y destruir un componente, funciones de limpieza (invalidar timers o eliminar elementos montados en el componentDidMount)
//                       --> no se debe invocar dentro de este metodo el setState por que al pasar por acá nunca más será renderizado

//FETCH --> metodo que permite consultar un recurso de forma asincrónica
//      --> recibe como parámetro la ruta desde donde queremos obtener informacion (endpoint)
//      --> retorna una promesa de que en algun momento enviará informacion (es un método asincrónico)

fetch("endpoint")
//Callbacks
.then(function(response){
	return response.json(); //procesa y transforma la información a formato json para tenerla lista para usar
})
.then (function(data){
	console.log(data); //Guardamos en el estado del componente los datos del objeto literal
})
.catch(function(error){
	console.log(error); //Muestra los errores
})

//Escrito con arrow functions
fetch("endpoint")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))

//Integracion con apis

//1) componentDidMount lo usamos para pedir los datos y actualizar el estado del componente con la información traida

componentDidMount(){
	fetch("endpoint")
	.then(response => response.json())
        .then(data => this.setState(
		{datos: data.data.image_url}
	))
        .catch(error => console.log(error))
};

//2) Usamos el render para renderizar los datos, podemos usar un if ternario para renderizar los datos si es que llegan y sino renderizar un cargador

render(){
	return(
		<div>
			{this.state.datos === "" ? <h3>Cargando...</h3> : <h3>{this.state.datos}</h3>}
			<p>Hola mundo</p>
		</div>
	) 
}


//En un componente con estado accedemos a las props con this.props en cambio en un componente sin estado directamente ponemos props.
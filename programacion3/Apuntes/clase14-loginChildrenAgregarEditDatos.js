//Children --> las estructuras de navegacion agrupan pantallas y mediante la propiedad initialParams podemos pasar datos y funciones a un componente screen para que las considere en el momento inicial de renderizarse pero...
//             si los datos iniciales cambian y necesitamos volver a pasarlos a una pantalla?los componentes Screen agrupados en la navegacion no cumplen la funcion de hijos sino que simplemente estan agrupados, entonces
//             no se volveran a renderizar si es que hay un cambio de estado en el menu que los contiene --> para forzar la relacion e indicar explicitamente que la pantalla sea hija del componente de navegacion usamos la propiedad children
//                                                                                                       --> con children podemos detectar cambios de estado y pasarlos como informacion a la pantalla para que pueda usarla por ejemplo los errores en los forms de login y registro. 


//Para indicar que una pantalla debe comportarse como si fuera hija del componente de navegacion debemos agregar la propiedad children.
//Asi podemos pasar informacion actualizada del estado padre hacia la pantalla hija. Children esta puesta para poder pasar novedades de estado a otro componente.

//la propiedad children NO puede usarse en combinacion con la propiedad component ya que ambas renderizan un componente pero con objetivos diferentes

<Stack.Screen
name= "Login"
options={{headerShown:false}}
initialParams= {{login: (mail,pass)=>this.login(mail,pass)}}
children={ (props) => <Login errores={this.state.loginErrors} {...props} /> }
/>

//La diferencia con initialParams es que este manda la informacion de una vez, children la actualiza.
//para renderizar el componente debemos pasar una funcion que retorne el componente junto con la info del estado que queremos enviar.

//Los menues utilizan props mediante las cuales pasan a los componentes hijos la propiedad navigation con la funcion navigate() y la propiedad route
//Usando children debemos agregar las props dentro de la arrow function y pasarlas al componente tal cual se reciben para que pueda usarlas.
//El operador spread de javascript se encargara de copiarlas en el componente hijo. (...props)

//Usando las props --> para utilizar las props que se envian desde children lo haremos de la misma forma que al pasar props entre un componente padre y su componente hijo.

{
this.props.errores != "" ? <Text>El error es: {this.props.errores}</Text> : null
}

//los errores de logeo o registro se devuelven en el catch

//AGREGANDO DATOS EN UNA COLECCIÓN 
//En Firestore (base de datos no relacional) cada tabla se conoce con el nombre de coleccion y cada "registro" recibe el nombre de documento
//Para agregar info a una coleccion es necesario indicar en que coleccion queremos guardar los datos y pasar un objeto literal con las propiedades y valores que queremos almacenar.

import {db, auth} from "../firebase/config"
//importamos db en la configuracion de firebase

db.collection("posts").add({
	owner: auth.currentUser.email,
	description:this.state.description,
	createdAt: Date.now()
})
//El metodo collection() recibe como parametro el nombre de la coleccion. Si la coleccion no existe en Firebase este la va a crear automaticamente al ingresar el primer documento
//El metodo add() recibe como parametro un objeto literal con la info a guardar
//Como no hay relaciones entre tablas como pasa en MySQL junto con la info a guardar es necesario indicar en el documento los datos de quien lo crea y la fecha en que es creado.
.then()
.catch(e => console.log(e))

//OBTENER DATOS DE UNA COLECCION --> es necesario de que coleccion los queremos obtener y combinarlos con el método onSnapshot() para que firebase entregue la info actualizada.
//                               --> onSnapshot() entregara un array de documentos que deberemos recorrer para extraer los datos de cada documento con el metodo data(). Finalmente agregar todo el array al estado del componente

db.collection("posts").onSnapshot(
	docs => {
		let posts = [];
		docs.forEach(
			doc => {
				posts.push({
					id: doc.id,
					data: doc.data()
				})
			}
		)
		this.setState({
			posteos: posts,
			loading: false
		})
	}
)

//onSnapshot() obtiene todos los documentos de la coleccion y los coloca en el parámetro docs, collection recibe como parametro el nombre de la coleccion.
//creamos la variable posts para guardar los datos que pasaremos al estado del componente
//Con un forEach() recorremos el array de documentos y pusheamos en el array de resultados un objeto literal con el id de cada documento y la info del documento que se obtiene con el método data()
//Guardamos los datos en el estado del componente que luego renderizará los posteos dentro de la FlatList
//REMEMBER ME --> dentro de las funcionalidades de una app movil es frecuente que una vez el usuario se loguea la app lo mantenga logueado hasta que el usuario
//                se desloguee
//Para activar el comportamiento "recordarme" necesitamos :

import {auth} from "../firebase/config";


//Este método se encargara de observar la obtencion de datos del usuario desde la base de datos y posibles cambios. Podemos usar los datos del usuario
//con el parámetro user. Un buen lugar para usuarlo es dentro del componentDidMount en el componente que también tiene el método de registro.
auth.onAuthStateChanged (user => {
	console.log(user);
})

//Una vez el usuario es obtenido desde firebase es posible acceder a todos sus datos mediante la propiedad currentUser.

//Es una buena alternativa a tener que pasar los datos del usuario por props, currentUser estara disponible siempre que importemos auth desde la configuracion de firebase

auth.currentUser.email

//Para realizar logout y asegurarnos que no queden datos del usuario obtenidos desde firebase contamos con el método signOut() tambien dentro de la ejecución de auth.

//Podemos incluir la funcionalidad dentro del metodo custom que tenga la app para manejar pantallas diferenciadas para usuarios logueados o desloguearse.

logout(){
	auth.signOut()
}

//STACK NAVIGATION --> es parte de React Navigation, son un set de funcionalidades que permiten incluir la gestion de rutas y navegacion dentro de una app de react native.
//                 --> el componente se utiliza para contruir navegacion en pila, las pantallas parecen estar una sobre la otra

//Se instala igual que con Tab Navigation (en vez de la linea de bottom tab se pone la de native stack), si ya lo tenemos solo aplicamos la linea:

// npm install @react-navigation/native-stack

//Para crear el componente menú necesitamos 3 pasos:

//1- Importar los contenedores del menú

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

//2- Importar las vistas para el Menú

import Home from "../screens/home" 
import { Touchable, TouchableOpacity } from "react-native";
//etc...

//3- Guardar en una variable la ejecución 

const Stack= createNativeStackNavigator();

return (
	<NavigationContainer> Contiene estructura de navegación
		<Stack.Navigator> Define el tipo de navegacion a utilizar, en este caso Stack, contiene la lista de pantallas a mostrar en el menú de navegacion
			<Stack.Screen name="Login" component= {Login} />
			<Stack.Screen name="Register" component= {Register} />
		</Stack.Navigator>
	</NavigationContainer>
)

//el comportamiento de pila que propone Stack Navigator obliga a que la navegacion entre pantallas sea mediante links. Debemos crear los componentes TouchableOpacity
//que permitan navegar entre pantallas de un menú de stack.

//NAVEGANDO ENTRE PANTALLAS -->Los componentes Screen de un menu conocen a los otros componentes que lo conforman. Por lo tanto es posible navegar entre ellos.

//Los menues utilizan internamente props mediante las cuales pasan a los componentes hijos la propiedad navigation y la funcion navigate().
//Dentro del componente hijo usaremos navigation.navigate("unaScreen")

<TouchableOpacity onPress={ ()=> this.props.navigation.navigate("elNombreDeLaScreen") } >
</TouchableOpacity>

//.navigation es una propiedad que se incorpora con los componentes de navegacion. La funcion navigate() se encargara de redireccionar a la pantalla correspondiente si le pasamos un "name" existente del menú.

//Tambien podemos pasar props desde el menu padre a las pantallas, sin embargo la forma de pasar props dentro de un menu es levemente diferente a como lo hacemos en los componentes tradicionales.

//PASANDO PROPS

//Para pasar props a componentes hijos dentro de un menu, es decir, a las pantallas que luego el menu renderizará debemos usar el atributo initialParams

{/* <Stack.Screen
name="Login"
component={Login}
options={{headerShown:false}}
initialParams= { {login: (mail,pass) => this.login(mail,pass)} }
/>  */}

//initialParams recibe un objeto literal con cada prop que queremos pasar y su contenido, en este caso pasamos el metodo login.

//En un menú, para usar las props en el componente hijo, las encontramos dentro de this.props.route.params

<TouchableOpacity onPress= { ()=> this.props.route.params.login(this.state.email, this.state.password) } >
</TouchableOpacity>

//OCULTANDO HEADERS --> Para ocultar las cabeceras automaticas que construye el menú debemos pasar dentro de cada screen el atributo options indicando que queremos desactivarlas.

<Stack.Screen options={{headerShown:false}} /> 

//Nested Navigation --> Es frecuente encontrar dentro de una app mas de una forma de navegacion. Sin embargo, si bien parecen navegaciones diferentes, dentro del codigo de la app están anidadas, es decir, una navegacion incluye a la otra.
//Para conseguir implementarlas debemos tener en cuenta:
//1- Definir cuál va a ser el formato de navegacion padre y cual el formato anidado.
//2- Uno de los componentes Screen del menú padre llamará a un componente que internamente tenga otro tipo de navegación. El componente invocado debe tener su esquema de navegacion completo
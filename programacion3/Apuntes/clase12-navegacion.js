//NAVEGACIÓN EN REACT NATIVE

//Usamos componente Tab Navigation --> es parte de React Navigation (modulo de terceros), un set de funcionalidades que permiten incluir gestión de rutas y navegación dentro de una app en React Native. https://reactnavigation.org/
//                                 --> este componente es muy utilizado para incluir una sección de navegación en la aplicación.
//                                 --> genera una zona de pestañas en donde se ven los enlaces a las diferentes secciones de la app.

//INSTALACIÓN TAB NAVIGATION

// npm install @react-navigation/native
// expo install react-native-gesture-handler
// expo install react-native-reanimated 
// npm install @react-navigation/bottom-tabs
// expo install react-native-screens

//Una vez instalamos creamos componente Menú, primero hacemos 3 pasos:

//1- Importar los contenedores del menú

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

//2- Importar las vistas para el Menú

import Home from "../screens/home" 
//etc...

//3- Guardar en una variable la ejecución de createBottomTabNavigator

const Tab= createBottomTabNavigator();

//ESTRUCTURA --> No puede haber un View 

return(
	<NavigationContainer> contiene la estructura de navegación
		<Tab.Navigator screenOptions= { { tabBarShowLabel: false } }> contiene a la lista de pantallas incluidas en el menú de navegación
		Para eliminar las labels que aparecen en el menu debemos pasar dentro de Tab.Navigator el atributo screenOptions indicando que queremos desactivarlas
			<Tab.Screen name= "Home" component = {Home}/>
			<Tab.Screen name= "Login" component = {Login}/>
			<Tab.Screen name= "Register" component = {Register}/>
			Representan a cada una de las pantallas de la app, el atributo name será el nombre del menú, el atributo component debe indicar
			cual es la pantalla que mostrará cuando sea elegido.
		</Tab.Navigator>
	</NavigationContainer>
)

//Agregar íconos --> expo de forma nativa provee paquetes de íconos que podemos incorporar al proyecto. Para ellos debemos elegir el paquete que queremos usar y extraerlo de @expo/vector-icons

//https://icons.expo.fyi/ --> librerias disponibles y sus iconos.

//Para usar Font Awesome por ejemplo:

import { FontAwesome } from "@expo/vector-icons";

//Para implementar los iconos en la pestaña del menu debemos agregar el atributo options con el siguiente contenido:

<Tab.Screen
 name= "Home" 
 component = {Home}
 options = {
	 { tabBarIcon: () => <FontAwesome name="home" size={24} color="black"/> }
 }
 />


//Para implementar el menu en app.js vamos a agregarlo solito en el return:

return(
	<Menu/>
)
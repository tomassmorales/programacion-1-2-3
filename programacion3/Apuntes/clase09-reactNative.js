//React Native --> programacion de apps, usamos framework Expo(usamos este) o con la consola usando emulador de android o iOS.
//             --> permite construir interfaces de usuario (vistas en el MVC)
//             --> combina en una libreria el desarrollo en lenguaje nativo tanto para las plataformas de Android y iOS.
//             --> libreria que permite escribir en js el código de la app para luego exportarlo a codigo nativo.

//Crear proyecto en react native --> a través de Expo --> framework que permite realizar interfaces de usuario con react native (entorno de trabajo que trae resultas series de tareas automatizando el desarrollo de cualquier app)
// 1- npm/sudo install -g expo-cli (instalamos expo)
// 2- Iniciamos proyecto expo --> expo init my-project --template blank (template hace referencia a las distintas templates que podemos usar en Expo)
// 3- expo start -w (iniciamos el proyecto) --> w (web), i (iOS simulator), a (Android)

//Estructura de carpetas --> App.js es el entry point, assets (archivos estáticos como imágenes y tipografias), src (colocamos los archivos que conforman la app agrupados en 2 subcarpetas
//( components guarda los componentes compartidos entre vistas, se usan para conformar pantallas o vistas, incluimos un archivo por componente)
//( screens contiene los archivos que construiran las pantallas de la app, las pantallas son componentes con estado con funcionalidades propias combinadas con otros componentes))

//Componentes --> 3 tipos --> core (los que vienen con react native), comunitarios (hechos por la comunidad para instalar desde npm), propios (los que hacemos nosotros)

//Componentes core básicos --> predefinidos por React Native, son de sencilla implementación y configuración permitiendo el armado rápido de un layout
//                         --> view --> nos permite simular los divs, tiene las mismas funciones, funciona como un contenedor, se pueden anidar otros componentes (incluso más views)
//                         --> text --> se utiliza para presentar texto, TODOS los textos se ponen por medio de este componente
//                         --> TouchableOpacity --> crea un contenedor clickeable, permite gestionar los eventos onPress (se acciona cuando el componente es presionado por el usuario) y onLongPress (se acciona cuendo el usuario mantiene presionado el componente por unos segundos), recibe como parametro una funcion que retorna la ejecucion de un método
//                         --> Stylesheet --> sirve para agregar estilos css, cada componente de nuestra app lo va a aplicar de manera individual

import React from "react"
import {View, Text, TouchableOpacity, StyleSheet} from "react-native" //Importamos los componentes

function Card() {
	pasesCortos(){
		//codigo
	}
	pasesLargos(){
		//codigo
	}
	return (
		<View style={styles.container}> aplicamos los estilos de container
			<Text>Hello World</Text>
			<TouchableOpacity onPress={() => this.pasesCortos()}>
				<Text>Presionar</Text>
			</TouchableOpacity>
			<TouchableOpacity onLongPress={() => this.pasesLargos()}>
				<Text>Mantener presionado brevemente</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({ //usamos el método create del objeto stylesheet, create es un objeto literal en donde cada propiedad es equivalente a los selectores de css
	container: {
		alignItems: "center",
		fontSize: 19
//dentro del objeto literal se escriben las reglas de css, las propiedades con más de un termino se escriben en camelCase, los valores no numericos deben indicarse como strings, las propiedades que indican medidas se indian sin la unidad (no usamos px por ejemplo)
	},
})

export default Card;


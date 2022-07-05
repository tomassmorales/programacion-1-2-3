//Formularios en React Native --> ¿Existen los formularios en react native? NO

//TEXTINPUT --> componente que representa los campos input (todos) de un formulario, permite ingresar texto en la aplicación a través del teclado

render(){
	return(
		<View>
			<Text>Login</Text>
			<TextInput style={styles.field}
			keyboardType="email-adress" 
			placeholder="email"
			onChangeText={text => this.setState({email:text})}
			/> 
			{/* keyboardType especifica que tipo de teclado mostrara el dispositivo, el valor por defecto será default. Valores: default, number-pad, decimal-pad, numeric, email-adress y phone-pad
			https://lefkowitz.me/visual-guide-to-react-native-textinput-keyboardtype-options/ (usar aquellos que incluyan a los 2: android e IOs) */}
			{/* onChangeText recibe una función que tomará los datos ingresados por el usuario y los almacenará en el estado del componente */}
			{/* A diferencia de los campos input de un formulario el componente TextInput trae estilos poco amigables por defecto, debemos aplicar estilos para customizarlo */}
			<TextInput style={styles.field}
			keyboardType="default" 
			placeholder="password"
			secureTextEntry = {true}
			onChangeText={text => this.setState({email:text})}
			/>
			{/* secureTextEntry mostrará al usuario el tradicional campo con puntitos que esconden el texto */}
			<TouchableOpacity onPress={()=> this.onSubmit()}>
				<Text>Login</Text>
			</TouchableOpacity>
			{/* TouchableOpacity funciona como botón de submit, React no tiene formularios de forma nativa por lo tanto la logica de la funcion onSubmit debe ser creada por el desarrollador */}
		</View>
	)
}

//Los formularios no existen en React Native, contamos con los componentes que nos permiten simular frente al usuario el comportamiento de un formulario tradicional
// View <=> Form
// TextInput <=> input, select etc...
// onChangeText --> guarda en el estado la información
//TouchableOpacity <=> boton submit 
//onSubmit() --> logica de envio de información

//Para ver y probar el comportamiento real de las configuraciones del componente TextInput necesitaremos levantar una simulación de la aplicación en un dispositivo móvil.
// Una opción disponible es acceder desde el navegador del celular o tablet ingresando la url que deja disponible Expo. Se encuentra junto a la leyenda "Webpack waiting on..."
//El dispositivo movil accede por la red local de nuestro WiFi a la ip pública que provee nuestra computadora que funciona como servidor de desarrollo.

//FIREBASE --> plataforma de google que ofrece servicios para desarrollo de aplicaciones (base de datos, almacenamiento de archivos y autenticación) --> base de datos no relacional (sin relaciones entre tablas), tienen colecciones (grandes grupos de documentos) en lugar de tablas y los registros son documentos (.json).
//CREANDO PROYECTO EN FIREBASE 
//1- Logearse con cuenta de google - dar en comenzar (inicio de firebase.google.com)
//2- Crear proyecto o agregar proyecto
//3 Ponemos nombre del proyecto, aceptamos condiciones y continuamos
//4- destildamos google analytics - crear proyecto
//5- Continuar - creamos app dentro de firebase (apretamos icono web </>), ponemos nombre y registramos la app
//CREAMOS LA BASE DE DATOS
//6-Apretamos ir a la consola y vamos a Cloud Firestore, desplegamos solapa "compilacion" y seleccionamos firestore database, le damos a crear base de datos
//7- seleccionamos comenzar modo de prueba - siguiente - habilitar
//8- definimos la autenticación de usuarios --> authentication -comenzar -elegimos la opcion correo electronico y la habilitamos
//IMPLEMENTANDO FIREBASE EN NUESTRO PROYECTO
//9-Dentro de nuestro proyecto ejecutamos npm install firebase@8.10
//10- Armamos archivo de configuración - en el menú "Configuracion del proyecto" obtendremos los datos a incluir en el archivo de configuracion
//11- En el proyecto creamos dentro de src creamos carpeta firebase que va a contener un archivo config.js, solo sacamos la parte de firebaseConfig de la "configuracion del proyecto"
// y la pegamos en config.js, debe quedar algo asi el archivo:

import app from "firebase/app";
import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCdwimmZVEZHjDVjOPOmPENvYNSI_EZyEc",
	authDomain: "progiiipracticas.firebaseapp.com",
	projectId: "progiiipracticas",
	storageBucket: "progiiipracticas.appspot.com",
	messagingSenderId: "708185796082",
	appId: "1:708185796082:web:f3a7342443169aa6798f6b"
      };

app.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();


//REGISTRAR Y LOGEAR USUARIOS
//En el archivo de nuestro proyecto que contenga los metodos de registro y de login importamos la configuracion y extraemos auth.

import {auth} from "./src/firebase/config"  //auth dejara disponibles metodos asincronicos para registrar y loguear un usuario. Ambos requieren de los parametros email y pass, cada metodo debe implementarse dentro de las funciones de login y registro de nuestro proyecto

auth.createUserWithEmailAndPassword(email,pass) //metodo de registro
auth.signInWithEmailAndPassword(email, pass) //metodo de logueo

register(email, pass) {
	auth.createUserWithEmailAndPassword(email,pass)
	.then((response) => {
		this.setState({
			registered: true
		});
	})
	.catch(error => {this.setState({
		error: "Fallo en el registro"})
	})
}

login(email, pass) {
	auth.signInWithEmailAndPassword(email,pass)
	.then((response) => {
		this.setState({
			login: true
		});
	})
	.catch(error => {this.setState({
		error: "Credenciales invalidas"})
	})
}
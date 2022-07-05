//CÁMARA

//Expo Camera --> el componente expo-camera permite acceder a la camara del dispositivo
//            --> el componente además cuenta con metodos propios que debemos invocar para poder usarlos.

//para instalar de forma local en el proyecto usamos el comando:
//expo install expo-camera

//Dentro del componente se encuentra una nueva carpeta node_modules con una subcarpeta react que debemos borrar para evitar conflictos.
//Podemos buscar manualmente la carpeta react o correr el siguiente comando con precaucion de que estemos bien ubicados en la carpeta del proyecto:

//rm -rf node_modules/expo-camera/node_modules/react

//Para usar la camara debemos crear un componente e importar Camera desde expo-camera

import { Camera } from "expo-camera"

//Revisar los permisos de firebase para que permita subir archivos a Storage

//Storage - Rules ---> la linea que comienza con allow la modificamos para que diga request.auth != null en vez de false.

//Para usar la camara hacemos lo siguiente --> 1) solicitar permisos al dispositivo para que pueda usar la camara (en componentDidMount())
//                                         --> 2) configurar dentro del render las propiedades de la camara para que se renderize correctamente en la pantalla
//                                         --> 3) definir metodo para tomar una foto
//                                         --> 4) mostrar al usuario un preview de la foto
//                                         --> 5) definir un metodo para guardar la foto
//                                         --> 6) usar expo-camera en el formulario para crear un posteo

//1) En el didMount vamos a usar el metodo requestCameraPermissionsAsync() del componente Camera y modificaremos un estado booleano

componentDidMount(){
	Camera.requestCameraPermissionsAsync()
	.then(() => {
		this.setState({
			permission: true
		})
	})
	.catch(e => console.log(e))
}

//2)Dentro del render el componente camara necesita --> recibir estilos para que verticalmente la camara comparta espacio con el boton que toma la foto
//                                                 --> definir la camara que podra usar el dispositivo
//                                                 --> setear una referencia al propio componente para usar metodos que contiene internamente el componente Camera
<View>
<Camera style= {StyleSheet.cameraBody} type={Camera.Constants.Type.back} ref={metodosDeCamara => this.metodosDeCamara = metodosDeCamara} /> //definimos los estilos, la camara a utilizar (frontal o trasera) y la referencia a "esta camara" para luego usar metodos internos, this.metodosDeCamara debe existir dentro del constructor
<TouchableOpacity
style={styles.shootButton}
onPress = { () => this.takePicture() }> // el boton que toma la foto usando el metodo takePicture()
<Text>Shoot</Text>
</TouchableOpacity>
</View>

//3) Para tomar la foto creamos un metodo dentro de nuestro componente que utilice el metodo interno takePictureAsync() que se encuentra incluido en Camera.
//Actualizaremos estados para guardar la url temporal de la foto y ocultar la camara para mostrar la preview de la foto

takePicture(){
	this.metodosDeCamara.takePictureAsync()
	.then( photo => {
		this.setState({
			photo: photo.uri, //es una uri interna temporal de la foto
			showCamera:false
		})
	} )
}

//Una vez tomada la foto ocultaremos la camara y para completar el proceso podemos darle al usuario la posibilidad de aceptar o rechazar la foto que tomo mostrandola dentro de un componente <Image> que funcione como un preview.
//En caso de aceptarla la vamos a guardar en el storage de Firebase

<React.Fragment>
<Image
style = {styles.preview}
source = {{uri:this.state.photo}}
/>
<View style= {styles.buttonArea}>
	<TouchableOpacity onPress = { () => this.savePhoto() }>
		<Text>Aceptar</Text>
	</TouchableOpacity>
	<TouchableOpacity onPress = { () => this.clearPhoto() }>
		<Text>Rechazar</Text>
	</TouchableOpacity>
</View>
</React.Fragment>

//El metodo savePhoto lo crearemos para guardar la foto (en el componente camara)
savePhoto(){
	//El metodo usa fetch para obtener la foto desde su ubicacion temporal dentro del dispositivo, despues la va a guardar en Firebase Storage y nos va a entregar la url de acceso publico
	//Por ultimo va a enviar el dato de la url publica al posteo para guardarla junto con los demas datos
	fetch(this.state.photo)
	.then(res => res.blob()) //como las fotos son archivos binarios usarmos blob, esto nos va a devolver la imagen.
	.then( image => {
		const ref = storage.ref(`photos/${Date.now()}.jpg`)
		ref.put(image)
		.then(() => {
			ref.getDownloadURL()
			.then(url => {
				this.props.onImageUpload(url);
			})
		})
	})
	.catch(err => console.log(err))
}

//4) Dentro del componente que utilizará la camara vamos a --> importar el componente custom de la camara
//                                                         --> definir estados que permitan administrar los datos de la foto y la visibilidad de la camara
//                                                         --> actualizar los datos del posteo con la url publica de la foto

import MyCamera from "../components/MyCamera"

this.state = {
	description: "",
	showCamera: true,
	url: ""
}

<MyCamera onImageUpload = { (url) => this.onImageUpload(url)} />

onImageUpload(url){
	this.setState({
		showCamera: false,
		url: url
	})
}

db.collection("posts").add({
	owner: auth.currentUser.email,
	description:this.state.description,
	createdAt: Date.now(),
	comentarios: [],
	likes: [],
	photo: this.state.url
})
.then()
.catch(e => console.log(e))
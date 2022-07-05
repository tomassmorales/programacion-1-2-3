//IMAGE --> componente que se usa para mostrar imagenes
//      --> lo importamos antes en las {}

import React from "react";
import {View, Text, Image, ActivityIndicator} from "react-native";

function Card(){
	return(
		<Image style={styles.image} source={require("..")} resizeMode="contain"/> 
		//cuando las imagenes están dentro de una carpeta del proyecto, por ejemplo en assets, el atributo source recibe el método require() que va a recibir la ruta relativa hacia el archivo de la imagen
		//React no trabaja Image como si fuera una imagen, sino que la transforma en un background del elemento donde está
		//Por esto usamos resizeMode donde podemos cambiar el comportamiento del background (cover[valor por default],contain,stretch,repeat,center)
	)
}

const styles = StyleSheet.create({
	image: {
		height: 400, //Obligatoriamente debemos ponerle una altura para que la imagen se vea (por default tiene valor 0) --> esto por que es un background de un componente y no una imagen.
	}
})

export default Card;

//Como mostramos imagen externa? por ejemplo que venga de una API --> cambiamos el atributo source del componente

{/* <Image style={styles.image} source={{uri: "..."}} resizeMode="contain"/>  */}
//usamos un objeto literal con la propiedad uri (es la propiedad de una url que comunmente llamamos url) y como valor pasamos el url de la imagen.

//FLAT LIST --> es un componente que crea un contenedor scrolleable.
//          --> Pasando los atributos de configuracion el componente recibe array, lo recorrera y mostrara gradualmente los elementos a medida que el usuario haga scroll
//          --> recibe 3 atributos obligatorios de config --> data (el array de datos que va a recorrer), keyExtractor (la clave unica para cada elemento renderizado) y renderItem (el componente a renderizar en cada iteracion)

<FlatList data={this.state.movies} keyExtractor={item => item.id.toString()} renderItem={({item}) => <Text>{item.title}</Text> }/>

//keyExtractor recibe una funcion que representa a cada item del array de datos, la funcion retorna una clave unica que debe ser en formato de texto, si optamos por un dato
//numerico debemos usar el metodo toString() para convertirlo. Es equivalente a la prop key de map() en React.

//renderItem --> recibe funcion con un objeto literal como parámetro y retorna el componente a renderizar.
//           --> el parámetro es un objeto literal y debe llevar el termino item dentro de las llaves. Item representa a cada uno de los elementos dentro del array de datos

//ACTIVITY INDICATOR --> es un componente que muestra al usuario una animación para transmitir la sensacion de que el dispositivo está procesando información
//                   --> Recibe 2 atributos: size (define el tamaño, puede ser "small" o "large" o números entre llaves) y color (un color en letras o hexadecimal)

{/* <ActivityIndicator size= "large" color="green" /> */}
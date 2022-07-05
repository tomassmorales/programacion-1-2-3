//React es una libreria open source de javascript, modulo de npm que nos permite crear 
//interfaces de usuario, está desarrollada por Facebook.
//Su objetivo es crear una estructura de interfaz más rápida a la de html y css

//Como trabaja? React usa el virtual dom que es un reemplazo al dom tradicional
// El virtual dom es una copia ligera del dom que crea React y en cada cambio lo compara con el dom real

//Instalacion de React por medio de la terminal

// npx create-react-app mi-primer-proyeto   --> creacion de carpeta donde va a a estar el proyecto
// cd mi-primer-proyecto   --> carpeta raiz del proyecto
// npm start   --> inicio del proyecto

//la instalacion puede durar unos minutos por la cantidad de materiales
// si vamos al localhost:3000 nos tendria que aparecer el logo de react
// el nombre del proyecto no tiene que tener mayusculas ni caracteres especiales


//Para arrancar necesitamos tener GIT, Gitbash, Node y Npm

//Carpetas de un proyecto react:
//Node modules  --> un monton de modulos para nuestro proyecto
//Public --> Nos interesa el archivo de index.html que es el archivo que se va a cargar cuando se inicie la app
//Src --> Nos interesa index.js (renderiza el contenido principal) y app.js que son los archivos donde vamos a trabajar nuestro proyecto de react
//package-json --> se especifican las dependencias y las versiones de los paquetes de las que depenede el proyecto



//Vamos a limpiar el index.html sacandole los comentarios y las cosas que molestan
//El archivo index.js tiene un elemento seleccionado del dom que busca un elemento de id "root" que esta en el index.html
//por lo tanto a ese div no lo tenemos que borrar, lo demas en el index.js lo limpiamos también.
//index.js le inserta al div "root" el elemento App que hace referencia al app.js que ES la aplicacion de react
//En el app.js es donde vamos a trabajar y tenemos que limpiarlo también.
//El entry point de una app en react es el div de id "root"

//index.html es el archivo donde vamos a enviar la estructura que generemos con react
//index.js se encarga de mandar la estructura de aplicacion en react
//app.js es donde generamos la estructura de nuestra app y es el principal componente

//Observaciones:
//En vez de requires vamos a tener imports --> import React from "react", es la estructura del destructuring 
//En el app.js vamos a ver el import de un logo y el del css, borramos la estructura por defecto y ponemos por ejemplo "Hola mundo"

//En el archivo también tenemos el export que en React se llama export default.


//JSX --> es una extension de la sintaxis de js la cual produce elementos HTML al procesarce por react, no es HTML, emite una sintaxis
//        muy similar al HTML con algunas variaciones
//JSX permite mantener en un mismo lugar la maqueta del componente junto con la logica de programacion

//CARACTERISTICAS:
//Como JSX es javascript, React DOM renombra algunos atributos de HTML con camelCase por ejemplo class será className en JSX
//Todos los elementos tienen que tener cierre, por ejemplo:
//En vez de <img src=".."> vamos a poner <img src=".."/> en caso de las etiquetas que no tienen cierre
//Si necesitamos imprimir valores podemos usar {} de manera similar a las tags de EJS
// let name = "Tomás"
// <h1 className= "title"> {name} </h1>
//En React no funcionan los bucles for o forEach por que necesitamos ciclos que retornen elementos como el map o filter.
let alumnos = ["Tomas", "Agus"]
{alumnos.map(function(alumno){
<li>{alumno}</li>
})}

//Entre {} va el javascript.
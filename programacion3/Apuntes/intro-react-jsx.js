//React es una libreria open source de javascript, modulo de npm que nos permite crear 
//interfaces de usuario, está desarrollada por Facebook.
//Su objetivo es crear una estructura de interfaz más rápida a la de html y css

//Como trabaja? React usa el virtual dom que es un reemplazo al dom tradicional
// El virtual dom es una copia ligera del dom que crea React y en cada cambio lo compara con el dom real

//Instalacion de React por medio de la terminal

// npx create-react-app mi-primer-proyeto   --> creacion de carpeta donde va a aestar el proyecto
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
//por lo tanto a ese div no lo tenemos que borrar.
//index.js le inserta al div "root" el elemento App que hace referencia al app.js que ES la aplicacion de react
//En el app.js es donde vamos a trabajar
//El entry point de una app en react es el div de id "root"
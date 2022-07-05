//GIT --> Software de control de versiones que funciona con una estructura local (repositorio local) y otra en la nube (repositorio remoto)
//1- Creamos repositorio de GitHub
//2- git clone "linkDeRepo" para clonarlo en el lugar donde queremos de la terminal (NO USAMOS NUNCA GIT INIT --> Camino manual, no hace falta)
//3- Definimos las credenciales del repostitorio --> git config user.name "nombredeusuario"
//                                               --> git config user.email "usuario@email.com"
//Subir información --> git add . (para agregar todo y seguir los archivos) --> git commit -m "mensaje" (crea punto de control) --> git push origin mastee (mandamos la nueva versión)
//git pull origin master (para actualizar a la version más actualizada del repostoriio)

//CONFLICTOS --> lo mejor es ser organizado y hacer los push en el momento, no estar esperando
//           --> se soluciona haciendo pull del repositorio remoto para actualizar la versión --> puede pasar que después de esto git te pida hacer el commit y el push para agregar tus cambios y listo
//                                                                                            -->CONFLICTO: pasa cuando el archivo que habias modificado fue modificado antes en la version del pull, tenemos que borrar la parte que este mal y hacemos git add ., commit y push

//Al hacer push GIT nos puede pedir un token.

//FLEXBOX
//Las cajas de flexbox van a actuar sobre los ejes Main(x) y Cross (y)
//Wrap permite que los elementos se acomoden en el espacio y no se aplasten
//Mover elementos eje Main --> usamos justify-content: center, space-between, space-around, end, start
//Mover elementos eje Cross --> align-content: flex-start, flex-end, center, stetch(valor por defecto que hace que los elementos se estiren en el Cross axis de la seccion)

//FLEXBOX

//Flexbox se comporta en React Native de la misma manera que lo hace en CSS con algunas excepciones para los valores default:

flexDirection: column //en vez de row
alignContent: flex-start //en vez de stretch
flexShrink: 0 // en vez de 1
//Flex soporta 1 solo parametro numerico, en css soporta 3 (flex-grow,flex-shrink y flex-basis)

//La propiedad flex permitira dividir la pantalla verticalmente para que los elementos ocupen proporcionalmente un lugar sin importar la longitud u orientacion del dispositivo.


//La propiedad Flex indicara el espacio que va a ocupar verticalmente cada item dentro de la pantalla.
//Si un elemento tiene definido flex:1 ocupará toda la pantalla.

//Si tenemos tres elementos con valores flex:1, flex:2, flex:3 en total suman 6.
//La primera va a usar 1/6 de la pantalla, la segunda 2/6 y la tercera 3/6.


//WHERE, LIMIT Y ORDER BY

//Firebase dispone de metodos predefinidos que permiten obtener un grupo de documentos, ordenadorlos de forma ascendente y descendente y tambien limitar la cantidad de resultados obtenidos.

//WHERE --> Firebase permite recuperar los documentos que cumplan una condicion determinada a traves de una consulta where(). Luego, usar get() o onSnapshot() para recuperar los resultados.

db.collection("posts").where("owner", "==", "ale@dh.com").onSnapshot(
	//...
)

//Where() recibe 3 parámetros, el primero: sobre que propiedad del documento debe buscar, segundo: criterio de comparacion, operador, tercero: el texto/patron que debe buscar.

//ORDER BY --> Firebase tambien permite obtener los documentos de una consulta en orden ascendente o descendente usando orderBy()

db.collection("posts").orderBy("createdAt", "desc").onSnapshot(
	//...
)

//orderBy() recibe 2 parámetros. Primero: sobre que propiedad del documento debe buscar, Segundo: el criterio de ordenamiento "asc" o "desc".

//LIMIT --> si necesitamos limitar la cantidad de documentos obtenidos de una consulta Firebase permite hacerlo usando el metodo limit()

db.collection("posts").limit(10).onSnapshot(
	//...
)

//limit() recibe como parámetro la cantidad de documentos a obtener en la consulta

//Podemos combinar where con order by teniendo en cuenta que deben aplicarse sobre el mismo campo


//Este ESTA BIEN
db.collection("posts")
.where("population", ">", 10000)
.orderBy("population", "desc")
onSnapshot(
)

//Firebase permite combinar Where y Order by si estan tomando el mismo campo.

//Este ESTA MAL
db.collection("posts")
.where("country", "==", "argentina")
.orderBy("population", "desc")
onSnapshot(
)

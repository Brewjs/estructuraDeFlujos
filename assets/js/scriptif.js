/*codigo secuencial
console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('5');
alert('Esto es una pausa');
console.log('6');
console.log('7');
console.log('8');
console.log('9');
console.log('10');
console.log('11');*/

//estructuras de control de flujo
// if - switch - for - while - do while
// simbolos de comparacion: > < >= <= == != === !==

//if
//(condicional o prueba logica)
//La(s) Instruccion(es) que se ejecutaran cuando la condicion se cumpla
//Estructura de una prueba logica: dato operadorCompaacion Dato

var datoUno = 4;
var datoDos = 5;


if(datoUno != datoDos){
console.log('esto se ejecuta siempre y cuando a condicion se cumpla');
}

console.log('esto se ejecuta despues del if')

//instruccion if - else
//definir el color favorito de una persona entre dos opciones: verde y rojo
//}else{
//La(s) Instruccion(es) que se ejecutaran cuando la condicion no se cumpla    
//}

var colorFavorito = prompt('Ingresa tu color favorito')
if(colorFavorito == 'verde'){
    console.log(`tu color favorito es: ${colorFavorito}`)
}else{
    console.log(`tu color favorito es: ${colorFavorito}`)
}
//if else if: para averiguar algo que van mas alla de dos opciones
//definir el color favorito de una persona entre tres opciones: verde, rojo y amarrillo

var colorFavorito = prompt('Ingresa tu color favorito entre verde, rojo y amarillo')
if(colorFavorito == 'verde'){
    console.log(`tu color favorito es: Verde`)
}else if(colorFavorito == 'Rojo'){
    console.log(`tu color favorito es: Rojo`)
}else{
    console.log(`tu color favorito es: amarillo`)
}

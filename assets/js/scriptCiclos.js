//estructuras de control de flujo
// if - switch - for - while - do while
// simbolos de comparacion: > < >= <= == != === !==

//for
//Solicita por pantalla 10 nombres e imprimelos en consolda

var hasta = prompt('¿Cuantos nombres necesitas?')
for (/*Inicio*/var i = 0; /*hasta*/i < hasta; /*de cuanto en cuanto*/i = i + 1) {
    var nombre = prompt('ingresa tu nombre');
    console.log(nombre);
}

//Contadores y acumuladores
//contador = contador + 1
// acumulador = acumulador + dato

//Ciclo While
//solicita por N nombre e implimelos en consola, el usuario dirá
//stop para cuando quiera dejar de ingresar nombres
//while(condicional o prueba logica){
//    instrucciones a ejecutar y repetirse mientras la condicion se cumpla
//}
var estado = prompt('ingrese "stop" si quiere salir')
while(estado != 'stop'){
    var nombre = prompt('ingresa tu nombre');
    console.log(nombre);
    estado = prompt('ingrese "stop" si quiere salir');
}

//Do While

do{
    var nombre = prompt('ingresa tu nombre');
    console.log(nombre);
    var estado = prompt('Ingrese "stop" si quiere salir')
}while(estado != 'stop')
{
    
}
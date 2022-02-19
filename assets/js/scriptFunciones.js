//Funciones - Intro
//generar un codigo que nos permita obtener un 
//numero aleatorio desde el sistema
//entre 0 y 10, mostratlo por consola

function numeroAleatorio(){
    var numeroAlAzar;
    numeroAlAzar = Math.trunc(Math.random() * 10) + 1;
    console.log(numeroAlAzar);
}

for (var i = 0; i < 10; i = i + 1){
    numeroAleatorio();
}



// lowerCamelCase
// UpperCamelCase
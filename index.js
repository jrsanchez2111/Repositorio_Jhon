// Funciones declarativas

//1 -> funcion para devolver el hola mundo
function hola(){
    console.log("Hola mundo");
    }
    hola();

//2 -> funcion para sacar el cuadrado de un numero
function alcuadrado(numero){
        return numero * numero;
        }
    console.log (alcuadrado(5));

//3 -> funcion para devolver el saludo definiendo variables
function saludo (nombre,apellido){
      console.log ("Hola "+ nombre, apellido);
    } 
let nombre = "Jhon";
let apellido ="Sanchez";
saludo(nombre,apellido);

//4 -> funcion para realizar la suma de dos numeros
function suma(a, b){ 
    return a+b;
}
console.log (suma(4,6));

//5 -> funcion para sacar la mitad de un numero
function mitad(numero){
    return numero / 2;
    }
console.log (mitad(100));

//6 -> funcion para imprimir los datos definiendo un objeto
function datos (){
let dato = {
    "edad" : 37,
    "telefono" : 3133920188,
    "direccion" : "Cra 2 # 4 - 00 sur",
};
return dato;
}
console.log ("Sus datos son: ",datos());

//7 funcion para imprimir los datos definiendo un objeto
function carros (){

let carro = {
    "Marca" : "Volvo",
    "Modelo" : 2020,
    "Color" : "Blaca",
    "Tipo" : "Camioneta",
    "Unico Dueño": true,
};
return carro;
}
console.log ("Sus datos son: ",carros());

//8 -> funcion para sumar dos numetos elevados al cubo
function sumacubos (a,b){
    let numeroa = a * a * a;
    let numerob = b * b * b;
    let suma = numeroa + numerob;
    return suma;
}
console.log(sumacubos (3,3));

//9 -> funcion para realizar la resta de dos numetos que estan elevados al cuadrado
function restacuadrados (a,b){
    let numeroa = a * a;
    let numerob = b * b;
    let resta = numeroa - numerob;
    return resta;
}
console.log(restacuadrados(9,3));

//10 -> funcion para calcular el area de un circulo dado un radio. Este ejemplo lo tome de una pagina de ejemplos de JS (pagina https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
function calcularAreaCirculo(radio) {
    return Math.PI * radio * radio;
}
console.log(calcularAreaCirculo(10)); 



//Funciones anonimas
//1 funcion para devolver el hola mundo
let saludo = function saludar() {
    return "Hola Mundo";
  };  
  console.log (saludo()); 

//2 -> funcion para concatenar dos palabras
let palabra1 = 'Hola';
let palabra2 = 'Mundo';

console.log(palabra1.concat(' ', palabra2));


//3 -> funcion para sacar el cuadrado de un numero
let alcuadrado =function(numero){
    return numero * numero;
}
console.log (alcuadrado(5));


//4 -> funcion para sacar la mitad de un numero
let mitad = function(numero){
    return numero / 2;
}
console.log (mitad(100));

//5 -> funcion para sumar dos numetos elevados al cubo
let sumacubos = function (a,b){
    let numeroa = a * a * a;
    let numerob = b * b * b;
    let suma = numeroa + numerob;
    return suma;
}
console.log(sumacubos (3,3));

//6 -> funcion para saber si un numero es par, delvolviendo un verdadero o falso
let esPar = function (numero) {
    return numero % 2 === 0;
}
console.log(esPar(5)); // verdaro
console.log(esPar(7)); // falso


//7 -> funcion para imprimir los datos definiendo un objeto
let datoscarro = function (){
    let carro ={
    "Marca" : "Volvo",
    "Modelo" : 2020,
    "Color" : "Blaca",
    "Tipo" : "Camioneta",
    "Ciudad" : "Bogota",
    "Unico Dueño": true,
};
}
console.log ("Sus datos son: ",datoscarro());

//8 -> funcion para imprimir los datos definiendo un objeto
let saludo = function(){
    let persona = {
        "Nombre":"Jhon",
        "Apellido":"Sanchez",
        "Edad": 37,
        "Casado": true,
        "Peso": "80 KG",
        "Estatura":"175 CM",
        "Hobbie": "Jugar video juegos",
        "Dirrecion":"Cra 2 # 4-00 sure",
        "Telefono":3133920188,
        "Email":"jhon.sanchez@gmail.com",
};
}
console.log ("Hola, como estas, estos son mis datos:",saludo());

//9 funcion para realizar la resta de dos numetos que estan elevados al cuadrado
let restacuadrados= function (a,b){
    let numeroa = a * a ;
    let numerob = b * b ;
    let resta = numeroa - numerob;
    return resta;
}
console.log(restacuadrados (9,3));

// funciones arrow

//1
// Este ejemplo lo tome de internet, pero no me es claro como usar este tipo de funcion.
let suma = (a,b) => a+b;
console.log(suma(3,3));









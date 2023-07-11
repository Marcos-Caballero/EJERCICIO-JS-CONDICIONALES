//PUNTO 1

var respuesta = prompt("¿Eres bellisimo/a?");

if (respuesta.toLowerCase() === "sí") {
    console.log("Ciertamente");
} else if (respuesta.toLowerCase() === "no") {
    console.log("No te creo");
} else {
    console.log("Respuesta inválida");
}

//PUNTO 2

var numero = prompt("Ingresa un número:");

numero = parseFloat(numero);

if (isNaN(numero)) {
    console.log("No ingresaste un número válido");
} else {
    if (numero % 2 === 0) {
    console.log(numero + " es divisible entre 2");
    } else {
    console.log(numero + " no es divisible entre 2");
    }
}

//PUNTO 3

var numero = prompt("Ingresa un número:");

numero = parseInt(numero);

if (isNaN(numero)) {
    alert("No ingresaste un número válido");
} else {
    if (numero % 2 === 0) {
    alert(numero + " es un número par");
    } else {
    alert(numero + " no es un número par");
    }
}

//PUNTO 4

var numeroCliente = prompt("Ingresa tu número de cliente:");

numeroCliente = parseInt(numeroCliente);

if (numeroCliente === 1000) {
    console.log("Ganaste un premio");
} else {
    console.log("Lo sentimos, sigue participando. Tu número de cliente es: " + numeroCliente);
}

var numero1 = prompt("Ingresa el primer número:");
var numero2 = prompt("Ingresa el segundo número:");

//PUNTO 5

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

if (isNaN(numero1) || isNaN(numero2)) {
    console.log("No ingresaste números válidos");
} else {
    if (numero1 < numero2) {
    console.log("El número (" + numero1 + ") es menor que (" + numero2 + ")");
    } else {
    console.log("El número (" + numero2 + ") es menor que (" + numero1 + ")");
    }
}

//PUNTO 6

var numero1 = prompt("Ingresa el primer número:");
var numero2 = prompt("Ingresa el segundo número:");
var numero3 = prompt("Ingresa el tercer número:");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);
numero3 = parseFloat(numero3);

if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    console.log("No ingresaste números válidos");
} else {
    if (numero1 > numero2 && numero1 > numero3) {
    console.log("El primer número (" + numero1 + ") es el mayor");
    } else if (numero2 > numero1 && numero2 > numero3) {
    console.log("El segundo número (" + numero2 + ") es el mayor");
    } else if (numero3 > numero1 && numero3 > numero2) {
    console.log("El tercer número (" + numero3 + ") es el mayor");
    } else {
    console.log("Hay al menos dos números iguales");
    }
}

//PUNTO 7

var diaSemana = prompt("Ingresa un día de la semana:");

if (diaSemana.toLowerCase() === "lunes") {
    console.log("Es lunes. ¡Oh shit, here we go again!");
} else if (diaSemana.toLowerCase() === "viernes") {
    console.log("Es viernes. ¡Eso fue todo, amigo!");
} else if (diaSemana.toLowerCase() === "sábado" || diaSemana.toLowerCase() === "domingo") {
    console.log("Es fin de semana. ¡Aprovecha lo que te queda!");
} else {
    console.log("Sigue con la rutina");
}

//PUNTO 8

var calificacion = prompt("Ingresa una calificación (entre 1 y 10):");

calificacion = parseFloat(calificacion);

if (calificacion >= 1 && calificacion <= 10) {
    if (calificacion < 6) {
    console.log("Reprobado");
    } else if (calificacion >= 6 && calificacion <= 8) {
    console.log("Regular");
    } else if (calificacion === 9) {
    console.log("Bien");
    } else {
    console.log("Excelente");
    }
} else {
    console.log("La calificación ingresada está fuera del rango válido");
}

//PUNTO 9

var topping = prompt("Elige un topping para tu helado: (oreo, KitKat, brownie)");

var precioHelado = 50; // Helado sin topping

if (topping.toLowerCase() === "oreo") {
  precioHelado += 10; // Valor del topping
    } else if (topping.toLowerCase() === "kitkat") {
  precioHelado += 15; // Valor del topping
    } else if (topping.toLowerCase() === "brownie") {
  precioHelado += 20; //Valor del topping
    } else {
    console.log("No tenemos este topping, lo sentimos.");
}

console.log("El precio del helado es: " + precioHelado + " MXN.");

//PUNTO 10

var nivel = prompt("Elige un nivel de programa: (Course, Carrera, Master)");
var costoMensual;
var duracion;

if (nivel.toLowerCase() === "course") {
    costoMensual = 4999;
    duracion = 2;
} else if (nivel.toLowerCase() === "carrera") {
    costoMensual = 3999;
    duracion = 6;
} else if (nivel.toLowerCase() === "master") {
    costoMensual = 2999;
    duracion = 12;
} else {
    console.log("No has elegido un nivel válido.");
}

var beca = prompt("¿Cuentas con alguna beca? (Facebook, Google, Jesua)");
var descuento = 0;

if (beca.toLowerCase() === "facebook") {
    descuento = 20;
} else if (beca.toLowerCase() === "google") {
    descuento = 15;
} else if (beca.toLowerCase() === "jesua") {
    descuento = 50;
} else {
    console.log("No has ingresado una beca válida.");
}

var precioDescuento = costoMensual - (costoMensual * descuento / 100);
var totalPagar = precioDescuento * duracion;

console.log("El precio mensual con descuento es: " + precioDescuento + " MXN.");
console.log("El total a pagar por el curso elegido es: " + totalPagar + " MXN.");

//PUNTO 11

var vehiculo = prompt("Ingresa el tipo de vehículo: (coche, moto, autobús)");
var precioKilometro;
var litrosConsumidos = parseFloat(prompt("Ingresa la cantidad de litros consumidos:"));

if (vehiculo.toLowerCase() === "coche") {
    precioKilometro = 0.20;
} else if (vehiculo.toLowerCase() === "moto") {
    precioKilometro = 0.10;
} else if (vehiculo.toLowerCase() === "autobús") {
    precioKilometro = 0.5;
} else {
    console.log("No has ingresado un tipo de vehículo válido.");
}

var costoTotal = precioKilometro * litrosConsumidos;

if (litrosConsumidos > 100) {
    costoTotal += 10;
} else {
    costoTotal += 5;
}

console.log("El total a pagar es: " + costoTotal + " MXN.");

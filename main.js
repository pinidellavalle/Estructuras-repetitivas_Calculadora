var numero1;
var operacion;
var numero2;
var resultado;

numero1 = prompt('ingresá el primer numero: ');
operacion = prompt('ingrese una operación matemática +, -, *, /');
numero2 = prompt('ingresá el segundo numero: ');

numero1=parseInt(numero1);
numero2=parseInt(numero2);

if (operacion == '+') {
    resultado = numero1 + numero2; 
} else if (operacion == '-') {
    resultado = numero1 - numero2;
} else if (operacion == '*') {
    resultado = numero1 * numero2;
} else if (operacion == '/') {
    resultado = numero1 / numero2;
} else {
    resultado = "Error";
}

document.write(resultado);



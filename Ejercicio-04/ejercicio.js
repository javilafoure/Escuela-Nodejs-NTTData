function sumar(valor1, valor2) {
    console.log('Funcion 1');
    console.log('La suma de los valores', valor1, 'y', valor2, 'es', valor1 + valor2);
}
function operaciones(valor1, valor2) {
    console.log('Funcion 2');
    console.log('La suma de los valores', valor1, 'y', valor2, 'es', valor1 + valor2);
    console.log('La resta de los valores', valor1, 'y', valor2, 'es', valor1 - valor2);
    console.log('La multiplicación de los valores', valor1, 'y', valor2, 'es', valor1 * valor2);
    console.log('La divición de los valores', valor1, 'y', valor2, 'es', valor2 / valor1);
}
var val = {
    valor1: 20,
    valor2: 30
};
sumar(val.valor1, val.valor2);
operaciones(val.valor1, val.valor2);

(() => {
let mensaje = 'hola';
let numero = 123;
let booleano: boolean = true; //false
let hoy: Date = new Date();

let cualquiercosa;
cualquiercosa = mensaje;
cualquiercosa = numero;
cualquiercosa = booleano;
cualquiercosa = hoy;

interface heroe {
    nombre: string;
    poder: string;
    fechaMuerte?: string;
    estado?: string;
}

let ironman: heroe = {
    nombre: 'Tony',
    poder: 'Filantropo',
    fechaMuerte: '03/05/2021'
};
ironman.estado = 'fallecido';

console.log(ironman);

})();
    
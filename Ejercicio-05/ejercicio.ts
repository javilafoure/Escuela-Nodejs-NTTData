

const mifuncion = function(a: string){
    return a.toUpperCase();
}

const mifuncionF = (a: string) => a.toUpperCase();

const sumarN = function (a: number, b: number){
    return a + b;
}

const sumarF = (a: number, b:number) => a + b;

const sinParam = function (){
    return true;
}

const sinParamF = () => true;

(() => {
let mensaje = 'hola';

if (true){
    let mensaje = 'Mundo';
}
 console.log(mensaje);
})();

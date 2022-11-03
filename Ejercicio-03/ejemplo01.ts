function saludar (nombre: string){
    console.log('hola', nombre)
    }

    interface heroe{
        nombre: string
        apellido: string
    }

    const ironman = {
        nombre: 'tony',
        apellido: 'stark'
    };
    saludar(ironman.nombre);
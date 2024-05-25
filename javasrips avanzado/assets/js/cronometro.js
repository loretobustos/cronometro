// Definición de la clase Cronometro
class Cronometro {
    constructor() {
        this.inicio = Date.now();
    }

    // Método para mostrar los minutos y segundos transcurridos
    mostrarTiempoTranscurrido() {
        const ahora = Date.now();
        const transcurrido = ahora - this.inicio;
        const minutos = Math.floor(transcurrido / 60000);
        const segundos = Math.floor((transcurrido % 60000) / 1000);
        return `${minutos} minutos y ${segundos} segundos`;
    }

    // Método para reiniciar el cronómetro
    reiniciar() {
        this.inicio = Date.now();
    }
}

// Crear una instancia del cronómetro
const cronometro = new Cronometro();

// Función para mostrar el tiempo transcurrido
function mostrarTiempo() {
    const tiempo = cronometro.mostrarTiempoTranscurrido();
    document.getElementById('tiempoTranscurrido').innerText = tiempo;
}

// Función para reiniciar el cronómetro
function reiniciarCronometro() {
    cronometro.reiniciar();
    document.getElementById('tiempoTranscurrido').innerText = '0 minutos y 0 segundos';
}

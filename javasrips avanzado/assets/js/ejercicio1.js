// Definición de la clase Profesor con métodos adicionales
class Profesor {
    constructor(nombre, edad, materia, experiencia, departamento) {
        this.nombre = nombre;
        this.edad = edad;
        this.materia = materia;
        this.experiencia = experiencia;
        this.departamento = departamento;
    }

    // Método para mostrar los atributos del profesor
    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad} años`);
        console.log(`Materia: ${this.materia}`);
        console.log(`Años de Experiencia: ${this.experiencia}`);
        console.log(`Departamento: ${this.departamento}`);
    }

    // Método para actualizar los años de experiencia
    actualizarExperiencia(nuevaExperiencia) {
        this.experiencia = nuevaExperiencia;
    }

    // Método para cambiar la materia que imparte el profesor
    cambiarMateria(nuevaMateria) {
        this.materia = nuevaMateria;
    }

    // Método estático para comparar la experiencia de dos profesores
    static compararExperiencia(profesor1, profesor2) {
        if (profesor1.experiencia > profesor2.experiencia) {
            console.log(`${profesor1.nombre} tiene más experiencia que ${profesor2.nombre}.`);
        } else if (profesor1.experiencia < profesor2.experiencia) {
            console.log(`${profesor2.nombre} tiene más experiencia que ${profesor1.nombre}.`);
        } else {
            console.log(`${profesor1.nombre} y ${profesor2.nombre} tienen la misma experiencia.`);
        }
    }
}

// Crear dos instancias de la clase Profesor
let profesor1 = new Profesor('Laura García', 45, 'Matemáticas', 20, 'Ciencias Exactas');
let profesor2 = new Profesor('Carlos Pérez', 50, 'Física', 25, 'Ciencias Exactas');

// Mostrar la información de los profesores
profesor1.mostrarInformacion();
profesor2.mostrarInformacion();

// Actualizar la experiencia de profesor1 y cambiar su materia
profesor1.actualizarExperiencia(22);
profesor1.cambiarMateria('Estadísticas');

// Mostrar la información actualizada de profesor1
console.log('Información actualizada de profesor1:');
profesor1.mostrarInformacion();

// Comparar la experiencia de los dos profesores
Profesor.compararExperiencia(profesor1, profesor2);

/* Resultado esperado:
Nombre: Laura García
Edad: 45 años
Materia: Matemáticas
Años de Experiencia: 20
Departamento: Ciencias Exactas

Nombre: Carlos Pérez
Edad: 50 años
Materia: Física
Años de Experiencia: 25
Departamento: Ciencias Exactas

Información actualizada de profesor1:
Nombre: Laura García
Edad: 45 años
Materia: Estadísticas
Años de Experiencia: 22
Departamento: Ciencias Exactas

Carlos Pérez tiene más experiencia que Laura García.
*/

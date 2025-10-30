// EJERCICIO 8 
class Persona {
  constructor(id, nombre, edad) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
  }

  toString() {
    return `${this.nombre} (id:${this.id}) - Edad: ${this.edad}`;
  }
}

class Estudiante extends Persona {
  constructor(id, nombre, edad, carrera, promedio) {
    super(id, nombre, edad);
    this.carrera = carrera;
    this.promedio = promedio;
  }

  estudiar(horas) {
    return `${this.nombre} estudio ${horas} horas.`;
  }

  toString() {
    return `Estudiante: ${this.nombre} - Carrera: ${this.carrera} - Promedio: ${this.promedio}`;
  }
}

class Profesor extends Persona {
  constructor(id, nombre, edad, area, sueldo) {
    super(id, nombre, edad);
    this.area = area;
    this.sueldo = sueldo;
  }

  darClase() {
    return `${this.nombre} esta dictando una clase de ${this.area}.`;
  }

  toString() {
    return `Profesor: ${this.nombre} - Area: ${this.area} - Sueldo: ${this.sueldo}`;
  }
}

// FUNCION PARA EJECUTAR EN LA PAGINA
function ejecutarEjercicio8() {
 
  const estudiante = new Estudiante(1, "Pedro", 20, "Ing. Sistemas", 17.5);
  const profesor = new Profesor(2, "Laura", 38, "Programacion", 4500);

  const arreglo = [estudiante, profesor];

  function mostrarElementos(arr) {
    return arr.map(el => el.toString()).join("\n");
  }

  const salida = "Objetos creados:\n" + mostrarElementos(arreglo) + "\n\nMetodos de ejemplo:\n" + estudiante.estudiar(3) + "\n" + profesor.darClase();
  document.getElementById("resultado8").innerText = salida;
}

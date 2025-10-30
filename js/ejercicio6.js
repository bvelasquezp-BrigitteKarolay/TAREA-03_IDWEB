// EJERCICIO 6 
class EquipoFutbol {
  constructor(nombre, ciudad) {
    this.nombre = nombre;
    this.ciudad = ciudad;
  }

  saludar() {
    return "Hola, somos " + this.nombre + " de " + this.ciudad;
  }

  toString() {
    return "Equipo: " + this.nombre + " (" + this.ciudad + ")";
  }
}

// FUNCION PARA EJECUTAR EN LA PAGINA
function ejecutarEjercicio6() {
  const nombre = prompt("Ingrese nombre del equipo:", "Los Tigres");
  const ciudad = prompt("Ingrese ciudad del equipo:", "Arequipa");
  if (!nombre || !ciudad) {
    document.getElementById("resultado6").innerText = "Operacion cancelada o datos invalidos.";
    return;
  }
  const equipo = new EquipoFutbol(nombre, ciudad);
  const salida = equipo.saludar() + "\n" + equipo.toString();
  document.getElementById("resultado6").innerText = salida;
}

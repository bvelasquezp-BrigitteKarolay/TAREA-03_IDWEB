// EJERCICIO 4
function cambiarCiudadResidencia(persona, nuevaCiudad) {
  if (persona && typeof persona === "object") {
    persona.ciudadResidencia = nuevaCiudad;
  }
  return persona;
}

// FUNCION PARA EJECUTAR EN LA PAGINA
function ejecutarEjercicio4() {
  const nombre = prompt("Ingrese nombre de la persona:", "Ana");
  const edadStr = prompt("Ingrese edad:", "28");
  const ciudad = prompt("Ingrese ciudadResidencia actual:", "Arequipa");
  const otra = prompt("Ingrese otra propiedad (ej: profesion):", "Ingeniera");

  if (nombre === null || edadStr === null || ciudad === null) {
    document.getElementById("resultado4").innerText = "Operacion cancelada.";
    return;
  }

  const edad = Number(edadStr) || edadStr;
  const persona = {
    nombre: nombre,
    edad: edad,
    ciudadResidencia: ciudad,
    otraPropiedad: otra
  };

  const nuevaCiudad = prompt("Ingrese la nueva ciudadResidencia:", "Cusco");
  if (nuevaCiudad === null) {
    document.getElementById("resultado4").innerText = "Operacion cancelada.";
    return;
  }

  const antes = JSON.stringify(persona, null, 2);
  cambiarCiudadResidencia(persona, nuevaCiudad);
  const despues = JSON.stringify(persona, null, 2);

  document.getElementById("resultado4").innerText =
    "Objeto antes:\n" + antes + "\n\nObjeto despues:\n" + despues;
}

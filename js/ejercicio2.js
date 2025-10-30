// EJERCICIO 2 
function contarNumerosConMap(arr) {
  const conteo = new Map();
  arr.forEach(n => {
    conteo.set(n, (conteo.get(n) || 0) + 1);
  });
  return conteo;
}

// FUNCION PARA EJECUTAR EN LA PAGINA
function ejecutarEjercicio2() {
  const entrada = prompt("Ingrese numeros separados por coma (ej: 2,3,2,5):", "2,3,2,5,3,2");
  if (!entrada) {
    document.getElementById("resultado2").innerText = "Operacion cancelada o datos invalidos.";
    return;
  }
  const arr = entrada.split(",").map(x => {
    const v = Number(x.trim());
    return isNaN(v) ? x.trim() : v;
  });

  const conteo = contarNumerosConMap(arr);
  
  // Convertir a objeto legible
  const salida = {};
  conteo.forEach((cantidad, valor) => {
    salida[valor] = cantidad;
  });

  document.getElementById("resultado2").innerText =
    "Conteo de elementos: " + JSON.stringify(salida, null, 2);
}

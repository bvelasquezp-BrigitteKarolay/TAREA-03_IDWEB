// EJERCICIO 3
function invertirMap(mapOriginal) {
  const invertido = new Map();
  mapOriginal.forEach((valor, clave) => {
    invertido.set(valor, clave);
  });
  return invertido;
}

// FUNCION PARA EJECUTAR EN LA PAGINA
function ejecutarEjercicio3() {
  const entrada = prompt("Ingrese pares clave:valor separados por coma (ej: Peru:Lima,Chile:Santiago):", "Peru:Lima,Chile:Santiago");
  if (!entrada) {
    document.getElementById("resultado3").innerText = "Operacion cancelada o datos invalidos.";
    return;
  }

  const mapaOriginal = new Map();
  entrada.split(",").forEach(par => {
    const [k, v] = par.split(":").map(s => s ? s.trim() : "");
    if (k !== undefined && v !== undefined && k !== "" && v !== "") {
      mapaOriginal.set(k, v);
    }
  });

  const mapaInvertido = invertirMap(mapaOriginal);
  document.getElementById("resultado3").innerText =
    "Map original: " + JSON.stringify(Array.from(mapaOriginal.entries()), null, 2) +
    "\n\nMap invertido: " + JSON.stringify(Array.from(mapaInvertido.entries()), null, 2);
}

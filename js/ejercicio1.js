// EJERCICIO 1 
function crearMapDesdeArreglos(claves, valores) {
  const mapa = new Map();
  const n = Math.min(claves.length, valores.length);
  for (let i = 0; i < n; i++) {
    mapa.set(claves[i], valores[i]);
  }
  return mapa;
}

// FUNCION PARA EJECUTAR EN LA PAGINA
function ejecutarEjercicio1() {
  const entradaClaves = prompt("Ingrese claves separadas por coma (ej: a,b,c):", "a,b,c");
  const entradaValores = prompt("Ingrese valores separados por coma (ej: 1,2,3):", "1,2,3");
  if (!entradaClaves || !entradaValores) {
    document.getElementById("resultado1").innerText = "Operacion cancelada o datos invalidos.";
    return;
  }

  const claves = entradaClaves.split(",").map(s => s.trim());
  const valores = entradaValores.split(",").map(s => {
    const n = Number(s.trim());
    return isNaN(n) ? s.trim() : n;
  });

  const mapa = crearMapDesdeArreglos(claves, valores);
  // MOSTRAR COMO LISTA DE PARES
  document.getElementById("resultado1").innerText =
    "Map creado: " + JSON.stringify(Array.from(mapa.entries()), null, 2);
}

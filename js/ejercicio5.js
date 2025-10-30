// EJERCICIO 5 
function mostrarPropiedadesYContar(obj) {
  let contador = 0;
  for (const clave in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, clave)) {
      console.log(clave + ":", obj[clave]);
      contador++;
    }
  }
  return contador;
}

// FUNCION PARA EJECUTAR EN LA PAGINA
function ejecutarEjercicio5() {
  const entrada = prompt("Ingrese pares clave:valor separados por coma (ej: a:1,b:dos,c:3):", "a:1,b:dos,c:3");
  if (!entrada) {
    document.getElementById("resultado5").innerText = "Operacion cancelada o datos invalidos.";
    return;
  }

  const obj = {};
  entrada.split(",").forEach(par => {
    const [k, v] = par.split(":").map(s => s ? s.trim() : "");
    if (k) {
      const num = Number(v);
      obj[k] = isNaN(num) ? v : num;
    }
  });

  // MOSTRAR EN CONSOLA
  console.log("PROPIEDADES DEL OBJETO:");
  const cantidad = mostrarPropiedadesYContar(obj);

  // ADEMÁS MOSTRAR EN LA PAGINA PARA FACILIDAD DE PRUEBA
  let texto = "Objeto recibido:\n" + JSON.stringify(obj, null, 2) + "\n\n";
  texto += "Cantidad de propiedades: " + cantidad;
  document.getElementById("resultado5").innerText = texto;
}

// EJERCICIO 12 
function ej12_infoContenedor() {
  const cont = document.getElementById('miContenedor');
  if (!cont) {
    console.warn("EJ12 - NO SE ENCONTRO EL CONTENEDOR");
    return;
  }

  const padre = cont.parentElement;
  const primerHijo = cont.firstElementChild;
  const ultimoHijo = cont.lastElementChild;
  const nodosHijos = cont.childNodes; 

  console.log("EJ12 - CONTENEDOR:", cont);
  console.log("EJ12 - ELEMENTO PADRE:", padre);
  console.log("EJ12 - PRIMER HIJO (elemento):", primerHijo);
  console.log("EJ12 - ULTIMO HIJO (elemento):", ultimoHijo);
  console.log("EJ12 - LISTA DE NODOS HIJOS (incluye texto):", nodosHijos);
  console.log("EJ12 - TOTAL NODOS HIJOS:", nodosHijos.length);
}

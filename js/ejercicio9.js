// EJERCICIO 9 
function ej9_selecciones() {
  // PRIMER PARRAFO POR ID
  const p1 = document.getElementById('p1');
  console.log("EJ9 - PRIMER PARRAFO (getElementById):", p1);
  if (p1) console.log("EJ9 - TEXTO DEL PRIMER PARRAFO:", p1.textContent);

  // TODOS LOS PARRAFOS POR ETIQUETA
  const todosParrafos = document.getElementsByTagName('p');
  console.log("EJ9 - TODOS LOS PARRAFOS (getElementsByTagName):", todosParrafos);
  console.log("EJ9 - TOTAL PARRAFOS:", todosParrafos.length);
  Array.from(todosParrafos).forEach((p, i) => {
    console.log(`EJ9 - PARRAFO ${i + 1} - TEXT:`, p.textContent);
  });

  // TODOS LOS ELEMENTOS CON UNA CLASE COMUN
  const clasePar = document.getElementsByClassName('par');
  console.log("EJ9 - ELEMENTOS CON CLASE 'par' (getElementsByClassName):", clasePar);
  console.log("EJ9 - TOTAL ELEMENTOS CON CLASE 'par':", clasePar.length);
  Array.from(clasePar).forEach((el, i) => {
    console.log(`EJ9 - ELEMENTO CLASE 'par' ${i + 1} - TEXT:`, el.textContent);
  });
}

// EJERCICIO 11 
function ej11_lista() {
  const cont = document.getElementById('contenedorLista');
  if (!cont) {
    console.warn("EJ11 - NO SE ENCONTRO CONTENEDOR");
    return;
  }

  // LIMPIAR CONTENIDO PREVIO
  cont.innerHTML = "";

  // CREAR UL Y TRES LI INICIALES
  const ul = document.createElement('ul');
  ul.id = "miUl";
  for (let i = 1; i <= 3; i++) {
    const li = document.createElement('li');
    li.textContent = "Elemento " + i;
    ul.appendChild(li);
  }
  cont.appendChild(ul);
  console.log("EJ11 - UL CREADO CON 3 ELEMENTOS:", ul);

  // AGREGAR CUARTO ELEMENTO
  const li4 = document.createElement('li');
  li4.textContent = "Elemento 4";
  ul.appendChild(li4);
  console.log("EJ11 - SE AGREGO EL CUARTO ELEMENTO:", li4.textContent);

  // ELIMINAR SEGUNDO ELEMENTO (indice 1)
  const segundo = ul.children[1];
  if (segundo) {
    ul.removeChild(segundo);
    console.log("EJ11 - SE ELIMINO EL SEGUNDO ELEMENTO");
  } else {
    console.warn("EJ11 - NO EXISTIA SEGUNDO ELEMENTO PARA ELIMINAR");
  }

  // MOSTRAR LISTA FINAL EN CONSOLA
  const items = Array.from(ul.children).map(n => n.textContent);
  console.log("EJ11 - LISTA FINAL:", items);
}

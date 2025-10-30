// EJERCICIO 10 
function ej10_modificarH1() {
  const h1 = document.querySelector('h1');
  if (!h1) {
    console.warn("EJ10 - NO SE ENCONTRO ELEMENTO H1");
    return;
  }

  // CAMBIAR TEXTO
  h1.textContent = "DOM modificado con JavaScript";

  // CAMBIAR ESTILOS (COLOR Y TAMANO)
  h1.style.color = "#579af1ff";    
  h1.style.fontSize = "2.2rem";   
  // MOSTRAR EN CONSOLA LO MODIFICADO
  console.log("EJ10 - H1 MODIFICADO:", h1);
  console.log("EJ10 - NUEVO TEXTO:", h1.textContent);
  console.log("EJ10 - ESTILOS APLICADOS:", { color: h1.style.color, fontSize: h1.style.fontSize });
}

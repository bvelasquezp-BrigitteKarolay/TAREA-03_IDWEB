// EJERCICIO 7 
class CuentaBancaria {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(monto) {
    if (typeof monto !== "number" || monto <= 0) return this.saldo;
    this.saldo += monto;
    return this.saldo;
  }

  retirar(monto) {
    if (typeof monto !== "number" || monto <= 0) return null;
    if (monto > this.saldo) return null; 
    this.saldo -= monto;
    return monto;
  }

  toString() {
    return this.titular + " - Saldo: " + this.saldo;
  }
}

// FUNCION PARA EJECUTAR EN LA PAGINA
function ejecutarEjercicio7() {
  const titular = prompt("Ingrese nombre del titular:", "Marta");
  const saldoInicialStr = prompt("Ingrese saldo inicial (numero):", "1000");
  if (!titular || saldoInicialStr === null) {
    document.getElementById("resultado7").innerText = "Operacion cancelada.";
    return;
  }
  const saldoInicial = Number(saldoInicialStr) || 0;
  const cuenta = new CuentaBancaria(titular, saldoInicial);

  const montoDeposito = Number(prompt("Ingrese monto a depositar:", "500"));
  cuenta.depositar(montoDeposito);

  const montoRetirar = Number(prompt("Ingrese monto a retirar:", "300"));
  const retiro = cuenta.retirar(montoRetirar);

  const texto = "Titular: " + cuenta.titular + "\nSaldo final: " + cuenta.saldo + "\nRetiro efectuado: " + (retiro === null ? "No valido o saldo insuficiente" : retiro);
  document.getElementById("resultado7").innerText = texto;
}

import { Cuenta } from "./cuenta.js";

export class CuentaCorriente extends Cuenta {
  limiteSobregiro;

  constructor(titular, saldoInicial = 0, limiteSobregiro = 1000) {
    super(titular, "Cuenta Corriente", saldoInicial);
    this.limiteSobregiro = limiteSobregiro;
  }

  extraer(monto) {
    if (monto > this.saldo + this.limiteSobregiro) {
      throw new Error("Saldo insuficiente para la extracción.");
    }
    super.saldo = this.saldo - monto;
  }
} 
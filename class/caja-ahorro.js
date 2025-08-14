import { Cuenta } from "./cuenta.js";

export class CajaDeAhorro extends Cuenta {
  limiteExtraccion;
  extracionesRealizadas;

  constructor(titular, saldoInicial = 0, limiteExtraccion = 3) {
    super(titular, "Caja de Ahorro", saldoInicial);
    this.limiteExtraccion = limiteExtraccion;
    this.extracionesRealizadas = 0;
  }

  extraer(monto) {
    if (this.extracionesRealizadas >= this.limiteExtraccion) {
      throw new Error("Límite de extracciones alcanzado.");
    }

    super.extraer(monto);
    this.extracionesRealizadas++;
  }
}
import { CajaDeAhorro } from "./caja-ahorro.js";
import { CuentaCorriente } from "./cuenta-corriente.js";

export class Banco {

  nombre;
  #listaCuentas = [];
  #listaClientes = [];

  constructor(nombre){
    this.nombre = nombre;
  }

  agregarCliente(titular) {
    this.#listaClientes.push(titular)
  }

  abrirCuenta(titular, tipoCuenta, saldoInicial) {
    let cuenta;
    if (tipoCuenta.toLowerCase() === "ahorro") {
      cuenta = new CajaDeAhorro(titular, saldoInicial);
    } else if (tipoCuenta.toLowerCase() === "corriente") {
      cuenta = new CuentaCorriente(titular, saldoInicial);
    } else {
      throw new Error("Tipo de cuenta no válido. Escriba ahorro o corriente.");
    }
    this.#listaCuentas.push(cuenta);
    this.agregarCliente(titular);
    return cuenta;
  }

  buscarCuenta(dni) {
    return this.#listaCuentas.find(cuenta => cuenta.titular.dni === dni);
  }

  transferir(dniOrigen, dniDestino, importe) {
    const cuentaOrigen = this.buscarCuenta(dniOrigen);
    const cuentaDestino = this.buscarCuenta(dniDestino);

    cuentaOrigen.extraer(importe);
    cuentaDestino.depositar(importe);
  }

  get listaCuentas() {
    return this.#listaCuentas;
  }

  get listaClientes() {
    return this.#listaClientes;
  }
}
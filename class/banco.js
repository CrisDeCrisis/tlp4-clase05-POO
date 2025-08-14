import { Cuenta } from "./cuenta.js";

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
    const cuenta = new Cuenta(titular, tipoCuenta, saldoInicial);
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
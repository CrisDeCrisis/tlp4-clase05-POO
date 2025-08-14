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

  abrirCuenta() {
    const cuenta = new Cuenta(titular, tipoCuenta, saldoInicial);
    this.#listaCuentas.push(cuenta);
    this.agregarCliente(titular);
    return cuenta;
  }

  buscarCuenta(dni) {
    return this.#listaCuentas.find(cuenta => cuenta.dni === dni);
  }

  transferir(dniOrigen, dniDestino, importe) {
    const cuentaOrigen = this.buscarCuenta(dniOrigen);
    const cuentaDestino = this.buscarCuenta(dniDestino);

    if (!cuentaOrigen) throw new Error('Cuenta de origen no encontrada');
    if(!cuentaDestino) throw new Error('Cuenta de destino no encontrada');

    cuentaOrigen.extraer(importe);
    cuentaDestino.depositar(importe);
  }

  listarCuentas() {
    return this.#listaCuentas;
  }

  listarClientes() {
    return this.#listaClientes;
  }
}
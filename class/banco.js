class Banco {

  nombre;
  #listaCuentas = [];
  #listaClientes = [];

  constructor(nombre, listaClientes, listaCuentas){
    this.nombre = nombre;
  }
}
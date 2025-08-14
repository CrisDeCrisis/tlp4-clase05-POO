import PromptSync from "prompt-sync";
import { Banco } from "./class/banco.js";
import { Titular } from "./class/titular.js";

const prompt = PromptSync({sigint: true})

const banco = new Banco("Banco Formosa");

const mostrarMenu = () => {
  console.log("\n--- Bienvenido a Banco Formosa ---");
  console.log("Ingrese el número de la opción para realizar una operación");
  console.log("1. Abrir cuenta");
  console.log("2. Depositar");
  console.log("3. Extraer");
  console.log("4. Consultar saldo");
  console.log("5. Transferir");
  console.log("6. Salir");

  return prompt("Seleccione una opción: ")
}

let opcion = "";

while (opcion !== "6") {
  opcion = mostrarMenu();


  switch(opcion) {
    case "1":
      const nombre = prompt("Nombre: ");
      const apellido = prompt("Apellido: ");
      const dni = prompt("DNI: ")
      const domicilio = prompt("Domicilio: ");
      const telefono = prompt("Teléfono: ");

      const titular = new Titular(nombre, apellido, dni, domicilio, telefono);
      const tipoCuenta = prompt("Tipo de cuenta (Ahorro/Corriente): ");
      const saldoInicial = parseFloat(prompt("Saldo inicial: "));

      try {
        const cuenta = banco.abrirCuenta(titular, tipoCuenta, saldoInicial);
        console.log(`Cuenta ${tipoCuenta} abierta con éxito. Titular: ${cuenta.titular.nombre} ${cuenta.titular.apellido}, Saldo inicial: $${cuenta.saldo}`);
      } catch (error) {
        console.error(error.message);
      }
      break;

    case "2":
      const dniDeposito = prompt("Ingrese el DNI del titular: ");
      const montoDeposito = parseFloat(prompt("Ingrese el monto a depositar: "));
      const cuentaDeposito = banco.buscarCuenta(dniDeposito);

      if (!cuentaDeposito) {
        console.error("Cuenta no encontrada.");
        break;
      }

      try  {
        cuentaDeposito.depositar(montoDeposito);
        console.log(`Depósito realizado. Nuevo saldo: $${cuentaDeposito.saldo}`);
      } catch (error) {
        console.error(error.message);
      }

      break;

    case "3":
      const dniExtraccion = prompt("Ingrese el DNI del titular: ");
      const montoExtraccion = parseFloat(prompt("Ingrese el monto a extraer: "));
      const cuentaExtraccion = banco.buscarCuenta(dniExtraccion);

      if (!cuentaExtraccion) {
        console.error("Cuenta no encontrada.");
        break;
      }

      try {
        cuentaExtraccion.extraer(montoExtraccion);
        console.log(`Extracción realizada. Nuevo saldo: $${cuentaExtraccion.saldo}`);
      }
      catch (error) {
        console.error(error.message);
      }

      break;

    case "4":
      const dniConsulta = prompt("Ingrese el DNI del titular: ");
      const cuentaConsulta = banco.buscarCuenta(dniConsulta);

      if (!cuentaConsulta) {
        console.error("Cuenta no encontrada.");
        break;
      }

      console.log(`Saldo actual: $${cuentaConsulta.saldo}`);
      break;

    case "5":
      const dniOrigen = prompt("Ingrese el DNI de la cuenta de origen: ");

      const cuentaOrigen = banco.buscarCuenta(dniOrigen);

      if (!cuentaOrigen) {
        console.error("Cuenta de origen no encontrada.");
        break;
      }

      if (cuentaOrigen.saldo <= 0) {
        console.error("La cuenta de origen no tiene saldo suficiente para realizar una transferencia.");
        break;
      }

      const importe = parseFloat(prompt("Ingrese el importe a transferir: "));

      if (importe > cuentaOrigen.saldo) {
        console.error("El importe a transferir no puede ser mayor que el saldo de la cuenta de origen.");
        break;
      }

      if (importe <= 0) {
        console.error("El importe a transferir debe ser positivo.");
        break;
      }

      const dniDestino = prompt("Ingrese el DNI de la cuenta de destino: ");

      const cuentaDestino = banco.buscarCuenta(dniDestino);
      if (!cuentaDestino) {
        console.error("Cuenta de destino no encontrada.");
        break;
      }
      
      try {
        banco.transferir(dniOrigen, dniDestino, importe);
        console.log("Transferencia realizada con éxito.");
      } catch (error) {
        console.error(error.message);
      }

      break;

  }
}
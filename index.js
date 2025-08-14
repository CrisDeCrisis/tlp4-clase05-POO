import PromptSync from "prompt-sync";
import { Banco } from "./class/banco";
import { Titular } from "./class/titular";

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
  }
}
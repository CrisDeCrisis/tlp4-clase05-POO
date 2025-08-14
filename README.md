# Proyecto: Banco - Programación Orientada a Objetos (POO)

Este proyecto es una simulación básica de un sistema bancario desarrollado en JavaScript, aplicando los **pilares fundamentales de la Programación Orientada a Objetos (POO)**: **Abstracción, Encapsulamiento, Herencia y Polimorfismo**.

## Estructura del Proyecto

- `index.js`: Archivo principal para pruebas y ejecución del sistema.
- `class/`
  - `banco.js`: Clase principal que gestiona las cuentas y titulares.
  - `caja-ahorro.js`: Clase que representa una Caja de Ahorro, hereda de Cuenta.
  - `cuenta-corriente.js`: Clase que representa una Cuenta Corriente, hereda de Cuenta.
  - `cuenta.js`: Clase base abstracta para las cuentas bancarias.
  - `titular.js`: Clase que representa a los titulares de las cuentas.

## Pilares de la POO aplicados

### 1. Abstracción

Se identifican las entidades principales del dominio bancario (Banco, Cuenta, Titular) y se modelan como clases.

### 2. Encapsulamiento

Los atributos de las clases están protegidos y sólo pueden ser accedidos o modificados mediante métodos públicos (getters/setters o métodos específicos).

### 3. Herencia

Las clases `CajaAhorro` y `CuentaCorriente` heredan de la clase base `Cuenta`, reutilizando y extendiendo su funcionalidad.

### 4. Polimorfismo

Las clases hijas (`CajaAhorro`, `CuentaCorriente`) pueden redefinir métodos de la clase base (`Cuenta`), permitiendo comportamientos específicos según el tipo de cuenta.

## Diagrama de clases

![diagrama_de_clases](/img/diagrama_clases.png)

## Requisitos

- Node.js instalado

## Ejecución

Clonar este repositorio, dirigirse a la carpeta del proyecto desde la consola y ejecutar:

```bash
npm i
```

Puedes ejecutar el archivo principal con:

```bash
node index.js
```

---

Este proyecto es un ejemplo educativo para comprender y aplicar los conceptos de la Programación Orientada a Objetos en JavaScript.

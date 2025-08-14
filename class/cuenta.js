export class Cuenta {
    titular;
    tipoDeCuenta;
    #saldo;

    constructor(titular, tipoDeCuenta, saldoInicial = 0) {

        this.titular = titular;
        this.tipoDeCuenta = tipoDeCuenta;
        this.#saldo = saldoInicial >= 0 ? saldoInicial : 0;

    }

    set saldo(nuevoSaldo) {

        if (nuevoSaldo < 0) {
            console.error("El saldo no puede ser negativo.");
        }

        this.#saldo = nuevoSaldo;

    }

    depositar(monto) {
        if (monto <= 0) throw new Error('El monto a ingresar no puede ser negativo');
        this.#saldo += monto;
    }

    extraer(monto) {
        if (monto <= 0) throw new Error('El monto a extraer no puede ser negativo');
        if (monto >= this.#saldo) throw new Error('Fondos insuficientes');
        this.#saldo -= monto;
    }

    get saldo() {
        return this.#saldo;
    }
}
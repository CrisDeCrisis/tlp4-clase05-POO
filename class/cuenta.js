class cuenta {
    titular;
    tipoDeCuenta;
    #saldo;

    constructor(titular, tipoDeCuenta, saldoInicial = 0) {

        this.titular = titular;
        this.tipoDeCuenta = tipoDeCuenta;
        this.#saldo = saldoInicial >= 0 ? saldoInicial : 0;

    }

    set saldo(saldoInicial) {

        if (nuevoSaldo < 0) {
            console.error("El saldo no puede ser negativo.");
        }

        this.#saldo = nuevoSaldo;

    }

}
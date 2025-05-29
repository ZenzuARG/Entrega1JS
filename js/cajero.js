// Datos del usuario
const pinCorrecto = "1234";
let saldo = 100000; // Saldo inicial
let intentos = 3;

// Función para iniciar sesión
function iniciarSesion() {
    while (intentos > 0) {
        let pinIngresado = prompt("Bienvenido al Cajero Automático\n\nPor favor ingrese su PIN:");
        if (pinIngresado === pinCorrecto) {
            menuPrincipal();
            return;
        } else {
            intentos--;
            alert(`PIN incorrecto. Le quedan ${intentos} intento(s).`);
        }
    }
    alert("Ha excedido el número de intentos. Tarjeta bloqueada.");
}

// Función principal que muestra el menú
function menuPrincipal() {
    let opcion;
    do {
        opcion = prompt(
            "Seleccione una opción:\n" +
            "1 - Consultar saldo\n" +
            "2 - Retirar dinero\n" +
            "3 - Ingresar dinero\n" +
            "4 - Salir"
        );

        switch (opcion) {
            case "1":
                consultarSaldo();
                break;
            case "2":
                retirarDinero();
                break;
            case "3":
                ingresarDinero();
                break;
            case "4":
                alert("Gracias por utilizar el cajero automático. ¡Hasta luego!");
                break;
            default:
                alert("Opción no válida. Intente de nuevo.");
        }
    } while (opcion !== "4");
}

// Función para consultar saldo
function consultarSaldo() {
    alert(`Su saldo actual es: $${saldo}`);
    console.log("Consulta de saldo realizada. Saldo: $" + saldo);
}

// Función para retirar dinero
function retirarDinero() {
    let monto = parseInt(prompt("Ingrese el monto que desea retirar:"));

    if (isNaN(monto) || monto <= 0) {
        alert("Monto no válido. Intente de nuevo.");
        return;
    }

    if (monto > saldo) {
        alert("Fondos insuficientes.");
        return;
    }

    let confirmar = confirm(`¿Está seguro que desea retirar $${monto}?`);
    if (confirmar) {
        saldo -= monto;
        alert(`Retiro exitoso. Nuevo saldo: $${saldo}`);
        console.log("Retiro realizado. Nuevo saldo: $" + saldo);
    } else {
        alert("Operación cancelada.");
    }
}

// 🆕 Función para ingresar dinero
function ingresarDinero() {
    let monto = parseInt(prompt("Ingrese el monto que desea depositar:"));

    if (isNaN(monto) || monto <= 0) {
        alert("Monto no válido. Intente de nuevo.");
        return;
    }

    saldo += monto;
    alert(`Depósito exitoso. Nuevo saldo: $${saldo}`);
    console.log("Depósito realizado. Nuevo saldo: $" + saldo);
}

// Iniciar el simulador
iniciarSesion();

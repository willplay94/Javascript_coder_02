
const ingresosArray = []
const gastosArray = []
let respuestaUsuario = ""
let datoIngresoMonto = 0
let datoIngresoNombre = ""
let datoIngresoCategoria = ""
let datoGastoMonto = 0
let datoGastoNombre = ""
let datoGastoCategoria = ""
let montoFormateado = ""
let confirmacionIngreso = false
let confirmacionGasto = false
let respuestaInvalida = true

function agregarDatosFinancieros() {
    while (respuestaInvalida == true) {

        respuestaUsuario = prompt('¿Que dato deseas agregar?\n A. Ingreso \n B. Gasto\n C. Mostrar datos actuales')

        respuestaUsuario = respuestaUsuario.toLowerCase()
        console.log('Esto puso el usuario ' + respuestaUsuario)

        switch (respuestaUsuario) {
            case 'a':
                while (!confirmacionIngreso) {
                    datoIngresoNombre = prompt('¿Cúal es el nombre del ingreso? ')
                    datoIngresoCategoria = prompt('¿Qué categoría es el ingreso? ')
                    datoIngresoMonto = Number(prompt('¿Qué monto deseas ingresar? '))

                    montoFormateado = datoIngresoMonto.toLocaleString('es-CO')

                    confirmacionIngreso = confirm('Ingreso para registrar\nNombre: ' + datoIngresoNombre + '\nCategoria: ' + datoIngresoCategoria + '\nMonto: $' + montoFormateado + '\n¿Quieres guardarlo?')

                    if (confirmacionIngreso == true) {
                        console.log('Confirmo ingreso')

                        ingresosArray.push({
                            nombre: datoIngresoNombre,
                            categoria: datoIngresoCategoria,
                            monto: datoIngresoMonto
                        })

                        console.log('Ingreso para registrar\nNombre: ' + datoIngresoNombre + '\nCategoria: ' + datoIngresoCategoria + '\nMonto: ' + datoIngresoMonto)
                        break

                    } else {
                        console.log('El usuario cancelo')
                        alert('Cancelaste el dato ingresalo nuevamente')
                    }
                }
                respuestaInvalida = false
                confirmacionIngreso = false
                break
            case 'b':
                while (!confirmacionGasto) {
                    datoGastoNombre = prompt('¿Cúal es el nombre del gasto? ')
                    datoGastoCategoria = prompt('¿Qué categoría es el gasto? ')
                    datoGastoMonto = Number(prompt('¿Qué monto deseas ingresar? '))

                    montoFormateado = datoGastoMonto.toLocaleString('es-CO')

                    confirmacionGasto = confirm('Gasto para registrar\nNombre: ' + datoGastoNombre + '\nCategoria: ' + datoGastoCategoria + '\nMonto: $' + montoFormateado + '\n¿Quieres guardarlo?')

                    if (confirmacionGasto == true) {
                        console.log('Confirmo gasto')

                        gastosArray.push({
                            nombre: datoGastoNombre,
                            categoria: datoGastoCategoria,
                            monto: datoGastoMonto
                        })

                        console.log('Gasto para registrar\nNombre: ' + datoGastoNombre + '\nCategoria: ' + datoGastoCategoria + '\nMonto: ' + datoGastoMonto)
                        break

                    } else {
                        console.log('El usuario cancelo')
                        alert('Cancelaste el dato ingresalo nuevamente')
                    }
                }
                respuestaInvalida = false
                confirmacionGasto = false
                break
            case 'c':
                alert('Estos son los ingresos registrados: ' + ingresosArray + '\nEstos son los gastos registrados: ' + gastosArray)
                console.log('ingresos:\n' + ingresosArray)
                console.log('gastos:\n' + gastosArray)
                respuestaInvalida = false
                break
            default:
                alert('Opción no valida')
                respuestaInvalida = true
                break
        }
    }
}

agregarDatosFinancieros()
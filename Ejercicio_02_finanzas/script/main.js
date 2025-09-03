
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
let confirmacionGuardadoDatos = false
let respuestaInvalida = true

//FUNCIONES========================================================

//Funcion para agregar datos financieros
function agregarDatosFinancieros() {
    while (respuestaInvalida == true) {
        respuestaUsuario = prompt('¿Que dato deseas agregar?\n A. Ingreso \n B. Gasto\n C. Mostrar datos actuales')

        //Respuesta usuario
        respuestaUsuario = respuestaUsuario.toLowerCase()
        console.log('Esto puso el usuario ' + respuestaUsuario)

        //Bucle de opciones dependiendo de la respuesta del usuario
        switch (respuestaUsuario) {
            case 'a':
                //Para registrar un ingreso 
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

                        console.log(ingresosArray)
                        console.log(gastosArray)
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
                //Para registrar un gasto
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
                //Para mostrar los datos registrados
                alert('Estos son los ingresos registrados: ' + 'Ingresos: ' + JSON.stringify(ingresosArray) + '\nGastos: ' + JSON.stringify(gastosArray))
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
    respuestaInvalida = true
}

//Funcion para almacenar datos en el local storage
function almacenarDatosFinancieros() {
    //Valida primero si tienes datos para almacenar
    if (ingresosArray.length === 0 && gastosArray.length === 0) {
        alert('No tienes datos para almacenar\nIngresos: ' + JSON.stringify(ingresosArray) + '\nGastos: ' + JSON.stringify(gastosArray) + '\nRegistra datos primero porfavor')
        console.log('No hay datos a ingresar')
    } else {
        //Ejecuta el almacenamiento
        while (respuestaInvalida == true) {
            respuestaUsuario = prompt('¿Deseas guardar?\n A.Ingresos\n B. Gastos')
            respuestaUsuario = respuestaUsuario.toLowerCase()
            console.log('El ususario respondio ' + respuestaUsuario)

            // Evalúa la respuesta del usuario y ejecuta la acción correspondiente
            switch (respuestaUsuario) {
                case 'a':
                    // Guarda los datos de ingresos en localStorage
                    alert('Estos son los ingresos que tienes \n' + ingresosArray)
                    confirmacionGuardadoDatos = confirm('¿Quieres guardar estos datos?')
                    console.log('El usuario respondio ' + confirmacionGuardadoDatos)

                    if (confirmacionGuardadoDatos == true) {
                        localStorage.setItem('Ingresos', JSON.stringify(ingresosArray))
                        alert('Datos de ingresos guardados')
                        console.log('Datos de ingresos guardados' + ingresosArray)
                    } else {
                        alert('No guardaste los datos')
                        console.log('No se guardaron los datos')
                    }
                    respuestaInvalida = false
                    break
                case 'b':
                    // Guarda los datos de gastos en localStorage
                    alert('Estos son los gastos que tienes \n' + gastosArray)
                    confirmacionGuardadoDatos = confirm('¿Quieres guardar estos datos?')
                    console.log('El usuario respondio ' + confirmacionGuardadoDatos)

                    if (confirmacionGuardadoDatos == true) {
                        localStorage.setItem('Gastos', JSON.stringify(gastosArray))
                        alert('Datos de gastos guardados')
                        console.log('Datos de gastos guardados' + gastosArray)
                    } else {
                        alert('No guardaste los datos')
                        console.log('No se guardaron los datos')
                    }
                    respuestaInvalida = false
                    break
                default:
                    // Maneja opciones no válidas y permite al usuario intentar de nuevo
                    alert('Ingresaste una opción no valida')
                    console.log('Opción no valida')
                    respuestaInvalida = true
                    break
            }
        }
        respuestaInvalida = true
    }
}

//DOM==============================================================

//Boton agregar o mostrar finanzas
const botonAgregarMostrarFinanzas = document.getElementById('botonAgregarMostrarFinanzas')
console.log(botonAgregarMostrarFinanzas)

//Boton almacenar datos
const botonAlmacenarDatos = document.getElementById('botonAlmacenarDatos')
console.log(botonAlmacenarDatos)

//EJECUCION========================================================

botonAgregarMostrarFinanzas.addEventListener('click', function () {
    alert('Ahora a agregar tus datos financieros')
    agregarDatosFinancieros()
})

botonAlmacenarDatos.addEventListener('click', function () {
    alert('Vamos a almacenar los datos ingresados')
    almacenarDatosFinancieros()
})
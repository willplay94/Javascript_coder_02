//Variables globales

let montoCredito = 0
let tasaAnualPorcentaje = 0
let plazoMeses = 0
let tasaMensual = 0

//Funsiones flecha

const calculadorTasaMensual = tasaAnualPorcentaje => (tasaAnualPorcentaje / 100) / 12

const calculadorCuotaCredito = (montoCredito, tasaMensual, plazoMeses) => (montoCredito * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazoMeses))

//Ejecucion

alert('Vamos a calcular tu cuota para el credito')

montoCredito = parseInt(prompt('Cual es el monto total de tu credito = '))
let montoCreditoCOP = montoCredito.toLocaleString('es-CO')
console.log(montoCreditoCOP)

tasaAnualPorcentaje = parseInt(prompt('Cual es la tasa anual del credito = '))
console.log(tasaAnualPorcentaje)

plazoMeses = parseInt(prompt('Cual es el plazo en meses = '))
console.log(plazoMeses)

tasaMensual = calculadorTasaMensual(tasaAnualPorcentaje)
console.log(tasaMensual)

cuota = calculadorCuotaCredito(montoCredito, tasaMensual, plazoMeses)
let cuotaCOP = cuota.toLocaleString('es-CO')
console.log(cuotaCOP)

alert('Tu cuota quedaría en ' + cuotaCOP)


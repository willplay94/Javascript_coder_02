const arrayDominiosValidosCorreo = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"]
let arrayPartesCorreoPorLetras = []
let arrayPartesCorreoDominio = []
let inputCorreoUsuario = ""
// Variables globales para almacenar los resultados de validación
let resultadoValidador = false
let resultadoValidadorDominio = false


function verificaElDominio(inputUsuario, arrayPartesCorreoDominio) {
    arrayPartesCorreoDominio = inputUsuario.split("@")
    console.log(arrayPartesCorreoDominio)

    resultadoValidadorDominio = arrayDominiosValidosCorreo.includes(arrayPartesCorreoDominio[1])
    console.log(`Los dominios estan y son validos: ${resultadoValidadorDominio}`)
    return resultadoValidadorDominio
}

function verificarCorreoValidoArroba(inputUsuario, arrayPartesCorreoPorLetras) {
    arrayPartesCorreoPorLetras = inputUsuario.split("")
    console.log(arrayPartesCorreoPorLetras)

    resultadoValidador = arrayPartesCorreoPorLetras.includes("@")
    console.log(`Esta el arroba en el correo: ${resultadoValidador}`)
    return resultadoValidador
}

function validadorGeneralCorreo(resultadoValidador, resultadoValidadorDominio) {
    if (resultadoValidador == true && resultadoValidadorDominio == true) {
        alert("Es valido el correo")
    } else {
        alert("Es invalido el correo")
    }
}

inputCorreoUsuario = prompt("Cual es tu correo: ")

verificarCorreoValidoArroba(inputCorreoUsuario, arrayPartesCorreoPorLetras)
verificaElDominio(inputCorreoUsuario, arrayPartesCorreoDominio)
validadorGeneralCorreo(resultadoValidador, resultadoValidadorDominio)


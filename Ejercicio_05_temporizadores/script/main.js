let contador = 0
let renderContador = document.getElementById('renderContador')
let seccionContador = document.getElementById('seccionContador')

console.log('Inicio de contador')
let intervalContador = setInterval(() => {
    contador++
    console.log(contador)

    renderContador.innerText = contador

    if (contador === 10) {
        clearInterval(intervalContador)
        let finalizadorContador = seccionContador.innerHTML = '<h2>Termino contador</h2>'
    }
}, 1000)

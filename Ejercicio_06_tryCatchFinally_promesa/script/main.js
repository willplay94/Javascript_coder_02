let numeroUsuario = parseInt(prompt('Introduce un numero a dividir: '))
let analisis = ''

try {
    const dividir = numeroUsuario => {
        const resultado = 2/numeroUsuario
        return resultado
    }
    analisis = dividir(numeroUsuario)
    let resultadoDivision = analisis
    
    if (analisis === Infinity) {
        throw new Error('No se puede dividir por cero')
    } else {
        console.log(`Este es el resultado ${resultadoDivision}`)
    }
} catch (err) {
    analisis = err
} finally {
    console.log(`Este es el analisis de la division: ${analisis}`)
}

// console.log(analisis)
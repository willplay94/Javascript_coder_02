const ingresos = [
    { nombre: "Salario mensual", categoria: "Salario", monto: 2800000 },
    { nombre: "Freelance desarrollo web", categoria: "Trabajo independiente", monto: 850000 },
    { nombre: "Venta de curso online", categoria: "Educación digital", monto: 320000 },
    { nombre: "Dividendos ETF", categoria: "Inversiones", monto: 150000 },
    { nombre: "Proyecto PowerBI", categoria: "Consultoría", monto: 600000 },
    { nombre: "Streaming en Twitch", categoria: "Entretenimiento", monto: 95000 },
    { nombre: "Venta artículo usado", categoria: "Ventas ocasionales", monto: 180000 },
    { nombre: "Cashback tarjeta crédito", categoria: "Reembolsos", monto: 45000 },
    { nombre: "Renta de habitación", categoria: "Arrendamiento", monto: 450000 },
    { nombre: "Comisión referidos", categoria: "Comisiones", monto: 120000 },
    { nombre: "Proyecto JavaScript", categoria: "Desarrollo", monto: 380000 },
    { nombre: "Bono productividad", categoria: "Bonos", monto: 200000 },
    { nombre: "Venta de fotos stock", categoria: "Fotografía", monto: 75000 },
    { nombre: "Asesoría tecnológica", categoria: "Consultoría", monto: 290000 },
    { nombre: "Intereses cuenta ahorros", categoria: "Inversiones", monto: 25000 },
    { nombre: "Trabajo fin de semana", categoria: "Trabajo parcial", monto: 160000 },
    { nombre: "Venta equipo gaming", categoria: "Ventas ocasionales", monto: 420000 },
    { nombre: "Monetización YouTube", categoria: "Entretenimiento", monto: 65000 },
    { nombre: "Traducción documentos", categoria: "Servicios lingüísticos", monto: 110000 },
    { nombre: "Desarrollo app móvil", categoria: "Desarrollo", monto: 750000 }
]

const gastos = [
    { nombre: "Arriendo apartamento", categoria: "Vivienda", monto: 1200000 },
    { nombre: "Mercado mensual", categoria: "Alimentación", monto: 480000 },
    { nombre: "Servicios públicos", categoria: "Servicios", monto: 280000 },
    { nombre: "Internet fibra óptica", categoria: "Telecomunicaciones", monto: 89000 },
    { nombre: "Plan celular", categoria: "Telecomunicaciones", monto: 65000 },
    { nombre: "Gasolina carro", categoria: "Transporte", monto: 320000 },
    { nombre: "Gimnasio mensualidad", categoria: "Salud y bienestar", monto: 95000 },
    { nombre: "Netflix + Spotify", categoria: "Entretenimiento", monto: 42000 },
    { nombre: "Xbox Game Pass", categoria: "Entretenimiento", monto: 35000 },
    { nombre: "Restaurantes", categoria: "Alimentación", monto: 350000 },
    { nombre: "Ropa y calzado", categoria: "Vestimenta", monto: 180000 },
    { nombre: "Seguro vehículo", categoria: "Seguros", monto: 120000 },
    { nombre: "Cine Cinemark", categoria: "Entretenimiento", monto: 85000 },
    { nombre: "Productos farmacia", categoria: "Salud y bienestar", monto: 75000 },
    { nombre: "Mantenimiento carro", categoria: "Transporte", monto: 150000 },
    { nombre: "Cursos online", categoria: "Educación", monto: 140000 },
    { nombre: "Tarjeta crédito cuota", categoria: "Financiero", monto: 380000 },
    { nombre: "Ahorro programado", categoria: "Ahorros", monto: 500000 },
    { nombre: "Regalo cumpleaños", categoria: "Regalos y ocasiones especiales", monto: 120000 },
    { nombre: "Equipos tecnológicos", categoria: "Tecnología", monto: 260000 }
]

// forEach()
// ingresos.forEach((ingreso) => {
//     console.log('Nombre ingreso: ' + ingreso.nombre + ' / Monto en dolares: ' + ingreso.monto / 3901)
// })

// find()
// const busqueda = gastos.find((gasto) => gasto.nombre === "Xbox Game Pass")
// console.log(busqueda)

// filter()
// let precioMaximo = parseInt(prompt("Cual es el precio maximo?"))
// const filtradoPrecioMaximo = ingresos.filter((ingreso) => ingreso.monto <= precioMaximo)
// console.log(filtradoPrecioMaximo)

// const filtradoAlimentacion = gastos.filter((gasto) => gasto.categoria.includes("Alimentación"))
// console.log(filtradoAlimentacion)


# Javascript_coder_02

## 📚 Descripción del Proyecto

Este repositorio contiene una colección de ejercicios de JavaScript diseñados para aprender y practicar conceptos fundamentales del lenguaje. Cada ejercicio se encuentra en su propia carpeta con ejemplos prácticos que van desde conceptos básicos hasta implementaciones más avanzadas.

## 🎯 Objetivo

El objetivo principal es crear un espacio de aprendizaje donde se puedan subir ejercicios de JavaScript de manera organizada, permitiendo un seguimiento progresivo del aprendizaje y sirviendo como referencia para futuros proyectos.

## 📁 Estructura del Repositorio

Cada ejercicio sigue la siguiente estructura:
```
Ejercicio_XX_nombre_ejercicio/
├── index.html          # Archivo HTML para ejecutar el ejercicio
└── script/
    └── script.js       # Lógica JavaScript del ejercicio
```

## 📋 Ejercicios Incluidos

### Ejercicio 01 - Validador de Correo
**Ubicación:** `Ejercicio_01_validador_correo/`

**Descripción:** Implementa un validador de correos electrónicos que verifica:
- Presencia del símbolo "@" en el correo
- Validación del dominio contra una lista de dominios permitidos (gmail.com, yahoo.com, hotmail.com, outlook.com)

**Conceptos practicados:**
- Manipulación de strings con `split()`
- Uso de arrays y el método `includes()`
- Validación condicional
- Interacción con el usuario mediante `prompt()` y `alert()`
- Funciones y parámetros

**Cómo ejecutar:** Abrir `index.html` en el navegador

### Ejercicio 02 - Calculadora Financiera
**Ubicación:** `Ejercicio_02_finanzas/`

**Descripción:** Aplicación para gestionar finanzas personales que permite:
- Registrar ingresos con nombre, categoría y monto
- Registrar gastos con nombre, categoría y monto
- Mostrar datos financieros actuales
- Almacenar datos en localStorage del navegador

**Conceptos practicados:**
- Estructuras de control (`switch`, `while`)
- Arrays de objetos para almacenamiento de datos
- Manipulación del DOM con `getElementById` y `addEventListener`
- LocalStorage para persistencia de datos
- Confirmaciones y validación de entrada
- Formateo de números con `toLocaleString()`

**Cómo ejecutar:** Abrir `index.html` en el navegador y usar los botones para interactuar

### Ejercicio 03 - Calculadora de Cuota de Crédito
**Ubicación:** `Ejercicio_03_calculo_cuota/`

**Descripción:** Calculadora que determina la cuota mensual de un crédito basado en:
- Monto total del crédito
- Tasa de interés anual
- Plazo en meses
- Aplicación de la fórmula de amortización francesa

**Conceptos practicados:**
- Funciones flecha (arrow functions)
- Operaciones matemáticas avanzadas con `Math.pow()`
- Conversión de tipos de datos con `parseInt()`
- Formateo de números con `toLocaleString('es-CO')`
- Cálculos financieros y fórmulas de interés
- Validación de entrada de usuario

**Cómo ejecutar:** Abrir `index.html` en el navegador

### Ejercicio 04 - Filtrado de Datos Financieros
**Ubicación:** `Ejercicio_04_filtrar_finanzas/`

**Descripción:** Ejemplos prácticos de métodos de arrays aplicados a datos financieros:
- Uso de `forEach()` para iterar sobre arrays de objetos
- Búsqueda de elementos específicos con `find()`
- Filtrado de datos por precio máximo y categoría con `filter()`
- Datos precargados de ingresos y gastos para practicar

**Conceptos practicados:**
- Métodos de arrays: `forEach()`, `find()`, `filter()`
- Arrow functions como callbacks
- Trabajo con arrays de objetos
- Filtrado por múltiples criterios
- Método `includes()` para búsqueda en strings

**Cómo ejecutar:** Abrir `index.html` en el navegador y descomentar los ejemplos en el código

### Ejercicio 05 - Temporizadores
**Ubicación:** `Ejercicio_05_temporizadores/`

**Descripción:** Implementación de un contador automático que muestra el uso de temporizadores:
- Contador que incrementa cada segundo usando `setInterval()`
- Detención automática del contador al llegar a 10
- Actualización dinámica del DOM con el valor del contador
- Mensaje de finalización cuando termina la cuenta

**Conceptos practicados:**
- Temporizadores con `setInterval()`
- Detención de intervalos con `clearInterval()`
- Manipulación del DOM con `innerText` e `innerHTML`
- Arrow functions en callbacks
- Condicionales para control de flujo

**Cómo ejecutar:** Abrir `index.html` en el navegador (el contador inicia automáticamente)

### Ejercicio 06 - Manejo de Errores con Try-Catch-Finally
**Ubicación:** `Ejercicio_06_tryCatchFinally_promesa/`

**Descripción:** Implementación de manejo de errores en operaciones matemáticas:
- División con validación de casos especiales (división por cero)
- Captura y propagación de errores personalizados
- Uso de bloque `finally` para logs de análisis
- Lanzamiento de errores con `throw new Error()`

**Conceptos practicados:**
- Bloques try-catch-finally
- Lanzamiento de errores con `throw`
- Creación de errores personalizados con `new Error()`
- Validación de operaciones matemáticas (Infinity)
- Arrow functions para lógica de negocio
- Manejo de excepciones

**Cómo ejecutar:** Abrir `index.html` en el navegador e introducir un número

## 📈 Próximos Ejercicios

Este repositorio se actualizará continuamente con nuevos ejercicios que cubrirán:
- APIs y fetch
- Promesas y async/await
- Y mucho más...
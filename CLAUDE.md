# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a JavaScript learning repository containing educational exercises. Each exercise follows a consistent structure:

```
Ejercicio_XX_nombre_ejercicio/
├── index.html          # HTML file that includes the JavaScript
└── script/
    └── script.js       # Main JavaScript logic (may be named main.js)
```

## Running Exercises

- Each exercise is self-contained and runs in the browser
- Open the `index.html` file in a web browser to execute
- JavaScript files are included via `<script>` tags in the HTML
- Most exercises use `prompt()` and `alert()` for user interaction
- Use browser developer console to view `console.log()` output

## Current Exercises

### Ejercicio_01_validador_correo
- Email validator that checks for "@" symbol and validates domains
- Demonstrates: string manipulation, arrays, conditional logic, functions
- Uses global variables and function-based architecture

### Ejercicio_02_finanzas  
- Financial calculator with income/expense tracking
- Implements switch statements for menu options (A/B/C)
- Uses object arrays for data storage (ingresosArray, gastosArray)
- Features confirmation dialogs for data entry
- DOM-based interface with buttons instead of prompt-based interaction
- Includes CSS styling and localStorage integration

### Ejercicio_03_calculo_cuota
- Credit payment calculator using French amortization formula
- Uses arrow functions for mathematical operations
- Implements loan payment formula with interest calculations
- Prompt-based user interaction for credit amount, annual rate, and months

### Ejercicio_04_filtrar_finanzas
- Demonstrates array methods: forEach(), find(), filter()
- Contains pre-populated mock data for ingresos and gastos arrays
- Shows filtering by price and category
- Examples commented out for educational purposes

### Ejercicio_05_temporizadores
- Counter implementation using setInterval()
- DOM manipulation to update counter display
- Demonstrates clearInterval() to stop timers
- Updates innerHTML to show completion message

### Ejercicio_06_tryCatchFinally_promesa
- Error handling with try-catch-finally blocks
- Division operation with infinity check
- Throws custom Error when dividing by zero
- Demonstrates proper error propagation

## Code Architecture Patterns

### Global State Management
- Each exercise uses global variables for state (e.g., `ingresosArray`, `gastosArray`)
- Boolean flags control flow state (`confirmacionIngreso`, `respuestaInvalida`)
- Data structures are typically arrays of objects for complex data

### Function Organization
- Functions are defined at the top, DOM interactions at bottom
- Main execution logic placed after DOM elements are selected
- Event listeners use anonymous functions that call named functions
- Arrow functions used for simple mathematical calculations (Ejercicio_03)

### User Interaction Patterns
- Menu systems implemented with `switch` statements on lowercased user input
- Confirmation loops using `while (!confirmation)` pattern
- Data validation through `confirm()` dialogs before saving

### Data Persistence
- localStorage used with `JSON.stringify()` for complex objects
- Separate storage keys for different data types ("ingresos", "gastos")
- No automatic data loading on page refresh
- localStorage.clear() used to delete all stored data

## Development Notes

- Code uses Spanish variable names and comments
- Functions follow camelCase naming convention
- No build process or package management - plain HTML/JS
- No testing framework in place
- Exercises may contain intentional or learning-focused bugs to be fixed
- User interaction relies on browser native dialogs (prompt, alert, confirm)
- Numbers formatted using `toLocaleString('es-CO')` for Colombian currency format

## File Naming Conventions

- HTML files: Always named `index.html` 
- JavaScript files: May be `script.js` or `main.js` depending on the exercise
- Script files are placed in a `script/` subdirectory
- Exercise directories follow pattern: `Ejercicio_XX_descriptive_name/`

## Important Instructions

Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.
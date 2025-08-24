# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a JavaScript learning repository containing exercises focused on basic JavaScript concepts. The repository is structured with individual exercises in separate directories.

## Architecture and Structure

- **Ejercicio_01_validador_correo/**: Email validator exercise
  - `index.html`: Simple HTML file that loads the JavaScript
  - `script/script.js`: Contains email validation logic with functions for checking @ symbol and domain validation
- Each exercise follows a similar pattern: HTML file + JavaScript in a script subdirectory

## Development Approach

- No build system or package manager is used - this is vanilla JavaScript
- Code runs directly in the browser by opening the HTML files
- Uses basic JavaScript features like arrays, string manipulation, and DOM alerts/prompts
- Spanish variable names and comments are used throughout

## Testing and Running Code

- Open the `index.html` files directly in a web browser to run exercises
- No automated testing framework is configured
- Validation happens through browser alerts and console.log statements

## Code Conventions

- Variables use camelCase with Spanish naming (e.g., `arrayDominiosValidosCorreo`)
- Global variables are declared at the top of files
- Functions follow descriptive naming patterns in Spanish
- Console logging is used extensively for debugging
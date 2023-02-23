Creando un punto de entrada desde 0 en React
## *Crear Proyecto*

> npm create vite@latest

## *Argregar plugin de react a vite*

> npm install @vitejs/plugin-react -F

## *Agregar dependencias*

> npm install react react-dom -E
>
>> *Libreria de react y react dom*

---

## Configuración de Vite y agregar Plugin de React

Crear un archivo vite.config.js<br>
dentro escribir lo siguiente:

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()]
})

```
---

## Configuración de Standard
En package.json<br>
Agregar:

```
"eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json"
}

```
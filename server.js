// --- Servidor de Práctica SDAW ---
// Creado por Adrian Rosel Martinez
// ---------------------------------

// 1. Importar el módulo 'express'
const express = require('express');
// ... (el resto del archivo sigue igual)
// 1. Importar el módulo 'express'
const express = require('express');
// 2. Importar el módulo 'path' (viene con Node.js) para manejar rutas de archivos
const path = require('path');

// 3. Crear una instancia de la aplicación Express
const app = express();
// 4. Definir el puerto en el que escuchará el servidor
const PORT = 3000;

// 5. Servir archivos estáticos (como HTML, CSS, JS)
// Le decimos a Express que sirva cualquier archivo de la carpeta actual
app.use(express.static(path.join(__dirname, '')));

// 6. Definir la ruta principal ('/')
app.get('/', (req, res) => {
    // Cuando alguien visite la raíz, envía el archivo index.html
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 7. Iniciar el servidor
app.listen(PORT, () => {
    console.log(`¡Servidor escuchando en http://localhost:${PORT}`);
});
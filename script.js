// 1. Esperar a que todo el contenido del HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // 2. Encontrar el botón por su ID
    const button = document.getElementById('myButton');

    // 3. Añadir un 'escuchador de eventos' para el clic
    button.addEventListener('click', () => {
        // 4. Cuando se haga clic, mostrar una alerta
        // ¡Aquí es donde debes poner tu nombre!
        alert('Hola Adrian Rosel Martinez');
    });

});
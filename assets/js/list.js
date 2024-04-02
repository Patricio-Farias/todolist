// Array para almacenar las tareas
const tareas = [];

// Función para agregar una tarea
const agregarTarea = () => {
    const descripcion = document.getElementById('agregarTarea').value.trim();
    if (descripcion) {
        tareas.push({ descripcion, realizada: false });
        actualizarLista();
    } else {
        alert("Por favor, ingresa una descripción para la tarea.");
    }
};

// Función para eliminar una tarea
const eliminarTarea = (index) => {
    tareas.splice(index, 1);
    actualizarLista();
};

// Función para marcar una tarea como realizada
const toggleRealizada = (index) => {
    tareas[index].realizada = !tareas[index].realizada;
    actualizarLista();
};

// Función para actualizar la lista de tareas en el DOM
const actualizarLista = () => {
    const lista = document.getElementById('listaDeTareas');
    lista.innerHTML = ''; // Limpiar la lista antes de volver a renderizar

    tareas.forEach((tarea, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${tarea.descripcion}</td>
            <td><input type="checkbox" ${tarea.realizada ? 'checked' : ''} onchange="toggleRealizada(${index})"></td>
            <td><button onclick="eliminarTarea(${index})">X</button></td>
        `;
        lista.appendChild(fila);
    });

    // Actualizar contadores de tareas
    document.getElementById('total').textContent = tareas.length;
    document.getElementById('realizadas').textContent = tareas.filter(tarea => tarea.realizada).length;
};

// Evento para agregar tarea al hacer clic en el botón
document.getElementById('boton').addEventListener('click', agregarTarea);

// Inicializar la lista de tareas al cargar la página
actualizarLista();
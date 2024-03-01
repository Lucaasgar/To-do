const btnAdd = document.getElementById('btnAdd');
const formulario = document.getElementById('formulario');
const tabla = document.querySelector('#tabla');
const filaDefault = document.querySelector('#tabla tr')

let tareas = [];

(() => {
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = document.querySelector('#inputTask').value;
        const fecha = document.querySelector('#fecha').value;
        if(!task.trim()){
            console.log('Formulario vacio')
            return
        }

        const objTarea = {
            fecha: fecha,
            tarea: task,
            estado: false
        }
        tareas = [...tareas, objTarea];
        formulario.reset();
        
        mostarHTML()
    })
})()

function mostarHTML() {
    tabla.innerHTML = '';

    tareas.forEach((task) => {
        if(task.estado === false){
            task.estado = 'Pending'
        }

        if(task.fecha === ''){
            let hoy = new Date();
            task.fecha = hoy.toDateString()
        }

        const filaTarea = document.createElement('tr')
        filaDefault.remove();        
        filaTarea.innerHTML = `
        <tr>
            <td class="text-center">${task.tarea}</td>
            <td class="text-center">${task.fecha}</td>
            <td class="text-center">${task.estado}</td>
            <td class="text-center">Actions</td>
        </tr>
        `

        tabla.appendChild(filaTarea);
    })
}
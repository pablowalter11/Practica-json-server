const url = 'http://localhost:3000/nintendo';
/*
const getApi = async(uwu) => {
    try {
        const resultado = await fetch(uwu);
        const data = await resultado.json();
        console.log(data);
    } catch(error) {
        console.error(`Error grave!!!: ${error}`);
    }
}

document.addEventListener('DOMContentLoaded', () => getApi(url));
*/
const pjN = {
    id: 6,
    nombre: 'Luigi',
    saga: 'Super Mario Bros'
};

const nuevoPj = async (pjN) => {
    try {
        const respuesta = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(pjN),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!respuesta.ok) {
            throw new Error(`Error en la solicitud: ${respuesta.status}`);
        }

        const data = await respuesta.json();
        console.log('Cliente creado:', data);

        window.location.href = 'index.html';
    } catch(error) {
        console.error(error);
    }
}

const eliminarPj = async (url) => {
    try {
        const respuesta = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!respuesta.ok) {
            throw new Error(`Error en la solicitud: ${respuesta.status}`);
        }

        const data = await respuesta.json();
        console.log('Cliente eliminado:', data);
        
        window.location.href = 'index.html';
    } catch(error) {
        console.error(error);
    }
}


//eliminarPj(url);
//const boton = addEventListener('click',nuevoPj(pjN));

async function actualizarUsuario(id,datosActualizados) {
    try {
        const respuesta = await fetch(`http://localhost:3000/nintendo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosActualizados)
        });

        if (!respuesta.ok) {
            throw new Error(`Error al actualizar el usuario`);
            
        }

        const usuarioActualizado = await respuesta.json();
        console.log(`Usuario actualizado: ${usuarioActualizado}`);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

//const nuevosDatos = { id: 1, nombre: 'Mario', saga: 'Mario Bros' }
//actualizarUsuario(1,nuevosDatos);

async function actualizarUsuarioParcial(id, cambiarSaga) {
    try {
        const respuesta = await fetch(`http://localhost:3000/nintendo/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cambiarSaga)
        });

        if(!respuesta.ok) {
            throw new Error('Error al actualizar el usuario');
        }

        const uAc = await respuesta.json();
        console.log(`Usuario actualizado: ${uAc}`);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

//const sagaNueva = { saga: 'Pokémon Rojo y Verde' }
//actualizarUsuarioParcial(5,sagaNueva);

async function obtenerOpciones() {
    try {
        const respuesta = await fetch('http://localhost:3000/nintendo', {
            method: 'OPTIONS'
        });

        if (!respuesta.ok) {
            throw new Error('Error al obtener opciones');
        }

        const cabeceras = respuesta.headers;
        console.log('Métodos permitidos:', cabeceras.get('Allow'));
    } catch(error) {
        console.error(error);
    }
}

obtenerOpciones();
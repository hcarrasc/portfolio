import proy_kanban from '../assets/proy_kanban.png';
import atom from '../assets/techstack/atom.png';
import nodejs from '../assets/techstack/nodejs.png';
import supabase from '../assets/techstack/supabase.png';

function ProjectKanban() {
    return (
        <>
            <div className="project-card">
                <div className="project-image">
                    <img src={proy_kanban} alt="Project Image" />
                </div>

                <div className="project-title">
                    <h2>Tablero Kanban</h2>
                    <div className="project-stack">
                        <img src={atom} alt="Tech Icon 1" />
                        <img src={nodejs} alt="Tech Icon 2" />
                        <img src={supabase} alt="Tech Icon 3" />
                    </div>
                </div>
                <p>
                    <b> 1) Aplicacion Frontend </b>
                    construida con React, que permite a los usuarios gestionar tareas mediante un
                    tablero Kanban interactivo con interfaz drag-and-drop. Los usuarios pueden
                    crear, mover y eliminar tarjetas de tareas en diferentes columnas que
                    representan distintos estados del flujo de trabajo.
                    <br />
                    <br />
                    <b> 2) Backend de Supabase</b>
                    que proporciona autenticación de usuarios mediante login de Google y
                    almacenamiento de datos en tiempo real.
                </p>
            </div>
        </>
    );
}

export default ProjectKanban;

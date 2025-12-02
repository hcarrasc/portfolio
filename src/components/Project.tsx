import of_bot_01 from '../assets/of_bot_01.png';
import atom from '../assets/atom.png';
import nodejs from '../assets/nodejs.png';
import express from '../assets/express.png';
import mongodb from '../assets/mongodb.png';
import python from '../assets/python.png';

function Project() {
    return (
        <>
            <div className="project-card">
                <div className="project-image">
                    <img src={of_bot_01} alt="Project Image" />
                </div>

                <div className="project-title">
                    <h2>Ofertas Outlet Bot</h2>
                    <div className="project-stack">
                        <img src={atom} alt="Tech Icon 1" />
                        <img src={nodejs} alt="Tech Icon 2" />
                        <img src={express} alt="Tech Icon 3" />
                        <img src={python} alt="Tech Icon 4" />
                        <img src={mongodb} alt="Tech Icon 5" />
                    </div>
                </div>
                <p>
                    Es un sistema full stack desarrollado con React, Node.js, Express, Python y
                    MongoDB. Se compone de tres componentes principales:
                    <br />
                    <br />
                    <b> 1) Aplicacion Scraper </b>
                    desarrollada en Python, que escanea sitios web de las principales tiendas de
                    retail chilenas, almacenando ofertas de tipo Outlet en una instancia de MongoDB
                    <br />
                    <br />
                    <b> 2) Aplicacion Frontend </b>
                    construida con React, que permite a los usuarios buscar y visualizar las ofertas
                    recopiladas por el scraper. La aplicacion cuenta con login de Google, creación
                    de listas de deseos, filtros de búsqueda y vitrinas con productos destacados.
                    <br />
                    <br />
                    <b> 3) Aplicacion Backend </b>
                    desarrollada con Node.js y Express, que sirve como intermediario entre el front
                    end y la base de datos, gestionando las solicitudes de los usuarios y
                    proporcionando los datos necesarios para la interfaz de usuario.
                </p>
            </div>
        </>
    );
}

export default Project;

import proy_waveflow from '../assets/proy_waveflow.png';
import atom from '../assets/techstack/atom.png';
import nodejs from '../assets/techstack/nodejs.png';

function ProjectWaveFlow() {
    return (
        <>
            <div className="project-card">
                <div className="project-image">
                    <img src={proy_waveflow} alt="Project Image" />
                </div>

                <div className="project-title">
                    <h2>WaveFlow: Reproductor de música</h2>
                    <div className="project-stack">
                        <img src={atom} alt="Tech Icon 1" />
                        <img src={nodejs} alt="Tech Icon 2" />
                    </div>
                </div>
                <p style={{ marginBottom: '5rem' }}>
                    <b> 1) Aplicacion Frontend </b>
                    construido con React, que permite a los usuarios reproducir música desde
                    archivos de audio locales. Ofrece funcionalidades como reproducción, pausa,
                    salto de pistas, lectura de la metadata del audio y visualización de la forma de
                    onda del audio.
                    <br />
                    <br />
                </p>
                <div className="project-buttons">
                    <a href="https://waveflow-six.vercel.app/" className="btn-demo">
                        Live Demo
                    </a>
                    <a href="https://github.com/hcarrasc/waveflow" className="btn-code">
                        Ver código fuente
                    </a>
                </div>
            </div>
        </>
    );
}

export default ProjectWaveFlow;

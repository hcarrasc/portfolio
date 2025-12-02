import img_de_perfil from '../assets/img_de_perfil.jpeg';
import iconlinkedin from '../assets/iconlinkedin.png';
import iconinstagram from '../assets/iconinstagram.png';
import iconx from '../assets/iconx.png';
import icongithub from '../assets/github_w.png';

function Profile() {
    function handleContactme() {
        const email = 'htcarrasc@gmail.com';
        const subject = 'Consulta desde el sitio';
        const body = 'Hola, me gustaría agendar un llamada contigo.';

        const mailto = `mailto:${email}?subject=${encodeURIComponent(
            subject,
        )}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
    }

    function handleDownloadCV() {
        const cvUrl =
            'https://drive.google.com/file/d/1-0A-NcqUnCqC8OLzy8Zo9RxmOiOif3Su/view?usp=sharing';
        window.open(cvUrl, '_blank');
    }

    return (
        <section>
            <div className="profile-wrapper">
                <div className="section-img">
                    <img src={img_de_perfil} alt="Profile Picture" />
                    <div className="profile-location"> Concepción, Chile</div>
                    <div className="profile-connect">
                        <a
                            href="https://linkedin.com/in/hcarrasc"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={iconlinkedin} alt="LinkedIn Icon" />
                        </a>
                        <a
                            href="https://github.com/hcarrasc"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={icongithub} alt="GitHub Icon" />
                        </a>
                        <a
                            href="https://instagram.com/hcarrasc"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={iconinstagram} alt="Instagram Icon" />
                        </a>
                        <a
                            href="https://x.com/Htcarrasco"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={iconx} alt="X Icon" />
                        </a>
                    </div>
                    <button className="btn-contact" onClick={handleContactme}>
                        Agenda una llamada
                    </button>
                    <button className="btn-contact-cv" onClick={handleDownloadCV}>
                        Descargar CV
                    </button>
                </div>
                <div className="section-info">
                    <h1>Héctor Carrasco</h1>
                    <h2>Full stack developer</h2>
                    <p>
                        Soy un desarrollador full stack con experiencia en la creación de
                        aplicaciones web. Me apasiona aprender nuevas tecnologías y mejorar mis
                        habilidades constantemente. Me gusta contribuir a proyectos innovadores y
                        trabajar en equipo.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Profile;

import img_de_perfil from '../assets/img_de_perfil.jpeg';
import iconlinkedin from '../assets/iconlinkedin.png';
import iconinstagram from '../assets/iconinstagram.png';
import iconx from '../assets/iconx.png';
import icongithub from '../assets/icongithub.png';

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

    return (
        <section>
            <div className="profile-wrapper">
                <div className="section-img">
                    <img src={img_de_perfil} alt="Profile Picture" />
                    <div className="profile-location"> Concepción, Chile</div>
                    <div className="profile-connect">
                        <img src={iconlinkedin} alt="LinkedIn Icon" />
                        <img src={icongithub} alt="GitHub Icon" />
                        <img src={iconinstagram} alt="Instagram Icon" />
                        <img src={iconx} alt="X Icon" />
                    </div>
                    <button className="btn-contact" onClick={handleContactme}>
                        Contáctame o agenda una llamada
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

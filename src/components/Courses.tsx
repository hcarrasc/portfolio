import arqui_software from '../assets/cursos/arqui_software.png';
import diseno_sistemas from '../assets/cursos/diseno_sistemas.png';
import gcp from '../assets/cursos/gcp.png';
import gcp_2 from '../assets/cursos/gcp_2.png';
import product_management from '../assets/cursos/product_management.png';

function Courses() {
    return (
        <section className="courses-section">
            <div className="course-item">
                <img src={arqui_software} alt="Course Logo" />
                <h3>Arquitectura de software Moderna</h3>
            </div>

            <div className="course-item">
                <img src={diseno_sistemas} alt="Course Logo" />
                <h3>Diseño de sistemas a gran escala</h3>
            </div>

            <div className="course-item">
                <img src={gcp} alt="Course Logo" />
                <h3>Google Cloud Platform Fundamentals: Core Infrastructure</h3>
            </div>

            <div className="course-item">
                <img src={gcp_2} alt="Course Logo" />
                <h3>Reliable Google Cloud Infrastructure: Design and Process</h3>
            </div>

            <div className="course-item">
                <img src={product_management} alt="Course Logo" />
                <h3>Digital Product Management</h3>
            </div>
        </section>
    );
}

export default Courses;

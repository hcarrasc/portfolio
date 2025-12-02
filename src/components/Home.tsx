import Header from './Header';
import Footer from './Footer';
import Title from './Title';
import Profile from './Profile';
import box from '../assets/box.png';
import layers from '../assets/layers.png';
import edu from '../assets/edu.png';
import cv from '../assets/cv.png';
import cursos from '../assets/cursos.png';
import Project from './Project';

function Home() {
    return (
        <>
            <Header />
            <div className="main-wrapper">
                <Profile />
                <Title icon={box} titleText="Proyectos personales" />
                <section className="side-projects-section">
                    <Project />
                    <Project />
                </section>

                <Title icon={layers} titleText="Tech Stack" />
                <section className="stack-section">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cum commodi magnam
                    incidunt quidem rem repellendus rerum, debitis iste recusandae doloribus non
                    corrupti necessitatibus quae? Autem nemo minima maxime quae?
                </section>

                <Title icon={edu} titleText="Educación" />
                <section className="cv">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, et eius? Quaerat
                    corrupti exercitationem, ipsum sit quod eligendi eos libero dolores, alias neque
                    nesciunt tenetur iure tempora nulla inventore aperiam.
                </section>

                <Title icon={cv} titleText="CV" />
                <section className="cv">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, et eius? Quaerat
                    corrupti exercitationem, ipsum sit quod eligendi eos libero dolores, alias neque
                    nesciunt tenetur iure tempora nulla inventore aperiam.
                </section>

                <Title icon={cursos} titleText="Courses" />
                <section className="courses">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ex explicabo
                    nisi exercitationem ipsa numquam porro vero, amet esse provident facilis totam
                    placeat! Expedita illum sed culpa esse repellat ipsa.
                </section>
            </div>

            <Footer />
        </>
    );
}

export default Home;

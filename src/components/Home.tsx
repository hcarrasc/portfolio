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
import Stack from './Stack';
import CV from './CV';
import Courses from './Courses';

function Home() {
    return (
        <>
            <Header />
            <div className="main-wrapper">
                <Profile />

                <Title icon={box} titleText="Proyectos personales" />
                <section className="side-projects-section">
                    <Project />
                </section>

                <Title icon={layers} titleText="Tech Stack" />
                <section className="stack-section">
                    <Stack />
                </section>

                <Title icon={edu} titleText="Educación" />
                <section className="education-section">
                    <div className="education-item">
                        <h2>Magíster en Ingeniería Informática</h2>
                        <h3>Universidad Andres Bello - 2023 a 2024</h3>
                    </div>
                    <div className="education-item">
                        <h2>Ingeniería Civil Informática</h2>
                        <h3>Universidad del Bio-Bio - 2008 a 2013</h3>
                    </div>
                </section>

                <Title icon={cv} titleText="CV" />
                <CV />

                <Title icon={cursos} titleText="Courses" />
                <Courses />
            </div>

            <Footer />
        </>
    );
}

export default Home;

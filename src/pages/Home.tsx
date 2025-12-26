import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import Title from '../components/Title.tsx';
import Profile from '../components/Profile.tsx';
import box from '../assets/projects_w.png';
import layers from '../assets/stack_w.png';
import edu from '../assets/edu_w.png';
import cv from '../assets/cv_w.png';
import cursos from '../assets/diploma_w.png';
import Project from '../components/Project.tsx';
import ProjectKanban from '../components/ProjectKanban.tsx';
import Stack from '../components/Stack.tsx';
import CV from '../components/CV.tsx';
import Courses from '../components/Courses.tsx';
import techStackImages from '../assets/techstack/index.ts';
import ProjectWaveFlow from '../components/ProjectWaveFlow.tsx';

function Home() {
    console.log(techStackImages.length);

    return (
        <>
            <Header />
            <div className="main-wrapper">
                <Profile />

                <Title icon={layers} titleText="Tech Stack" />
                <section className="stack-section">
                    <Stack />
                </section>

                <Title icon={box} titleText="Proyectos personales" />
                <section className="side-projects-section">
                    <Project />
                    <ProjectKanban />
                    <ProjectWaveFlow />
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

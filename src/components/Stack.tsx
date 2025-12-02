import atom from '../assets/techstack/atom.png';
import nodejs from '../assets/techstack/nodejs.png';
import express from '../assets/techstack/express.png';
import mongodb from '../assets/techstack/mongodb.png';
import python from '../assets/techstack/python.png';
import docker from '../assets/techstack/docker.png';
import js from '../assets/techstack/js.png';
import java from '../assets/techstack/java.png';
import git from '../assets/techstack/git.png';
import postgre from '../assets/techstack/postgre.png';
import aws from '../assets/techstack/aws.png';
import pandas from '../assets/techstack/pandas.png';
import spring from '../assets/techstack/spring.png';
import swift from '../assets/techstack/swift.png';
import jupyter from '../assets/techstack/jupyter.png';
import php from '../assets/techstack/php.png';

function Stack() {
    return (
        <>
            <div className="stack-item">
                <img src={js} alt="JavaScript" />
                <p>JavaScript</p>
            </div>
            <div className="stack-item">
                <img src={atom} alt="React" />
                <p>React</p>
            </div>
            <div className="stack-item">
                <img src={nodejs} alt="Node.js" />
                <p>Node.js</p>
            </div>
            <div className="stack-item">
                <img src={express} alt="Express" />
                <p>Express</p>
            </div>
            <div className="stack-item">
                <img src={python} alt="Python" />
                <p>Python</p>
            </div>
            <div className="stack-item">
                <img src={pandas} alt="Pandas" />
                <p>Pandas</p>
            </div>
            <div className="stack-item">
                <img src={jupyter} alt="Jupyter" />
                <p>Jupyter</p>
            </div>
            <div className="stack-item">
                <img src={mongodb} alt="MongoDB" />
                <p>MongoDB</p>
            </div>
            <div className="stack-item">
                <img src={postgre} alt="PostgreSQL" />
                <p>PostgreSQL</p>
            </div>
            <div className="stack-item">
                <img src={docker} alt="Docker" />
                <p>Docker</p>
            </div>
            <div className="stack-item">
                <img src={aws} alt="AWS" />
                <p>AWS</p>
            </div>
            <div className="stack-item">
                <img src={java} alt="Java" />
                <p>Java</p>
            </div>
            <div className="stack-item">
                <img src={spring} alt="Spring" />
                <p>Spring</p>
            </div>
            <div className="stack-item">
                <img src={git} alt="Git" />
                <p>Git</p>
            </div>
            <div className="stack-item">
                <img src={swift} alt="Swift" />
                <p>Swift</p>
            </div>
            <div className="stack-item">
                <img src={php} alt="PHP" />
                <p>PHP</p>
            </div>
        </>
    );
}

export default Stack;

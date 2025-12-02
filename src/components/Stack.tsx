import atom from '../assets/atom.png';
import nodejs from '../assets/nodejs.png';
import express from '../assets/express.png';
import mongodb from '../assets/mongodb.png';
import python from '../assets/python.png';
import docker from '../assets/docker.png';
import js from '../assets/js.png';
import java from '../assets/java.png';
import git from '../assets/git.png';
import postgre from '../assets/postgre.png';
import aws from '../assets/aws.png';
import pandas from '../assets/pandas.png';
import spring from '../assets/spring.png';
import swift from '../assets/swift.png';
import jupyter from '../assets/jupyter.png';
import php from '../assets/php.png';

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

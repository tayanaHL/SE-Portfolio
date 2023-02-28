import React from 'react'
import './styles/Section.scss'
import tay2 from './images/wave.png'

const Section = () => {
    return (
        <div className='section'>

            <div className="section__container">

                <div className="section__img">
                    <img src={tay2} alt="" />
                </div>

                <div className="section__content">
                    <h1>Tayana Harris</h1>
                    <h2>Programming Skills</h2>
                    <p>JavaScript</p>
                    <p>React JS</p>
                    <p>PostgreSQL</p>
                    <p>Python</p>
                    <p>Python</p>
                    <p>Node.js</p>
                    <p>MongoDB</p>
                    <p>Django</p>
                    <p>Mongoose</p>
                    <p>HTML5</p>
                    <p>CSS</p>

                    <h2>Professional Skills</h2>
                    <p>Windows OS</p>
                    <p>Mac OS</p>
                    <p>Adobe Lightroom</p>
                    <p>Adobe Photoshop</p>
                    <p>Adobe Premier Pro</p>
                </div>
            </div>
        </div>
    )
}
export default Section
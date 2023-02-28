import { LinkedIn, Github } from '@material-ui/icons'
import React, { useState } from 'react'
import './styles/Main.scss'
import tay from './images/laptop.png'

const Main = () => {
    return (
        <div className='main'>
            <div className='main__container'>


                <div className="main__content">

                    <div className="text">
                            <p>Hey There !</p>
                            <h1>I'm Tayana</h1>
                            <p>A Full-Stack Sofware Engineer</p>

                            <div className="icons">
                                <LinkedIn className='icon'/>
                                <Github className='icon'/>
                            </div>


                    <div className="buttons">
                        <button>See Me</button>
                        <button>Hire Me</button>
                    </div>

                    </div>


                </div>


                <div className="main__img">
                    <img src={tay} alt="" />
                </div>


            </div>



        </div>
    )
}


export default Main
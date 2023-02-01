import React from 'react'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import gifExpertApp from '../imagen/gifExpertApp.jpg'
import smoothieApp from '../imagen/smoothieApp.jpg'
import apiPaises from '../imagen/apiPaises.jpg'
import cardValidation from '../imagen/cardValidation.jpg'
import dataLover from '../imagen/dataLover.jpg'
import socialNetwork from '../imagen/socialNetwork.jpg'
import burgerQueen from '../imagen/burgerQueen.jpg'
import movieApp from '../imagen/movieApp.jpg'
import labNotes from '../imagen/labNotes.jpg'
import todoApp from '../imagen/todoApp.jpg'
import triqui from '../imagen/triqui.jpg'

// './imagen/gifExpertApp.jpg'

const Projects = () => {


    return (
        <>
            <div className="App">
                <Navbar />
                <div className="contenedor-sidebar-body">
                    <Sidebar />

                    <section className='contenedor-body'>
                        <div className='cont-educa'>
                            <h2>Proyectos</h2>
                            <nav>
                                <ul className='lista-proyectos'>

                                    <li>
                                        {/* <Link to='' className='linkText'>Juego-triqui</Link> */}
                                        <a href='https://juega-triqui.netlify.app/' target='_blank' rel='noreferrer' className='linksProjects'>Juego-triqui</a>
                                        <img src={triqui} alt="Juego-triqui" className='imagesProjects'/>
                                        {/* <p className='enlaces'>https://juega-triqui.netlify.app/</p> */}
                                    </li>
                                    <li>
                                        <a href='https://todo-app-react-tailwind.netlify.app/' target='_blank' rel='noreferrer' className='linksProjects'>Todo-app</a>
                                        <img src={todoApp} alt="Todo-app" className='imagesProjects'/>
                                        {/* <p className='enlaces'>https://todo-app-react-tailwind.netlify.app/</p> */}
                                    </li>
                                    <li>
                                        <a href='https://lab-notes-156fc.web.app/login' target='_blank' rel='noreferrer' className='linksProjects'>Lab-notes</a>
                                        <img src={labNotes} alt="Lab-notes" className='imagesProjects'/>
                                        {/* <p className='enlaces'>https://lab-notes-156fc.web.app/login</p> */}
                                    </li>
                                    <li>
                                        <a href='https://flourishing-truffle-4a186a.netlify.app/home' target='_blank' rel='noreferrer' className='linksProjects'>Movie-api</a>
                                        <img src={movieApp} alt="Movie-api" className='imagesProjects'/>
                                        {/* <p className='enlaces'>https://flourishing-truffle-4a186a.netlify.app/home</p> */}
                                    </li>
                                    <li>
                                        <p>Burger-queen-api-client</p>
                                        {/* <a href='' target='_blank' rel='noreferrer' className='linksProjects'>Burger-queen-api-client</a> */}
                                        <img src={burgerQueen} alt="Burger-queen-api-client" className='imagesProjects'/>
                                        {/* <p className='enlaces'></p> */}
                                    </li>
                                    <li>
                                        <a href='https://socialnetwork-13.firebaseapp.com/' target='_blank' rel='noreferrer' className='linksProjects'>social-network</a>
                                        <img src={socialNetwork} alt="social-network" className='imagesProjects'/>
                                        {/* <p className='enlaces'>https://socialnetwork-13.firebaseapp.com/</p> */}
                                    </li>

                                    <li>
                                        <a href='https://adrianamariaruiz.github.io/BOG005-data-lovers/src/' target='_blank' rel='noreferrer' className='linksProjects'>data-lover</a>
                                        <img src={dataLover} alt="data-lover" className='imagesProjects'/>
                                        {/* <p className='enlaces'>https://adrianamariaruiz.github.io/BOG005-data-lovers/src/</p> */}
                                    </li>
                                    <li>
                                        <a href='https://adrianamariaruiz.github.io/card-validation.github.io/src/' target='_blank' rel='noreferrer' className='linksProjects'>card-validation</a>
                                        <img src={cardValidation} alt="card-validation" className='imagesProjects'/>
                                        {/* <p className='enlaces'>https://adrianamariaruiz.github.io/card-validation.github.io/src/</p> */}
                                    </li>
                                
                                    <li>
                                        <a href='https://adrianamariaruiz.github.io/App_API_paises/' target='_blank' rel='noreferrer' className='linksProjects'>App_API_paises</a>
                                        <img src={apiPaises} alt="App_API_paises" className='imagesProjects'/>
                                        {/* <p className='enlaces'>https://adrianamariaruiz.github.io/App_API_paises/</p> */}
                                    </li>
                                    <li>
                                        <a href='https://adrianamariaruiz.github.io/smoothie-app/' target='_blank' rel='noreferrer' className='linksProjects'>Smoothie-app</a>
                                        <img src={smoothieApp} alt="Smoothie-app" className='imagesProjects'/>
                                        {/* <p className='enlaces'>https://adrianamariaruiz.github.io/smoothie-app/</p> */}
                                    </li>
                                    <li>
                                        <a href='https://adrianamariaruiz.github.io/react-gifexpertapp/' target='_blank' rel='noreferrer' className='linksProjects'>gifExpertApp</a>
                                        <img src={gifExpertApp} alt='gifExpertApp' className='imagesProjects'/> 
                                        {/* <p className='enlaces'>https://adrianamariaruiz.github.io/react-gifexpertapp/</p> */}
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </section>

                </div>
            </div>


        </>
    )
}

export default Projects
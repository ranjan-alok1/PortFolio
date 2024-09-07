import React from 'react'
import { Fade } from 'react-awesome-reveal'
import clock from '../assets/digital_clock.png'
import budgetimg from '../assets/expense-app.png'
import memorygame from '../assets/flip-game.png'

const Project = () => {
    return (
        <>
            <div name="projects" className="container mx-auto p-24 pt-[120px] text-gray-300 mt-[120px] ">
                <div className="flex justify-center items-center">
                    <h1 className="text-5xl text-[#24ce6b] font-bold border-b-4 border-[#24ce6b] inline-block mb-8">
                        My Projects
                    </h1>
                </div>
                <div className="flex flex-wrap justify-center items-stretch gap-212">

                    {/* Project Card 1 */}
                    <Fade direction='left'>
                        <div className="card glass w-[370px] h-[500px] m-2 shadow-lg shadow-black flex flex-col">
                            <figure>
                                <img
                                    className="w-full h-[200px] object-cover transform hover:scale-110 transition duration-300 ease-in-out"
                                    src={budgetimg}
                                    alt="Budget Buddy"
                                />
                            </figure>
                            <div className="card-body flex flex-col flex-grow p-4">
                                <h2 className="card-title">Budget Buddy</h2>
                                <p>My Budget Buddy web-application, developed in MERN, provides continuity in personal finance management, including user signup and login, and easy tracking of income and expenses.</p>
                                <div className="card-actions mt-auto">
                                    <a
                                        href="https://github.com/ranjan-alok1/Budget_Buddy-frontend"
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <button className="text-white text-md font-bold p-2 my-2 rounded-lg flex items-center bg-[#24ce6b] hover:bg-pink-600">Github</button>
                                    </a>
                                    <a
                                        href="https://budget-buddy1.netlify.app/"
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <button className="text-white text-md font-bold p-2 my-2 rounded-lg flex items-center bg-[#24ce6b] hover:bg-pink-600">Demo</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Fade>

                    {/* Project Card 2 */}
                    <Fade>
                        <div className="card glass w-[370px] h-[500px] m-2 shadow-lg shadow-black flex flex-col">
                            <figure>
                                <img
                                    className="w-full h-[200px] object-cover transform hover:scale-110 transition duration-300 ease-in-out"
                                    src={memorygame}
                                    alt="Flip Frenzy"
                                />
                            </figure>
                            <div className="card-body flex flex-col flex-grow p-4">
                                <h2 className="card-title">Flip Frenzy</h2>
                                <p>Flip Frenzy is a responsive memory game built with HTML, CSS, and ReactJS. Enjoy a fun and interactive experience as you test your memory skills by flipping cards and matching up the pairs!</p>
                                <div className="card-actions mt-auto">
                                    <a
                                        href="https://github.com/ranjan-alok1/Flip-Frenzy"
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <button className="text-white text-md font-bold p-2 my-2 rounded-lg flex items-center bg-[#24ce6b] hover:bg-pink-600">Github</button>
                                    </a>
                                    <a
                                        href="https://flip-frenzy.netlify.app/"
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <button className="text-white text-md font-bold p-2 my-2 rounded-lg flex items-center bg-[#24ce6b] hover:bg-pink-600">Demo</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Fade>

                    {/* Project Card 3 */}
                    <Fade direction='right'>
                        <div className="card glass w-[370px] h-[500px] m-2 shadow-lg shadow-black flex flex-col">
                            <figure>
                                <img
                                    className="w-full h-[200px] object-cover transform hover:scale-110 transition duration-300 ease-in-out"
                                    src={clock}
                                    alt="Digital Clock"
                                />
                            </figure>
                            <div className="card-body flex flex-col flex-grow p-4">
                                <h2 className="card-title">Digital Clock</h2>
                                <p>A digital clock app using HTML, CSS, and JavaScript. This responsive app displays the current time, providing a simple yet elegant way to stay on track.</p>
                                <div className="card-actions mt-auto">
                                    <a
                                        href="https://github.com/ranjan-alok1/clock"
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <button className="text-white text-md font-bold p-2 my-2 rounded-lg flex items-center bg-[#24ce6b] hover:bg-pink-600">Github</button>
                                    </a>
                                    <a
                                        href="https://flip-frenzy.netlify.app/"
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <button className="text-white text-md font-bold p-2 my-2 rounded-lg flex items-center bg-[#24ce6b] hover:bg-pink-600">Demo</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </>
    )
}

export default Project

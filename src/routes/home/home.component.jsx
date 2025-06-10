import React from 'react';
import faqIMG from '../faq/faq.png';
import linkIMG from '../link-skills/link.png';
import legionIMG from '../../assets/legion.png';
import swipeIMG from "../skillswipe/swipe.png";
import fifthJobIMG from "../../assets/5thjobskill.png";
import sixthJobIMG from "../sixthJob/fate.png";
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <header class="text-center text-6xl font-bold mb-8 text-amber-300 text-shadow-lg/30 "> 
                Phantom
            </header> 
            <div class="text-2xl w-auto text-white text-center m-3 p-2 outline outline-black bg-black/40 rounded-lg max-w-300 mx-auto">
                <p>This site serves as a resources for the master thief class, Phantom, of MapleStory. 
                Feel free to explore the links below to learn more about the class and its skills.
                <br></br>
                If you have any more questions, feel free to join the class <a href="https://discord.gg/225H7sw" target="_blank" rel="noopener noreferrer">Discord</a> and join the community!
                <br></br>
                </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 m-6 p-6">
                
                <Link to="/faq">
                    <div class=" relative transform max-w-80 max-h-120 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col justify-center transition duration-500 items-center mx-auto hover:scale-110">
                        <img
                            src={faqIMG}
                            alt='FAQ'
                            class="w-full h-full object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-bold text-white bg-black/60 px-4 py-2 rounded">
                                FAQ
                            </span>
                        </div>
                    </div>
                </Link>
                
            
                <div class=" relative transform max-w-80 max-h-120 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col justify-center transition duration-500 items-center mx-auto hover:scale-110">
                        <img
                            src={linkIMG}
                            alt='FAQ'
                            class="w-full h-full object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-bold text-white bg-black/60 px-4 py-2 rounded">
                                Link Skills, Hyper Stats, & Inner Ability
                            </span>
                        </div>
                </div>

                <div class=" relative transform max-w-80 max-h-120 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col justify-center transition duration-500 items-center mx-auto hover:scale-110">
                        <img
                            src={swipeIMG}
                            alt='FAQ'
                            class="w-full h-full object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-bold text-white bg-black/60 px-4 py-2 rounded">
                                1-4th Job Skills and Skill Swipe
                            </span>
                        </div>
                </div>

                <div class=" relative transform max-w-80 max-h-120 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col justify-center transition duration-500 items-center mx-auto hover:scale-110">
                        <img
                            src={fifthJobIMG}
                            alt='FAQ'
                            class="w-full h-full object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-bold text-white bg-black/60 px-4 py-2 rounded">
                                5th Job
                            </span>
                        </div>
                </div>

                <div class=" relative transform max-w-80 max-h-120 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col justify-center transition duration-500 items-center mx-auto hover:scale-110">
                        <img
                            src={sixthJobIMG}
                            alt='FAQ'
                            class="w-full h-full object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-bold text-white bg-black/60 px-4 py-2 rounded">
                                6th Job Skills 
                            </span>
                        </div>
                </div>

                <div class=" relative transform max-w-80 max-h-120 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col justify-center transition duration-500 items-center mx-auto hover:scale-110">
                        <img
                            src={legionIMG}
                            alt='FAQ'
                            class="w-full h-full object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-bold text-white bg-black/60 px-4 py-2 rounded">
                                Legion
                            </span>
                        </div>
                </div>
            </div> 
        </div>
    );
};

export default Home;
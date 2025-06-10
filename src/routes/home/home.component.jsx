import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <header class="text-center text-6xl font-bold mb-8 text-amber-300"> 
            Phantom
        </header> 
            <div class="text-2xl text-black text-center m-2 p-2 outline outline-black rounded-lg">
                <p>This site serves as a resources for the master thief class, Phantom, of MapleStory. 
                Feel free to explore the links below to learn more about the class and its skills.
                <br></br>
                If you have any more questions, feel free to join the class <a href="https://discord.gg/225H7sw" target="_blank" rel="noopener noreferrer">Discord</a> and join the community!
                <br></br>
                </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4 p-4">
              
                <div class="transform w-80 h-120 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col justify-center transition duration-500 items-center mx-auto hover:scale-110">
                        <div class="px-6 py-4 justify-center">
                            <Link to="/faq" class="text-2xl">FAQ</Link>
                        </div>
                </div>
            
                <div class="transform w-80 h-120 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col justify-center transition duration-500 items-center mx-auto hover:scale-110">
                        <div class="px-6 py-4 justify-center">
                            <Link to="/faq" class="text-2xl">FAQ</Link>
                        </div>
                </div>


                <div class="transform w-80 h-120 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col justify-center transition duration-500 items-center mx-auto hover:scale-110">
                        <div class="px-6 py-4 justify-center">
                            <Link to="/faq" class="text-2xl">FAQ</Link>
                        </div>
                </div>
            </div> 
        </div>
    );
};

export default Home;
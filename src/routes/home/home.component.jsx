import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <header class name="class-header"> 
            Phantom
        </header> 
            <div className="class-intro">
                <p>This site serves as a resources for the master thief class, Phantom, of MapleStory. 
                Feel free to explore the links below to learn more about the class and its skills.
                <br></br>
                If you have any more questions, feel free to join the class <a href="https://discord.gg/225H7sw" target="_blank" rel="noopener noreferrer">Discord</a> and join the community!
                <br></br>
                </p>
            </div>
            <div className="class-links">
                <li>
                <Link to="/faq">FAQ</Link>
                </li>
                <li>
                5th Job Skills
                </li>
                <li>
                6th Job Skills
                </li>
                <li>
                Inner Ability
                </li>
                <li>
                Training Maps & Rotations
                </li>
            </div> 
        </div>
    );
};

export default Home;
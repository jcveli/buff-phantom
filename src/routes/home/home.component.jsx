import React from 'react';
import faqIMG from '../faq/faq.png';
import linkIMG from '../link-skills/link.png';
import legionIMG from '../../assets/legion.png';
import swipeIMG from "../skillswipe/swipe.png";
import fifthJobIMG from "../../assets/5thjobskill.png";
import sixthJobIMG from "../sixthJob/fate.png";
import Card from '../../components/card/card.component';
const Home = () => {
    return (
        <div>
            <header class="text-center text-6xl font-bold mb-8 text-shadow-purple-600 text-blue-600 text-shadow-lg/60 "> 
                PHANTOM
            </header> 

           

        
            <div class="text-2xl w-auto text-white text-center m-3 p-2 outline outline-black bg-black/40 rounded-lg max-w-300 mx-auto">
                 <h2 class="text-3xl font-bold mb-4"><b><i>Welcome to the Phantom guide!</i></b></h2>               
                <p>This site serves as a resources for the master thief class, Phantom, of MapleStory. 
                Feel free to explore the cards below to learn more about the class.
                <br></br>
                If you have any more questions, feel free to join the class <a href="https://discord.gg/225H7sw" target="_blank" rel="noopener noreferrer">Discord</a> and join the community!
                <br></br>
                </p>
            </div>
           
        
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 m-6 p-6">
                <Card title="FAQ" image={faqIMG} description="FAQ" link="/faq" />
                <Card title="Link Skills, Hyper Stats, & Inner Ability" image={linkIMG} description="Link Skills, Hyper Stats, & Inner Ability" link="/link-skills" />
                <Card title="1-4th Job Skills and Skill Swipe" image={swipeIMG} description="1-4th Job Skills and Skill Swipe" link="/skillswipe" />
                <Card title="5th Job" image={fifthJobIMG} description="5th Job" link="/5th-job-skills" />
                <Card title="6th Job Skills" image={sixthJobIMG} description="6th Job Skills" link="/6th-job-skills" />
                <Card title="Legion" image={legionIMG} description="Legion" link="/legion" />
            </div>
                
            
               
            
        </div>
    );
};

export default Home;
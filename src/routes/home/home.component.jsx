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
        <div id="home-page" class="pt-4">

            <div class="bg-[#1c1f22] h-auto rounded-md shadow-inner p-4 w-full max-w-4xl mx-auto border border-[#2a2d30]">
                <div class="flex items-center space-x-4 pb-2 border-b border-[#2a2d30]">
                    <h1 class="text-4xl font-semibold text-white">
                        Welcome to the the <span class="text-[#c2b6ff]">Phantom</span> Guide!
                    </h1>
                    <div class="w-32 h-2 rounded-t-md bg-[#2a2d30] shadow-inner"></div>
                </div>

                <div class="mt-4 bg-[#1c1f22] text-white rounded-md text-2xl">
                    <p>This site serves as a resources for the master thief class, Phantom, of MapleStory. 
                    Feel free to explore the cards below to learn more about the class.
                    <br></br>
                    If you have any more questions, feel free to join the class <a href="https://discord.gg/225H7sw" target="_blank" rel="noopener noreferrer">Discord</a> and join the community!
                    <br></br>
                    </p>
                </div>
            </div>
        
         
           
        
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-6 p-6">
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
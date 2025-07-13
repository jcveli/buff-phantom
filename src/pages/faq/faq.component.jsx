import React from 'react';
import Navbar from '../../components/navbar/navbar.component';
const FAQ = () => {
    return (
        <div class="text-white text-center p-8" id="faq-page">
            
           <div class="bg-[#1c1f22] h-auto rounded-md shadow-inner p-4  max-w-full mx-auto border border-[#2a2d30]">
                <div class="flex items-center space-x-4 pb-2 border-b border-[#2a2d30]">
                    <h1 class="text-4xl font-semibold text-white">
                        Frequently Asked <span class="text-[#c2b6ff]">Questions</span>
                    </h1>
                    <div class="w-32 h-2 rounded-t-md bg-[#2a2d30] shadow-inner"></div>
                    <div class="justify-content-end">
                        <Navbar />
                    </div>

                </div>
            </div>

            <div class="bg-[#1c1f22] h-auto rounded-md shadow-inner p-4 max-w-full mx-auto border border-[#2a2d30] mt-4">
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <h2 class="m-4 text-3xl font-bold mb-4 underline">Is Phantom that bad of a class?</h2>
                        <p class="text-1xl m-4">
                            Phantom is not a bad class, but it does have some unique challenges. 
                            It requires a good understanding of its mechanics, especially with the skill swipe feature.
                            Many players find it rewarding once they master it. Here are some highlights of Phantom:
                        </p>
                    </div>
                
                    <table class="table-fixed w-full mt-6 bg-amber-50 rounded-lg shadow-lg text-black text-center">
                        <thead>
                            <tr class="underline">
                                <th class="text-2xl font-bold">Highlights</th>
                                <th class="text-2xl font-bold">Drawbacks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><b>Excellent at Clearing Bosses with Minimal Stats</b> – 
                                Phantom excels at taking down bosses even with the bare minimum required stats, 
                                making it one of the most efficient choices for bossing.</td>

                                <td><b>Low Party Synergy</b> - Phantom doesn’t contribute as much to party buffs or team-based content, 
                                making it less optimal for party play.</td>
                            </tr>
                            <tr>
                                <td>Great Survivability </td>
                                <td>Requires good timing and positioning</td>
                            </tr>
                            <tr>
                                <td>Easy to Learn, Efficient to Optimize</td>
                                <td>Can be difficult to master for new players</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h2 class="m-4 text-3xl font-bold mb-4 underline">
                    Continous ring or Ring of Restraint(RoR)?
                    </h2>   
                    <p>
                    Continous Ring is a great choice for Phantom, especially if you are looking for a ring that provides a balance of stats and utility.    
                    </p>  
                </div>  
            </div>
        </div>

    );
};

export default FAQ;
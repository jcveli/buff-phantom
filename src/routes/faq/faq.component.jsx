import React from 'react';
import Navbar from '../../components/navbar/navbar.component';
const FAQ = () => {
    return (
        <div class="text-white text-center" id="faq-page">
            <Navbar />
            <h1 class="text-5xl outline-1 m-6 p-10 w-0.5xl bg-black/40 rounded-lg mx-auto">
                Frequently Asked Questions
            </h1>

            <div class="text-left outline-1 outline-blue-600 m-10 p-10 w-0.5xl bg-black/40 rounded-lg mx-auto">
                <h2 class="m-4 text-3xl font-bold mb-4 underline">Is Phantom that bad of a class?</h2>
                <p class="text-1xl m-4">
                    Phantom is not a bad class, but it does have some unique challenges. 
                    It requires a good understanding of its mechanics, especially with the skill swipe feature.
                    Many players find it rewarding once they master it. Here are some highlights of Phantom:
                </p>
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
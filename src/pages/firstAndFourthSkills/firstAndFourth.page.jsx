import Header from "../../components/header/header.component";  

const FirstAndFourthSkills = () => {
    return (
        <div className="text-white text-center p-8" id="first-and-fourth-skills-page">
            <Header title="First and Fourth Skills" />
            <div className="bg-[#1c1f22] h-auto rounded-md shadow-inner p-4 max-w-full mx-auto border border-[#2a2d30] mt-4">
                <h2 className="text-3xl font-bold mb-4">First and Fourth Skills Overview</h2>
                <p className="text-lg">This section will cover the essential skills and abilities available in the first and fourth job for Phantom.</p>
            </div>
        </div>
    );
}   

export default FirstAndFourthSkills;
import Navbar from "../../components/navbar/navbar.component";

const sixthJob = () => {
    return (
        <div class="text-white text-center p-8" id="sixth-job-page">
           <div class="bg-[#1c1f22] h-auto rounded-md shadow-inner p-4  max-w-full mx-auto border border-[#2a2d30]">
                <div class="flex items-center justify-between">
                    <h1 class="text-4xl font-semibold text-white">
                        <span class="text-[#c2b6ff]">Sixth </span>Job
                    </h1>
                    
                    <div class="justify-content-end">
                        <Navbar />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default sixthJob;
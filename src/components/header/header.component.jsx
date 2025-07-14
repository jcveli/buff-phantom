import Navbar from "../navbar/navbar.component";

const Header = ({title}) => {
    return (
        <div class="text-white text-center p-8" >
            <div class="bg-[#1c1f22]/90 h-auto rounded-md shadow-inner p-4 max-w-full mx-auto border border-[#2a2d30]">
                <div class="flex items-center justify-between">
                    <h1 class="text-4xl font-semibold text-">
                        <span class="text-[#c2b6ff]">{title}</span>
                    </h1>
                    
                    <div class="justify-content-end">
                        <Navbar />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header
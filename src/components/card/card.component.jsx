import { Link } from 'react-router-dom';

const Card = ({ title, image, description, link }) => {
    return (
        <Link to={link}>
                    <div class="relative transform w-80 h-120 rounded-lg overflow-hidden shadow-l flex flex-col justify-center transition duration-500 items-center mx-auto hover:scale-110">
                        <img
                            src={image}
                            alt={title}
                            class="w-full h-full object-cover rounded-t-lg"                   
                        />
                        <div class="absolute inset-0 flex items-center justify-center">
                            <span class="text-2xl font-bold text-white bg-black/60 px-4 py-2 rounded">
                                {description}
                            </span>
                        </div>
                    </div>
        </Link>
    );
};

export default Card;
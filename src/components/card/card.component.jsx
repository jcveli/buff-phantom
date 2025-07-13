import { Link } from 'react-router-dom';

const Card = ({ title, image, description, link }) => {
    return (
       
                <div class="relative transform h-180 w-full rounded-lg overflow-hidden shadow-l justify-center transition duration-500 items-center mx-auto hover:scale-110">
                        <Link to={link}>
                            <img
                                src={image}
                                alt={title}
                                class="w-full h-full object-cover rounded-t-lg"                   
                            />
                            <div class="absolute inset-0 flex items-center justify-center">
                                <span class="text-5xl font-bold text-amber-400 bg-black/10 px-4 py-2 rounded">
                                    {description}
                                </span>
                            </div>
                        </Link>
                </div>
    );
};

export default Card;
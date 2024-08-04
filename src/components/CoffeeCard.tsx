import { useNavigate} from "react-router";

type Props = {
    name: string;
    imageSrc: string;
    description: string;
    imageId: number;
};
export default function CoffeeCard({name, description, imageSrc,imageId}: Props) {
    const navigate = useNavigate()
    return (
        <div onClick={() => {
            navigate(`/${imageId}`)
        }} className="cursor-pointer rounded-xl overflow-hidden flex flex-col bg-white border-gray-50 border shadow-sm shadow-neutral-200">
            <img className="w-full" src={imageSrc} alt={name}/>
            <div className="p-5">
                <p className="text-md">{name}</p>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    );
};

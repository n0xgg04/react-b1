import {useParams} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";
import CoffeeCard from "../../components/CoffeeCard.tsx";

export interface Root {
    title: string
    description: string
    ingredients: string[]
    image: string
    id: number
}


export default function DetailPage() {
    const {id} = useParams<{
        id: string
    }>()

    const [detail, setDetail] = useState<Root>()
    useEffect(() => {
        axios.get<Root>(`https://api.sampleapis.com/coffee/hot/${id}`).then((data) => {
            setDetail(data.data)
        })
    },[id])

    if(!detail) return null;

    return (
            <div>
                <CoffeeCard name={detail?.title} imageSrc={detail?.image} description={detail?.description} imageId={detail?.id}/>
            </div>
    );
}

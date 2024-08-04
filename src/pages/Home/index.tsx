
import {useEffect, useState} from "react";
import axios from "axios";
import CoffeeCard from "../../components/CoffeeCard.tsx";


export type Root = Root2[]

export interface Root2 {
    title: string
    description: string
    ingredients: string[]
    image: string
    id: number
}


function HomePage() {
    const [data, setData] = useState<Root>([])
    useEffect(() => {
        axios.get<Root>("https://api.sampleapis.com/coffee/hot").then((res) => {
            setData(res.data)
        })
    },[])

    return (
        <div className="grid grid-cols-5 gap-2">
            {data.map((item, i) => <CoffeeCard imageId={item.id}  name={item.title} description={item.description} imageSrc={item.image} key={i} />)}
        </div>
    )
}

export default HomePage

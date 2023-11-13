import { useParams } from "react-router-dom"

export default function Omer(){
    const {id} = useParams();
    console.log(id)
    return (
        <div>
            Omer 
            <h1>{id}</h1>
        </div>
    )
}
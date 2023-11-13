import { Link, useParams} from "react-router-dom";

function Abdullah(){

    const {id} = useParams();
    let param = Number(id)-5

    return( 
    <div>abdullah
        <div><Link to={"/Muhammed/"+param}>muhammed</Link>{id} </div>
    </div>
   );
}
export default Abdullah;
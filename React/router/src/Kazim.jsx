import { Link, useParams } from "react-router-dom";
export default function Kazim() {
    const {num} = useParams();
    let param = parseInt(num)*3
  return (
    <div>
        <Link to={"/abdullah/"+param}>Abdullah</Link>
        Kazim
        <h3>{num}</h3>
    </div>
  )
}

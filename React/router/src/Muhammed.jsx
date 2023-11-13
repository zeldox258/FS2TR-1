import { useState } from 'react'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"

function Muhammed() {
    const [data, setData] = useState({
        username: '',
        password: '',
    })
    const {id} = useParams();
    let number = Number(id) - 3;
    function handleInputChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
          });
    }
    return (
        <div>
            
            <input type="text" placeholder='Username' name='username' value={data.username} onChange={handleInputChange}/>
            <input type="password" placeholder='Password' name='password' value={data.password} onChange={handleInputChange}/>
            <Link to={"/kazim/"+number}>to Kazim</Link>
            <h1>{id}</h1>
        </div>
    )
}

export default Muhammed;
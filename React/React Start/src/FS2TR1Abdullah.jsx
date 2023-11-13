import { useState, useEffect } from 'react'
import axios from 'axios';

function AbdullahWebsite() {
    const[users,setUsers] = useState([]);
    const [value, setCount] = useState(0);
    

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/'+value)
          .then(response => {
            setUsers(response.data);
            console.log(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, [value]);
    
      return (
        <div>
          <h1>User website</h1>
          <ul>
              <li key={users.id}>{users.website}</li>
           
          </ul>
          <button onClick={() => { 
            setCount(value+1);
  
        }}>

          </button>
          <h3>{value}</h3>
         <button onClick={() => { 

          setCount(value-1);

        }}>

</button>
        </div>
       
      );
}

export default AbdullahWebsite

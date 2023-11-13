import { useState, useEffect } from 'react'
import axios from 'axios';

function Muhammed() {
  
  const[users,setUsers] = useState([]);
    const [value, setCounts] = useState(0);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/`+value)
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
          <h1>Users</h1>
          <ul>
              <li key={users.id}>{users.username}</li>
          </ul>
          <button onClick={() => { 
                setCounts(value-1)

          }}>
          Decrease
          </button>
          {value}
          <button onClick={() => { 
                setCounts(value+1)

          }}>
          Increase
          </button>
        </div>
        
      );
}

export default Muhammed
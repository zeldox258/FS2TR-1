import { useState, useEffect } from 'react'
import axios from 'axios';

function Kazim() {
    const[users,setUsers] = useState([]);
    const[value,setValue] = useState(0);

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
          <h1>Phones</h1>
          <ul>
              <li key={users.id}>{users.phone}</li>
          </ul>
          <button onClick={() => { 
                setValue(value-1)

          }}>
          Dec
          </button>
          {value}
          <button onClick={() => { 
                setValue(value+1)

          }}>
          Inc
          </button>
        </div>
      );
}

export default Kazim

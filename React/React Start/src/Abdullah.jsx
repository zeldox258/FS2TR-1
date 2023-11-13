import { useState, useEffect } from 'react'
import axios from 'axios';

function Abdullah() {
    const[users,setUsers] = useState([]);
    const[value,setValue] = useState(0);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users'+value)
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
          <h1>User Names</h1>
          <ul>
            {users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      );
}

export default Abdullah

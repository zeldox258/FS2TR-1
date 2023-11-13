import { useState, useEffect } from 'react'
import axios from 'axios';

function Kazim() {
    const[users,setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
            setUsers(response.data);
            console.log(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);
    
      return (
        <div>
          <h1>Phones</h1>
          <ul>
            {users.map(user => (
              <li key={user.id}>{user.phone}</li>
            ))}
          </ul>
        </div>
      );
}

export default Kazim

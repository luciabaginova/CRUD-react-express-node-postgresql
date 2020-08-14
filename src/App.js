import React, { useState, useEffect } from 'react';

const App = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await fetch(`http://localhost:8080/users`);
      result
        .json()
        .then(result => setUsers(result))
        .catch(e => console.log(e))
    }

    fetchUsers()

  }, [])

  console.log(users)

  return (
    <div className="container">
      <h1>React, Express, Node, Postgresql</h1>
      <h5>A simple app to create, read, update and delete data</h5>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(item =>
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button className="button" >Edit</button>
                <button style={{ marginLeft: 5 }} className="button" >Delete</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';

const App = () => {

  const initialFormState = {
    id: '',
    name: '',
    email: ''
  }

  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(initialFormState)

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


  const handleInputChange = event => {
    const { id, value } = event.target
    setCurrentUser({ ...currentUser, [id]: value })
  }

  return (
    <div className="container">
      <h1>React, Express, Node, Postgresql</h1>
      <h5>A simple app to create, read, update and delete data</h5>

      <div className="flex-row">

        <div className="flex-large">
          <form>
            <label>Name</label>
            <input
              type="text"
              id="name"
              placeholder="Jane Doe"
              onChange={handleInputChange}
              value={currentUser.name}
            />
            <label>Email</label>
            <input
              type="text"
              id="email"
              placeholder="jane.doe@gmail.com"
              onChange={handleInputChange}
              value={currentUser.email}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>

        <div className="flex-large">
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

      </div>
    </div>
  );
}

export default App;

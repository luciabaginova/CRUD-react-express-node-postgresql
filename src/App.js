import React from 'react';

const App = () => {
  return (
    <div className="container">
      <h1>React, Express, Node, Postgresql</h1>
      <p1>A simple app to create, react, update and delete data</p1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jane Doe</td>
            <td>janedoe@gmail.com</td>
            <td>
              <button className="button" >Edit</button>
              <button style={{ marginLeft: 5 }} className="button" >Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default App;

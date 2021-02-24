import React from 'react';
import './App.css';
import users from "./users";
import { v4 as uuid } from "uuid";

class App extends React.Component {


allUsers = () => {
  return users.filter( (user) => {
    return user;
  })
}

  render() {
    
    const displayUsers = this.allUsers().map((user) => {
      //id fehlt noch
      return (
        <tr>

          <td>
            {user.firstName}
          </td>

          <td>
            {user.lastName}
          </td>

          <td>
            {user.campus}
          </td>

          <td>
            {user.role}
          </td>
            
          <td>
            {user.linkedin}  
          </td>

        </tr>
      )
    })
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Campus</th>
              <th>Role</th>
              <th>LinkedIn</th>
            </tr>
          </thead>
          <tbody>
              {displayUsers}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
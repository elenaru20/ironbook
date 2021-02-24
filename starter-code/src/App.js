import React from 'react';
import './App.css';
import users from "./users";
import linkedinLogo from "./linkedin.png"
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {

state = {
  search: ""
}

searchUsers = () => {
  return users.filter( (user) => {
    let userName = user.firstName + '' + user.lastName;

    return (
      userName.toLowerCase().includes(this.state.search.toLowerCase())
    )
  })
}

changeHandler = event => {
  const { name } = event.target;
  const { value } = event.target;

  this.setState({
      [name]: value
  });
}

  render() {
    
    const displayUsers = this.searchUsers().map((user) => {
   
      user.id = uuidv4();
     
      return (
        <tr key={user.id}>

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
            {user.linkedin ? <a href={user.linkedin}><img style={{width:"20px"}} src={linkedinLogo} alt="linkedin logo"/></a> : ''}
          </td>

        </tr>
      )
    })
    return (
      <div>

        <div>
          <label> Search By Name </label>
          <input
            type="text"
            name="search"
            value={this.state.search}
            onChange={this.changeHandler}
          />
        </div>


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
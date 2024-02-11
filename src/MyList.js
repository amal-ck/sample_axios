import React, { Component } from 'react'
import axios from 'axios'
export default class MyList extends Component {
    state={
        users: []
    }
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(response=>{
            const users = response.data;
            this.setState({users})
        })
        .catch(error=>{
            console.error("Error fetchig data:", error)
        })
    }


  render() {
    return (
        <div>
              
        < ul>
            {this.state.users.map(user=>(
             <li key={user.id}>{user.name}</li>
            ))}
         </ul>
        </div>
    )
  }
}

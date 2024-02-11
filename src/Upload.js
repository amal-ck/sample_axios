import React from 'react';
import axios from 'axios';
export default class AddUser extends React.Component {
 state = {
 userName: '',
 }
 handleChange = event => {
 this.setState({ userName: event.target.value });
 }
 handleSubmit = event => {
    event.preventDefault();
    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.userName}`)
    .then(res => {
    console.log(res);
    console.log(res.data);
    })
   } 
 render() {
 return (
 <div>
 <form onSubmit={this.handleSubmit}>
 <label>
 User Name:
 <input type="text" name="name" onChange={this.handleChange}/>
 </label>
 <button type="submit">Add</button>
 </form>
 </div>
 )
 }
 }
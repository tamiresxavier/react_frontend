import React from "react";
import "./index.css";

export default class App extends React.Component {

  state = {
    name: "",
    lastName:"",
    office: "",
  }

  create =() => {
    var name = String(this.state.name);
    this.setState({name});
    var lastName = String(this.state.lastName);
    this.setState({lastName});
    var office = String(this.state.office);
    this.setState({office});
  }

  render(){
    return (
      <div class="form-container">
        <form class="register-form">
          {/* Uncomment the next line to show the success message */}
          {/* <div class="success-message">Success! Thank you for registering</div> */}
          <input type="text" 
          value={this.state.name} onChange={(e) => {this.setState({name: e.target.value})}} />
          <input type="text" 
          value={this.state.lastName} onChange={(e) => {this.setState({lastName: e.target.value})}} />
          <input type="text"
           value={this.state.office} onChange={(e) => {this.setState({office: e.target.value})}} />
         
          <br />
  
          <button onClick={this.create}> Register </button>

          <br/>
          Nome: {this.state.name}
          Last Name: {this.state.lastName}
          Office: {this.state.office}        
        </form>
      </div>
    )
  }
}
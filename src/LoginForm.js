import React, { Component } from "react";

class LoginForm extends Component {
  render( ) {
      return (
          <div>
            <h1>{ this.props.title || 'Login Form'}</h1>
            <div>Username: <input></input>   </div>   
            <div>Passwords: <input></input>   </div>  
            <div> <button> Login</button> </div> 
        </div>
      )
  }
}

export default LoginForm

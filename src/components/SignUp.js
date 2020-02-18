import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import styled from 'styled-components';

const Styles = styled.div`
    .Signup-form{
      width: 100%;
      max-width: 400px;
      padding: 30px;
      margin: auto;
    }
    .error-alert{
      font-color:blue;
    }
    
`

class Signup extends React.Component{
  state = {
    username: "",
    password: "",
    passwordConfirmation: "",
    alert: null
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if( this.state.username && this.state.password === this.state.passwordConfirmation){
      fetch('http://localhost:4000/api/v1/users',{
        method:"POST",
        headers:{
          "Content-Type":'application/json',
          Accept: 'application/json'
        },
        body:JSON.stringify({user:{username: this.state.username,password:this.state.password}})})
        .then(res=>res.json())
        .then(res=>{
          if(res.token){
            localStorage.token = res.token
            this.props.loggedIn(res.user)
          }
          else{
            this.setState({
            username: "",
            password: "",
            passwordConfirmation: "",
            alert: res.message})
          }
        })
    } else {
      this.setState({alert:"Passwords Don't match Try Again"})
    }

  }


  render(){
    return (
      <Styles>
      <Form className="Signup-form" onSubmit={this.handleSubmit}>
      <Form.Group controlId="username">
        <Form.Label>User Name</Form.Label>
        <Form.Control onChange={this.handleChange} name="username"value={this.state.username} type="text" placeholder="Enter User Name" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={this.handleChange} name="password" value={this.state.password} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicConfirmationPassword">
        <Form.Label>Password Confirmation</Form.Label>
        <Form.Control onChange={this.handleChange} name="passwordConfirmation" value={this.state.passwordConfirmation} type="password" placeholder="Password Confirmation" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
          {this.state.alert &&<Alert variant='light' className="error-alert">
            {this.state.alert}
          </Alert>
          }
    </Styles>
    );
  }
}

export default Signup;
// <div className="signup">
//   <form className="auth-form" onSubmit={this.handleSubmit}>
//     <input name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
//     <input name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" type="password"/>
//     <input name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleChange} placeholder="Password Confirmation" type="password"/>
//     <button type="submit">Submit</button>
//   </form>
// </div>
import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import styled from 'styled-components';

const Styles = styled.div`
    .LogIn-form{
      width: 100%;
      max-width: 400px;
      padding: 30px;
      margin: auto;
    }
`

class LogIn extends React.Component{
  state = {
    username: "",
    password: "",
    alert: null
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.password && this.state.username){
    fetch('http://localhost:4000/api/v1/login',{
      method:"POST",
      headers:{
        "Content-Type":'application/json',
        Accept: 'application/json'
      },
      body:JSON.stringify({user:{username: this.state.username,password:this.state.password}})})
      .then(res=>res.json())
      .then(res=>{
        if(res.token){localStorage.token = res.token
          this.props.loggedIn(res.user)
        }
        else{
        this.setState({ username: "",password: "",alert:res.message})
        }
      })
    }
    
  }


  render(){
    return (
      <Styles>
      <Form className="LogIn-form" onSubmit={this.handleSubmit}>
      <Form.Group controlId="username">
        <Form.Label>User Name</Form.Label>
        <Form.Control onChange={this.handleChange} name="username"value={this.state.username} type="text" placeholder="Enter User Name" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={this.handleChange} name="password" value={this.state.password} type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Log In
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

export default LogIn;

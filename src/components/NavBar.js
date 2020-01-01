import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const Styles = styled.div`
  .navbar {
    background-color: #9AD68D;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: black;
    &:hover {
      color: #fff;
    }
  }
  img {
    height:40px;
  }
  button {
    background-color:#AADDEC;
    border-color:black;
    color:black;
    &:hover {
      background-color:#90D5EC;
      border-color:black;
      color:white;
    }
  }
  form {
    padding-left:60px;
  }
`;

export const NavBar = (props) => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand as={Link} to='/'><img alt="home icons" src="home.png"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      {props.user.username && 
        (<>
        <Nav className="ml">
          <Nav.Item>
              <Nav.Link as={Link} to={`/@${props.user.username}`}>
                {props.user.username}
              </Nav.Link>
            </Nav.Item>
        </Nav>
      
        <Form inline onSubmit={props.handleSubmit}>
          <FormControl type="text" onChange={props.handleChange} value={props.search} name="search" placeholder="Search Tv Show" className=" mr-sm-2" />
          <Button type="submit">Search</Button>
        </Form>
        </>)
      }
        <Nav className="ml-auto">
          {!props.loggedIn&&<Nav.Item>
            <Nav.Link as={Link} to="/signup" >
              Sign Up
            </Nav.Link>
          </Nav.Item>}
          <Nav.Item>
            {!props.loggedIn?
            <Nav.Link as={Link} to="/login">
              Log In
            </Nav.Link>
            :<Nav.Link as={Link} onClick={props.handleLogout} to="/">
            Logout
            </Nav.Link>
            }
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)


// function NavBar(props) {
//   return (
//     <div className="nav-bar">
//        <Link to="/"><img alt="home icons" src="home.png"/></Link>
//         <div>
//           {/* <input  placeholder="Search..."/> */}
//           <Button color="default"><div>Submit</div></Button>
//         </div>
//         <Link to="/login"><Button color="default"><div>Login</div></Button></Link>
//         <Link to="/signup"><Button color="default" ><div>Sign Up</div></Button></Link>
//         <Button color="default">
//           <div><span aria-label="person" role="img">👤</span></div>
//         </Button>
        
//     </div>
//   );
// }

// export default NavBar;
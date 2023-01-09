import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import Cookies from 'universal-cookie';

function Header({ user, setUser }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogout = e => {

    e.preventDefault();

    fetch(`/logout`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
     
    }).then(resp => {
      if (resp.ok) {
        resp.json().then(data => {
          setUser(null);
        })
      }
    })
  }  

  useEffect(() => {
    if (user) {
      setLoggedIn(true)
    }
    else {
      setLoggedIn(false);
    }
  },[user])
  return (<Navbar style={{ color: "white" }} expand="lg">
    <Container>
      <Link to = "/"> <Navbar.Brand style={{ color: "white" }} href="">Join The Band</Navbar.Brand></Link>
   
      {!loggedIn ?
        <>
          <Link to="/login"> <Navbar.Brand style={{ color: "white" }} href="login">Log In</Navbar.Brand></Link>
          <Link to="/signup"> <Navbar.Brand style={{ color: "white" }} href="signup">Sign Up</Navbar.Brand></Link>
        </> : <Link to="/"> <Navbar.Brand onClick={handleLogout} style={{ color: "white" }} href="signup">Log out</Navbar.Brand></Link>
      }
       <Link to="/profiles"> <Navbar.Brand style={{ color: "white" }}>Profiles</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
  </Container>
</Navbar>)
}
export default Header;
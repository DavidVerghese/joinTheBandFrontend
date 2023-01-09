import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import Cookies from 'universal-cookie';

function Header({ user }) {
  console.log(user);
  const [loggedIn, setLoggedIn] = useState(false);
  const cookies = new Cookies();

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
        </> : <><p style={{ color: "white" }}>Welcome, {user.name}</p>
          <Link to="/"> <Navbar.Brand onClick={  cookies.remove('user_id', { path: '/' })} style={{ color: "white" }} href="signup">Log out</Navbar.Brand></Link>
        </>
      }
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
  </Container>
</Navbar>)
}
export default Header;
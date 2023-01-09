import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";

function Landing({baseURL}) {

  let history = useHistory();

  const [currentUser, setCurrentUser] = useState({ name: 'no user' })
  const [user, setUser] = useState({
    username: "",
    password: "",
    email_address: "", 
    picture_url: "",
    genre: "",                                            
    instrument: "",                                        
    location: "", 
    looking_for: ""
  });
  const [loginErrors, setLoginErrors] = useState([]);
 
  const [toggle,setToggle] = useState(false)

  function meTest()  {
    fetch(`${baseURL}/me`)
      .then((response) => response.json())
      .then((data) => {
        setCurrentUser(data);
        console.log(data);
      });
  }
  

  const handleSubmitLogin = e => {

    e.preventDefault();

    console.log(user);
    fetch(`${baseURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({name:user.username,password: user.password}),
     
    }).then(resp => {
      if(resp.ok){
        resp.json().then(data => {

          setLoginErrors([])
          console.log(data); 
          setCurrentUser(data);
          setToggle(!toggle)
          history.push("/profiles");
          // setUser(data);
            // handleCurrentUser(data)
            // navigate('/')
         })
      }else {
         resp.json().then(json => setLoginErrors(json.errors))
      }
   })

  }  


  

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }


  return <div className="login-or-signup">
    <p>current user: {currentUser.name}</p>
    <Button variant="primary" onClick={meTest}>run /me</Button>

    <Form  onSubmit={handleSubmitLogin}>
      <h2>Log in</h2>
      {loginErrors.map((loginError) => <><em>{loginError}</em><br></br></>)}
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter your username" name="username" value={user.username} onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name="password"  value={user.password} onChange={ handleChange } />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  
    
    
  </div>
}
export default Landing;
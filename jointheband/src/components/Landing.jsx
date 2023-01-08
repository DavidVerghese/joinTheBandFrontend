import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";

function Landing({baseURL,genres,setGenres,instruments,setInstruments,locations,setLocations, users,setUsers}) {

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
  const [signupErrors, setSignupErrors] = useState([]);
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
    debugger;
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


  const handleSubmitSignUp = e => {

    e.preventDefault();

    console.log(user);
    fetch(`${baseURL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: user.username,
        password: user.password,
        email_address: user.email_address, 
        picture_url: user.picture_url,
        genre: user.genre,                                            
        instrument: user.instrument,                                        
        location: user.location, 
        looking_for: user.looking_for
      }),
     
    }).then(resp => {
      if(resp.ok){
        resp.json().then(data => {
          setSignupErrors([])
          if (!genres.includes(data.genre)) {
            setGenres([...genres,data.genre])
          }
          if (!instruments.includes(data.instrument)) {
            setInstruments([...genres,data.instrument])
          }
          if (!locations.includes(data.location)) {
            setLocations([...locations,data.location])
          }
   
          setUsers([...users,data])
          setCurrentUser(data);
          history.push("/profiles");
          // console.log(data);
         
         })
      }else {
         resp.json().then(json => setSignupErrors(json.errors))
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
  
    {/* <form className="login" onSubmit={handleSubmitLogin}>
      
    <h2>Login</h2>
  
  {loginErrors.map((loginError) => <><em>{loginError}</em><br></br></>)}

      
          <div>
        <label htmlFor="name">Name: </label>

          <input type="text" id="name" name="username" value={user.username} onChange={handleChange} />

          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password"  value={user.password} onChange={ handleChange } />
          </div>
          <input  type="submit" value="submit"  />
    </form> */}
    
   
    <form className="signup" onSubmit={handleSubmitSignUp}>
      
    <h2>Sign Up</h2>
    {signupErrors.map((signupError) => <><em>{signupError}</em><br></br></>)}
          <div>
            <label htmlFor="name">Name: </label>
        <input  type="text" id="name" name="username" value={user.username} onChange={ handleChange }/>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password"  value={user.password} onChange={ handleChange } />
      </div>
      
      <div>
            <label htmlFor="email_address">email address: </label>
            <input type="text" id="email_address" name="email_address"  value={user.email_address} onChange={ handleChange } />
      </div>

      <div>
            <label htmlFor="picture_url">picture url: </label>
            <input type="text" id="picture_url" name="picture_url"  value={user.picture_url} onChange={ handleChange } />
      </div>

 
      
      <div>
        <label htmlFor="genre">genre: </label>
          <input list="genres" type="text" id="genre" name="genre" value={user.genre} onChange={handleChange} />
        <datalist id="genres">
          {genres.map((genre) => <option value={genre.name}/>)}
            </datalist> 
      </div>

      <div>
            <label htmlFor="instrument">instrument: </label>
            <input list="instruments" type="text" id="instrument" name="instrument"  value={user.instrument} onChange={ handleChange } />
            <datalist id="instruments">
          {instruments.map((instrument) => <option value={instrument.name}/>)}
            </datalist> 
      </div>

      <div>
            <label htmlFor="location">location: </label>
        <input list="locations" type="text" id="location" name="location" value={user.location} onChange={handleChange} />
        <datalist id="locations">
          {locations.map((instrument) => <option value={instrument.name}/>)}
            </datalist> 
      </div>

      <div>
            <label htmlFor="looking_for">looking for: </label>
        <input list="instruments" type="text" id="looking_for" name="looking_for" value={user.looking_for} onChange={handleChange} />
        <datalist id="instruments">
          {instruments.map((instrument) => <option value={instrument.name}/>)}
            </datalist> 
      </div>
    
          <input  type="submit" value="submit"  />
    </form>
  </div>
}
export default Landing;
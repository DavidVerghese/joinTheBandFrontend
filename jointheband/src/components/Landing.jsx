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

          debugger;

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

    debugger;
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

  const [displayGenreInput, setDisplayGenreInput] = useState(false);
  const [displayInstrumentInput, setDisplayInstrumentInput] = useState(false)
  const [displayLocationInput, setDisplayLocationInput] = useState(false)
  const [displayLookingForInput,setDisplayLookingForInput] = useState(false)


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
  
    
   
    <Form  onSubmit={handleSubmitSignUp}>
      <h2>Sign Up</h2>
      {signupErrors.map((signupError) => <><em>{signupError}</em><br></br></>)}
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter your username" name="username" value={user.username} onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name="password"  value={user.password} onChange={ handleChange } />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="text" placeholder="Enter your email address" name="email_address" value={user.email_address} onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Picture URL</Form.Label>
        <Form.Control type="text" placeholder="Enter your picture url" name="picture_url" value={user.picture_url} onChange={handleChange}/>
      </Form.Group>


      {!displayGenreInput ?
         <Form.Group className="mb-3">
         <Form.Label>Genre</Form.Label>
          <Form.Select onChange={(e) => { if (e.target.value === 'Other') { setDisplayGenreInput(true) } else {setUser({...user,genre:e.target.value})} }}>
          <option value="" disabled selected>Select your genre</option>
          {genres.map((genre) => <option value={genre.name}>{genre.name}</option>)}
          <option>Other</option>
          </Form.Select>
          <Form.Text className="text-muted">
          If you do not see your genre, select 'Other'
        </Form.Text>
        </Form.Group> : null}
      {displayGenreInput ? <Form.Group className="mb-3">
        <Form.Label>Genre</Form.Label>
        <Form.Control type="text" placeholder="Enter your genre" name="genre" value={user.genre} onChange={handleChange}/>
      </Form.Group> : null}

      {!displayInstrumentInput ?
         <Form.Group className="mb-3">
         <Form.Label>Instrument</Form.Label>
          <Form.Select onChange={(e) => { if (e.target.value === 'Other') { setDisplayInstrumentInput(true) } else {setUser({...user,instrument:e.target.value})} }}>
          <option value="" disabled selected>Select your instrument</option>
          {instruments.map((instrument) => <option value={instrument.name}>{instrument.name}</option>)}
          <option>Other</option>
          </Form.Select>
          <Form.Text className="text-muted">
          If you do not see your instrument, select 'Other'
        </Form.Text>
        </Form.Group> : null}
      {displayInstrumentInput ? <Form.Group className="mb-3">
        <Form.Label>Instrument</Form.Label>
        <Form.Control type="text" placeholder="Enter your instrument" name="instrument" value={user.instrument} onChange={handleChange} />
        <Form.Text className="text-muted">
          Enter in your instrument
        </Form.Text>
      </Form.Group> : null}

      {!displayLocationInput ?
         <Form.Group className="mb-3">
         <Form.Label>Location</Form.Label>
          <Form.Select onChange={(e) => { if (e.target.value === 'Other') { setDisplayLocationInput(true) } else {setUser({...user,location:e.target.value})} }}>
          <option value="" disabled selected>Select your location</option>
          {locations.map((location) => <option value={location.name}>{location.name}</option>)}
          <option>Other</option>
          </Form.Select>
          <Form.Text className="text-muted">
          If you do not see your location, select 'Other'
        </Form.Text>
        </Form.Group> : null}
      {displayLocationInput ? <Form.Group className="mb-3">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Enter your location" name="location" value={user.location} onChange={handleChange}/>
      </Form.Group> : null}

      {!displayLookingForInput ?
         <Form.Group className="mb-3">
         <Form.Label>Looking For</Form.Label>
          <Form.Select onChange={(e) => { if (e.target.value === 'Other') { setDisplayLookingForInput(true) } else {setUser({...user,looking_for:e.target.value})} }}>
          <option value="" disabled selected>Select the instrument you want to collaborate with</option>
          {instruments.map((instrument) => <option value={instrument.name}>{instrument.name}</option>)}
          <option>Other</option>
          </Form.Select>
          <Form.Text className="text-muted">
          If you do not see the instrument you want to collaborate with, select 'Other'
        </Form.Text>
        </Form.Group> : null}
      {displayLookingForInput ? <Form.Group className="mb-3">
        <Form.Label>Looking For</Form.Label>
        <Form.Control type="text" placeholder="Enter the instrument you are looking for" name="looking_for" value={user.looking_for} onChange={handleChange} />
        <Form.Text className="text-muted">
         Enter the instrument you want to collaborate with
        </Form.Text>
      </Form.Group> : null}


      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  
    
    
  </div>
}
export default Landing;
import { useState, useEffect } from 'react';
import { Hint } from 'react-autocomplete-hint';

function Landing() {

  const [currentUser, setCurrentUser] = useState({ name: 'no user' })
  const [user, setUser] = useState({
    username: "",
    password: "",
    email_address: "", 
    picture_url: "",
    genre_id: "",                                            
    instrument_id: "",                                        
    location_id: "", 
    looking_for_id: ""
  });
  const [genres, setGenres] = useState([]);
  const [instruments, setInstruments] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/genres")
      .then((response) => response.json())
      .then((data) => {
        setGenres(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/instruments")
      .then((response) => response.json())
      .then((data) => {
        setInstruments(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/locations")
      .then((response) => response.json())
      .then((data) => {
        setLocations(data);
      });
  }, []);


  const options = ["orange", "banana", "apple"];
  
  const [toggle,setToggle] = useState(false)

  // useEffect(() => {
  //   // debugger;
  //   fetch("http://localhost:3000/me")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);

  function meTest()  {
    fetch("http://localhost:3000/me")
      .then((response) => response.json())
      .then((data) => {
        setCurrentUser(data);
        console.log(data);
      });
  }
  

  const handleSubmitLogin = e => {

    e.preventDefault();

    console.log(user);
    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({name:user.username,password: user.password}),
     
    }).then(resp => {
      if(resp.ok){
        resp.json().then(data => {
          console.log(data); 
          setCurrentUser(data);
          setToggle(!toggle)
          // setUser(data);
            // handleCurrentUser(data)
            // navigate('/')
         })
      }else {
         resp.json().then(json => console.log(json.errors))
      }
   })

  }  


  const handleSubmitSignUp = e => {

    e.preventDefault();

    console.log(user);
    fetch('http://localhost:3000/signup', {
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
        genre_id: user.genre_id,                                            
        instrument_id: user.instrument_id,                                        
        location_id: user.location_id, 
        looking_for_id: user.looking_for_id
      }),
     
    }).then(resp => {
      if(resp.ok){
        resp.json().then(data => {
          setCurrentUser(data);
          console.log(data);
          // setUser(data);
            // handleCurrentUser(data)
            // navigate('/')
         })
      }else {
         resp.json().then(json => console.log(json.errors))
      }
   })

  } 
  

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }



  return <div>
    <p>current user: {currentUser.name}</p>
    <button onClick={meTest}>run /me</button>
    <h2>Login</h2>
  
  
                
    <form className="login" onSubmit={ handleSubmitLogin }>
          <div>
        <label htmlFor="name">Name: </label>
        <Hint options={["orange", "banana", "apple"]}>
          <input type="text" id="name" name="username" value={user.username} onChange={handleChange} />
        </Hint>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password"  value={user.password} onChange={ handleChange } />
          </div>
          <input  type="submit" value="submit"  />
    </form>
    
    <h2>Sign Up</h2>

    <form className="signup" onSubmit={ handleSubmitSignUp }>
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
        <label htmlFor="genre_id">genre id: </label>
          <input list="genres" type="text" id="genre_id" name="genre_id" value={user.genre_id} onChange={handleChange} />
        <datalist id="genres">
          {genres.map((genre) => <option value={genre.name}/>)}
            </datalist> 
      </div>

      <div>
            <label htmlFor="instrument_id">instrument id: </label>
            <input list="instruments" type="text" id="instrument_id" name="instrument_id"  value={user.instrument_id} onChange={ handleChange } />
            <datalist id="instruments">
          {instruments.map((instrument) => <option value={instrument.name}/>)}
            </datalist> 
      </div>

      <div>
            <label htmlFor="location_id">location id: </label>
        <input list="locations" type="text" id="location_id" name="location_id" value={user.location_id} onChange={handleChange} />
        <datalist id="locations">
          {locations.map((instrument) => <option value={instrument.name}/>)}
            </datalist> 
      </div>

      <div>
            <label htmlFor="looking_for_id">looking for id: </label>
        <input list="instruments" type="text" id="looking_for_id" name="looking_for_id" value={user.looking_for_id} onChange={handleChange} />
        <datalist id="instruments">
          {instruments.map((instrument) => <option value={instrument.name}/>)}
            </datalist> 
      </div>
    
          <input  type="submit" value="submit"  />
    </form>
  </div>
}
export default Landing;
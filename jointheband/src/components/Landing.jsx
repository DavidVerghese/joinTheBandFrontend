import { useState } from 'react';

function Landing() {

  const [user, setUser] = useState({ username: "", password: "" });

  const testUser = {
    name: "hellswo",
    password: "hesllo!",
    email_address: "twess3t", 
    picture_url: "piwcsture.jpeg",
    genre_id: 1754,                                            
    instrument_id: 768,                                        
    location_id: 1801, 
    looking_for_id: 769
  }
  const handleSubmit = e => {

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
    <h2>Login</h2>
    <form className="login" onSubmit={ handleSubmit }>
          <div>
            <label htmlFor="name">Name: </label>
        <input  type="text" id="name" name="username" value={user.username} onChange={ handleChange }/>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password"  value={user.password} onChange={ handleChange } />
          </div>
          <input  type="submit" value="submit"  />
    </form>
    
    <h2>Sign Up</h2>
  </div>
}
export default Landing;
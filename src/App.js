import './App.css';
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home.jsx"
import AllProfiles from "./components/AllProfiles.jsx"
import Cookies from 'universal-cookie';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';

function App() {
  const [users, setUsers] = useState([]);
  
  const cookies = new Cookies();
  const baseURL = process.env.NODE_ENV === 'production' ?  `https://join-the-band-api.herokuapp.com/` : `http://localhost:3000`
  const [user, setUser] = useState(false);

  console.log(user);
  useEffect(() => {
    const id = cookies.get('user_id');
    fetch(`/lookup/${id}`)
    .then(resp => {
        if(resp.ok){
          resp.json().then(data => {
            setUser(data);
              //  setUser(data)
              //  data.error? setLoggedIn(false) : setLoggedIn(true)
            })
        }else {
            // resp.json().then(data => setErrors(data.error))
        }
    })
   
  }, [])

  useEffect(() => {
    fetch(`/me`)
    .then(resp => {
        if(resp.ok){
          resp.json().then(data => {
           console.log(data);
               setUser(data)
              //  data.error? setLoggedIn(false) : setLoggedIn(true)
            })
        }else {
            // resp.json().then(data => setErrors(data.error))
        }
    })
   
  }, [])
  
  useEffect(() => {
    fetch(`/users/`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const [genres, setGenres] = useState([]);
  useEffect(() => {
    fetch(`/genres`)
      .then((response) => response.json())
      .then((data) => {
        setGenres(data);
      });
  }, []);
   
  const [instruments, setInstruments] = useState([]);
  const [locations, setLocations] = useState([]);

  

  useEffect(() => {
    fetch(`/instruments`)
      .then((response) => response.json())
      .then((data) => {
        setInstruments(data);
      });
  }, []);

  useEffect(() => {
    fetch(`/locations`)
      .then((response) => response.json())
      .then((data) => {
        setLocations(data);
      });
  }, []);

  return (
    <div>
      <main>
        <Header user={user} setUser={setUser} />
      <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route path="/login">
          <Login user={user} setUser={setUser} baseURL={baseURL} instruments={instruments} setInstruments={setInstruments} locations={locations} setLocations={setLocations} genres={genres} setGenres={setGenres} users={users} setUsers={setUsers} />
        </Route>

        <Route path="/signup">
          <Signup baseURL={baseURL} instruments={instruments} setInstruments={setInstruments} locations={locations} setLocations={setLocations} genres={genres} setGenres={setGenres} users={users} setUsers={setUsers} />
        </Route>
       

        <Route path="/profiles">
          <AllProfiles baseURL={baseURL} genres={genres} instruments={instruments} locations={locations} users={users}/>
        </Route>

      </main>
    </div>
  );
}

export default App;

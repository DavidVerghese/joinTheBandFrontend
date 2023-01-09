import './App.css';
import { useEffect, useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home.jsx"
import AllProfiles from "./components/AllProfiles.jsx"
import Cookies from 'universal-cookie';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';
import NoMatch from './components/NoMatch/NoMatch';
import EditProfile from './components/EditProfile';


function App() {
  const [users, setUsers] = useState([]);
  
  const baseURL = process.env.NODE_ENV === 'production' ?  `https://join-the-band-api.herokuapp.com/` : `http://localhost:3000`
  const [user, setUser] = useState(false);

  console.log(user);


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
      <Switch>
      <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route path="/login">
          <Login user={user} setUser={setUser} baseURL={baseURL} instruments={instruments} setInstruments={setInstruments} locations={locations} setLocations={setLocations} genres={genres} setGenres={setGenres} users={users} setUsers={setUsers} />
        </Route>

        <Route path="/signup">
          <Signup baseURL={baseURL} instruments={instruments} setInstruments={setInstruments} locations={locations} setLocations={setLocations} genres={genres} setGenres={setGenres} users={users} setUsers={setUsers} />
        </Route>
       
          {user ?
            <>
            <Route path="/profiles">
              <AllProfiles baseURL={baseURL} genres={genres} instruments={instruments} locations={locations} users={users}/>
            </Route>
            <Route path="/edit-profile">
                <EditProfile user={user} setUser={setUser}  instruments={instruments} setInstruments={setInstruments} locations={locations} setLocations={setLocations} genres={genres} setGenres={setGenres} users={users} setUsers={setUsers}  />
              </Route>
            </>
            : null}
          
          

        <Route exact path="*">
            <NoMatch/>
          </Route>
        </Switch>

      </main>
    </div>
  );
}

export default App;

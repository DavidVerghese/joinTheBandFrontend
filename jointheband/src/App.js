import './App.css';
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home.jsx"
import AllProfiles from "./components/AllProfiles.jsx"

import Landing from './components/Landing';
function App() {
  const [users, setUsers] = useState([]);
  
 
  console.log(process.env.NODE_ENV)
  const baseURL = process.env.NODE_ENV === 'production' ?  `https://join-the-band-api.herokuapp.com/` : `http://localhost:3000`


  useEffect(() => {
    fetch(`${baseURL}/users/`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const [genres, setGenres] = useState([]);
  useEffect(() => {
    fetch(`${baseURL}/genres`)
      .then((response) => response.json())
      .then((data) => {
        setGenres(data);
      });
  }, []);
   
  const [instruments, setInstruments] = useState([]);
  const [locations, setLocations] = useState([]);

  

  useEffect(() => {
    fetch(`${baseURL}/instruments`)
      .then((response) => response.json())
      .then((data) => {
        setInstruments(data);
      });
  }, []);

  useEffect(() => {
    fetch(`${baseURL}/locations`)
      .then((response) => response.json())
      .then((data) => {
        setLocations(data);
      });
  }, []);

  return (
    <div>
      <main>
        
        <Route exact path="/">
          <Landing baseURL={baseURL} instruments={instruments} setInstruments={setInstruments} locations={locations} setLocations={setLocations} genres={genres} setGenres={setGenres} users={users} setUsers={setUsers} />
        </Route>
        <Route path="/home">
          <Home/>
        </Route>

        <Route path="/profiles">
          <AllProfiles baseURL={baseURL} genres={genres} instruments={instruments} locations={locations} users={users}/>
        </Route>

      </main>
    </div>
  );
}

export default App;

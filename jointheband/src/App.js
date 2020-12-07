import logo from './logo.svg';
import './App.css';
import { baseURL, config } from "./services";
import { useEffect, useState } from "react";
import axios from "axios"
import { Route, Link } from "react-router-dom";
import Form from "./components/Form.jsx"
import Home from "./components/Home.jsx"
import AllProfiles from "./components/AllProfiles.jsx"
import SearchResults from "./components/SearchResults.jsx"

function App() {
  
  const [data, setData] = useState([])

  let findMusician = [];
  let [userInput, setUserInput] = useState([]);
 
  const searchByName = (e) => {
    findMusician = data.filter(
      (item) => item.fields.Musician === e.target.value
    );
  };

 
  const searchByNameSubmit = (e) => {
     if (findMusician.length === 0) {
       console.log("no matches found!");
     } else {
       console.log(findMusician);
       setUserInput(findMusician);
     }
   };
  
  useEffect(() => {
    async function getData() {
      let response = await axios.get(baseURL + '/Musicians', config)
      setData(response.data.records)
      
    }
    getData();


  }, [])

  return (
    <div className="App">
      <header>
        <h1>Join the Band!</h1>
      <nav>
      <Link to="/">Home</Link>
        </nav>
      </header>
      <main>
      <Route exact path="/">
          <Home data={data}/>
        </Route>
        <Route path="/form">
          <Form data={data}/>
        </Route>
        <Route path="/profiles">
          <AllProfiles data={data}/>
        </Route>
        <Route path="/search">
          <SearchResults musician={userInput}/>
        </Route>
        
        <label htmlFor="searchByName">Search by name</label>
        <input name="searchByName" type="text" onChange={searchByName} />
        {/* <label htmlFor="searchByInstrument">Search by instrument</label>
        <input name="searchByInstrument" type="text" onChange={searchByName} />
        <label htmlFor="searchByGenre">Search by genre</label>
        <input name="searchByGenre" type="text" onChange={searchByName} />
        <label htmlFor="searchByLookingFor">Search by location</label>
      <input name="searchByLookingFor" type="text" onChange={searchByName} />
        <label htmlFor="searchByLocation">Search by location</label>
      <input name="searchByLocation" type="text" onChange={searchByName} /> */}
      <Link to="/search">
        <button onClick={searchByNameSubmit}>Submit</button>
      </Link>

        <div>
        </div>
      </main>
      <footer>
        <h3>David Verghese's Website</h3>
      </footer>
    </div>
  );
}

export default App;

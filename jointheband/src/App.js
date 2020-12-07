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
 

  const searchByAnything = (e, columnValue) => {
    findMusician = data.filter(
      // (item) => item.fields[columnValue] === e.target.value
       (item) => item.fields.Instrument.includes(e.target.value))
    console.log(findMusician)
  };

 
  const searchByNameSubmit = (e) => {
     if (findMusician.length === 0) {
       console.log("no matches found!");
     } else {
       console.log(findMusician);
       setUserInput(findMusician);
       console.log('instrument', userInput)
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
        
        {/* UNCOMMENT LINES 86-89 */}
        <label htmlFor="searchByName">Search by name</label>
        <input name="searchByName" type="text" onChange={(e)=>searchByAnything(e, 'Musician')} />
         <label htmlFor="searchByInstrument">Search by instrument</label>
        <input name="searchByInstrument" type="text" onChange={(e) => searchByAnything(e, 'Instrument')} />

        
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

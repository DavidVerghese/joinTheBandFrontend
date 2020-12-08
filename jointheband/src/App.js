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
  let [searchValue, setSearchValue] = useState([]);

  useEffect(() => {
    async function getData() {
      let response = await axios.get(baseURL + '/Musicians', config)
      setData(response.data.records)
      console.log(typeof response.data.records[0].fields)
    }
    getData();


  }, [])

  const search = (e) => {
    setSearchValue(e.target.value)
  };
  const searchByNameSubmit = (e) => {
    // e.preventDefault()
    console.clear();
     let doesItInclude = data.filter(
       (item2) => {
         console.log(item2)
         if (item2.fields.Instrument !== undefined) {
         
            if (item2.fields.Genre.includes(searchValue)) {
              findMusician = data.filter(
               (item) => item.fields.Genre === searchValue
              );
            }
            if (item2.fields.Instrument.includes(searchValue)) {
              findMusician = data.filter(
               (item) => item.fields.Instrument === searchValue
              );
           }
            if (item2.fields.Location.includes(searchValue)) {
              findMusician = data.filter(
               (item) => item.fields.Location === searchValue
              );
            }
            if (item2.fields.Looking_for.includes(searchValue)) {
              findMusician = data.filter(
               (item) => item.fields.Looking_for === searchValue
              );
            }
            if (item2.fields.Musician.includes(searchValue)) {
              findMusician = data.filter(
               (item) => item.fields.Musician === searchValue
              );
            }
            if (item2.fields.Picture.includes(searchValue)) {
              findMusician = data.filter(
               (item) => item.fields.Picture === searchValue
              );
            }
            else {
              // console.log("no matches")
           }
         }
      }
     )
    setUserInput(findMusician)
   };
  

  return (
    <div>
      <header>
        <div class="headerBackground">
        <h1>Join the Band!</h1>
      <nav>
      <Link to="/"><p>Home</p></Link>
          </nav>
        </div>
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
        
        <label htmlFor="searchBar">Search</label>
        <input name="searchBar" type="text" onChange={search} />


        
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

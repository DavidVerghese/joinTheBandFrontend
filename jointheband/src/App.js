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
import NoResults from "./components/NoResults.jsx"
import violinsound from "./sounds/violinsound.mp3"
import basssound from "./sounds/basssoundone.mp3"
import drumsound from "./sounds/drumsound.mp3";

function App() {
  
  const [data, setData] = useState([])

  let results = 0;
  let findMusician = [];
  let findMusician2 = [];
  let findMusician3 = [];
  const [userInput, setUserInput] = useState([]);
  const [userInput2, setUserInput2] = useState([]);
  const [userInput3, setUserInput3] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [warningMessage, setWarningMessage] = useState('');

  const violinAudio = new Audio(violinsound);
  violinAudio.volume = 0.05;
  const bassAudio = new Audio(basssound);
  bassAudio.volume = 0.05;
  const drumAudio = new Audio(drumsound);
  drumAudio.volume = 0.05;
  const [toggleFetch,setToggleFetch] = useState(true)


  useEffect(() => {
    async function getData() {
      let response = await axios.get(baseURL + '/Musicians', config)
      setData(response.data.records)
    }
    getData();

  }, [toggleFetch])

  const search = (e) => {
      setSearchValue(e.target.value)
  };
  const searchByNameSubmit = (e) => {
    // e.preventDefault()

    console.clear();
    if (typeof searchValue === 'number') {
      e.preventDefault()
      setWarningMessage("* type something new!")
    }
    else {
      setWarningMessage("")
    }
    if (searchValue.length > 0) {
      let searchValueIndividualWords = searchValue.split(" ")
      let doesItInclude = data.filter(
        (item2) => {
          if (item2.fields.Instrument !== undefined) {

            // search by Genre

            if (item2.fields.Genre.includes(searchValueIndividualWords[0])) {
              findMusician = data.filter(
                (item) => item.fields.Genre === searchValueIndividualWords[0]
              );
              results += 1;
            }
            if (item2.fields.Genre.includes(searchValueIndividualWords[1])) {
              findMusician2 = data.filter(
                (item) => item.fields.Genre === searchValueIndividualWords[1]
              );
              results += 1;
            }
            if (item2.fields.Genre.includes(searchValueIndividualWords[2])) {
              findMusician3 = data.filter(
                (item) => item.fields.Genre === searchValueIndividualWords[2]
              );
              results += 1;
            }
           
            // search By Instrument 

            if (item2.fields.Instrument.includes(searchValueIndividualWords[0])) {
              findMusician = data.filter(
                (item) => item.fields.Instrument === searchValueIndividualWords[0]
              );
              results += 1;
            }
            if (item2.fields.Instrument.includes(searchValueIndividualWords[1])) {
              findMusician2 = data.filter(
                (item) => item.fields.Instrument === searchValueIndividualWords[1]
              );
              results += 1;
            }
            if (item2.fields.Instrument.includes(searchValueIndividualWords[2])) {
              findMusician3 = data.filter(
                (item) => item.fields.Instrument === searchValueIndividualWords[2]
              );
              results += 1;
            }
            // search by location 
            if (item2.fields.Location.includes(searchValueIndividualWords[0])) {
              findMusician = data.filter(
                (item) => item.fields.Location === searchValueIndividualWords[0]
              );
              results += 1;
            }
            if (item2.fields.Location.includes(searchValueIndividualWords[1])) {
              findMusician2 = data.filter(
                (item) => item.fields.Location === searchValueIndividualWords[1]
              );
              results += 1;
            }
            if (item2.fields.Location.includes(searchValueIndividualWords[2])) {
              findMusician3 = data.filter(
                (item) => item.fields.Location === searchValueIndividualWords[2]
              );
              results += 1;
            }
            // search by what users are looking for
            if (item2.fields.Looking_for.includes(searchValueIndividualWords[0])) {
              findMusician = data.filter(
                (item) => item.fields.Looking_for === searchValueIndividualWords[0]
              );
              results += 1;
            }
            if (item2.fields.Looking_for.includes(searchValueIndividualWords[1])) {
              findMusician2 = data.filter(
                (item) => item.fields.Looking_for === searchValueIndividualWords[1]
              );
              results += 1;
            }
            if (item2.fields.Looking_for.includes(searchValueIndividualWords[2])) {
              findMusician3 = data.filter(
                (item) => item.fields.Looking_for === searchValueIndividualWords[2]
              );
              results += 1;
            }
            // Search by Name 
            if (item2.fields.Musician.includes(searchValueIndividualWords[0])) {
              findMusician = data.filter(
                (item) => item.fields.Musician === searchValueIndividualWords[0]
              );
              results += 1;
            }
            if (item2.fields.Musician.includes(searchValueIndividualWords[1])) {
              findMusician2 = data.filter(
                (item) => item.fields.Musician === searchValueIndividualWords[1]
              );
              results += 1;
            }
            if (item2.fields.Musician.includes(searchValueIndividualWords[2])) {
              findMusician3 = data.filter(
                (item) => item.fields.Musician === searchValueIndividualWords[2]
              );
              results += 1;
            }
          }
        }
      )
    }
    setUserInput(findMusician)
    setUserInput2(findMusician2)
    setUserInput3(findMusician3)
    setSearchValue(results)
    if (results > 0) {
      violinAudio.play()
    }
    else {
      drumAudio.play()
    }
   };
   

  return (
    <div>
      <header>
        <div className="headerBackground">
          <h1>Join the Band!</h1>
          <h3>find musicians in your area</h3>
      <nav>
            <Link onClick={function (){ bassAudio.play() }} to="/"><p>Home</p></Link>
          </nav>
        </div>
      </header>
      <main>

      <div className="searchBarDiv">
      <p><em id = "searchinstructions">Search for musicians by instrument,location, genre, etc</em></p>
        <label htmlFor="searchBar"><p>Search:</p></label>
        <input name="searchBar" type="text" onChange={search} />
        <Link to="/search">
        <button onClick={searchByNameSubmit}>Submit</button>
      </Link>
        <p>{warningMessage}</p>
      </div>
      <Route exact path="/">
          <Home data={data}/>
        </Route>
        <Route path="/form">
          <Form data={data} refresh={setToggleFetch}/>
        </Route>
        <Route path="/profiles">
          <AllProfiles data={data}/>
        </Route>
        <Route path="/search">
          <SearchResults musician={userInput} numberOfResults={searchValue}/>
          <SearchResults musician={userInput2} numberOfResults={searchValue} />
          <SearchResults musician={userInput3} numberOfResults={searchValue} />
          <NoResults numberOfResults={searchValue} />
        </Route>
        

      
        
        <div>
        </div>
      </main>
      <footer>
        <h3>David Verghese's Website!</h3>
      </footer>
    </div>
  );
}

export default App;

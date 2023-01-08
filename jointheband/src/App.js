import './App.css';
import { config } from "./services";
import { useEffect, useState } from "react";
import axios from "axios"
import { Route, Link } from "react-router-dom";
import Form from "./components/Form.jsx"
import Home from "./components/Home.jsx"
import AllProfiles from "./components/AllProfiles.jsx"
import SearchResults from "./components/SearchResults.jsx"
import violinsound from "./sounds/violinsound.mp3"
import basssound from "./sounds/basssoundone.mp3"
import drumsound from "./sounds/drumsound.mp3";
import basssoundtwo from "./sounds/harpsound.mp3";
import guitarsound from "./sounds/guitarstrum.mp3";
import Landing from './components/Landing';
function App() {
  const bassAudioTwo = new Audio(basssoundtwo);
  bassAudioTwo.volume = 0.02;
  const guitarAudio = new Audio(guitarsound);
  guitarAudio.volume = 0.02;
  const [users, setUsers] = useState([]);
  const [data, setData] = useState([])
  let results = 0;
  // we will we use findMusician and searchResult to 
  // store profiles that match the user's search later on
  let findMusician = [];
  let findMusician2 = [];
  let findMusician3 = [];
  // state variables
  const [searchResult1, setSearchResult1] = useState([]);
  const [searchResult2, setSearchResult2] = useState([]);
  const [searchResult3, setSearchResult3] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [warningMessage, setWarningMessage] = useState('');
  const [numberOfResults, setNumberOfResults] = useState(0);
  // here we create variables to represent the sounds we 
  // have stored in the sound folder. Later on, we will 
  // trigger these sounds in response to user input
  const violinAudio = new Audio(violinsound);
  violinAudio.volume = 0.05;
  const bassAudio = new Audio(basssound);
  bassAudio.volume = 0.05;
  const drumAudio = new Audio(drumsound);
  drumAudio.volume = 0.05;
  const [toggleFetch, setToggleFetch] = useState(true)
  
  console.log(process.env.NODE_ENV)
  const baseURL = process.env.NODE_ENV === 'production' ?  `https://join-the-band-api.herokuapp.com/` : `http://localhost:3000`

  useEffect(() => {
    async function getData() {
      let response = await axios.get(baseURL + '/Musicians', config)
      setData(response.data.records)
    }
    getData();
    // toggleFetch makes sure that API call occurs 
    // everytime the boolean value of 'toggleFetch' changes.
    // In our <Form/>, there is a 'refresh' pop equal to 
    // 'toggleFetch.' When you click the submit button on the form
    // an axios.put request is made to Airtable, and
    // props.refresh is changed to be the opposite of 
    // whatever it previously was. Thus 'toggleFetch' is changed.
    // this ensures than useEffect runs again, and the new profile 
    // we just created is pulled down into React.
  }, [toggleFetch]);

  // useEffect(() => {
  //   // debugger;
  //   fetch("http://api.randomuser.me/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);

  useEffect(() => {
    // debugger;
    fetch(`${baseURL}/users/`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);


  // document.cookie('e',100000)

 

  const search = (e) => {
    // sets the state variable 'searchValue' equal to the user's 
    // input
      setSearchValue(e.target.value)
  };

  // the search function 

  const searchSubmit = (e) => {
    // if you press enter more than once, you get a number
    // instead of a string. I used this to create a warning message.
    if (typeof searchValue === 'number') {
      // e.preventDefault();
      results = 0;
      setWarningMessage("* type something new!")
    }
    else {
      setWarningMessage("")
    }
    if (searchValue.length > 0) {
      // if there are multiple words in the user's seach, 
      // eg 'Guitar NYC', searchValueIndividualWords splits 
      // them into multiple words, and compares each one 
      // to the data stored in each fields of each profile in 
      // Airtable. It also increases the variable 'results' by 
      // one each time a match is found. 'results' is then 
      // passed as a prop (numberOfResults) to <NoResults/>. 
      // If the 'props.numberOfResults' is zero, 
      // then <NoResults/> renders a "No results found" message 
      // on the page. 'results' is also passed as a prop to 
      // <SearchResults'. If props.numberOfResults' is equal 
      //to zero then <SearchResults/> returns an empty div.
      let searchValueIndividualWords = searchValue.split(" ")
      let doesItInclude = data.filter(
        (item2) => {
          // if a field in Airtable is empty, you get an error 
          // I fixed this with the following if statement.
          if (item2.fields.Instrument !== undefined) {
            // This checks if the first word in the user's search matches any of the 
            // genres listed in the profiles in Airtable
            if (item2.fields.Genre.includes(searchValueIndividualWords[0])) {
              findMusician = data.filter(
                (item) => item.fields.Genre === searchValueIndividualWords[0]
              );
              // results += 1;
              if (findMusician.length !== 0) {
                results += 1;
              };
            }
            // This checks if the second word in the user's search matches 
            // any of the genres listed in the profiles in Airtable
            if (item2.fields.Genre.includes(searchValueIndividualWords[1])) {
              findMusician2 = data.filter(
                (item) => item.fields.Genre === searchValueIndividualWords[1]
              );
              // results += 1;
              if (findMusician2.length !== 0) {
                results += 1;
              };
            }
            // This checks if the third word in the user's search matches 
            // any of the genres listed in the profiles in Airtable
            if (item2.fields.Genre.includes(searchValueIndividualWords[2])) {
              findMusician3 = data.filter(
                (item) => item.fields.Genre === searchValueIndividualWords[2]
              );
              // results += 1;
              if (findMusician3.length !== 0) {
                results += 1;
              };
            }
            // This checks if any of the words in the user's search 
            // match any of the names of the instruments listed 
            // in the profiles in Airtable
            if (item2.fields.Instrument.includes(searchValueIndividualWords[0])) {
              findMusician = data.filter(
                (item) => item.fields.Instrument === searchValueIndividualWords[0]
              );
              // results += 1;
              if (findMusician.length !== 0) {
                results += 1;
              };
            }
            if (item2.fields.Instrument.includes(searchValueIndividualWords[1])) {
              findMusician2 = data.filter(
                (item) => item.fields.Instrument === searchValueIndividualWords[1]
              );
              // results += 1;
              if (findMusician2.length !== 0) {
                results += 1;
              };
            }
            if (item2.fields.Instrument.includes(searchValueIndividualWords[2])) {
              findMusician3 = data.filter(
                (item) => item.fields.Instrument === searchValueIndividualWords[2]
              );
              // results += 1;
              if (findMusician3.length !== 0) {
                results += 1;
              };
            }
            // This checks if any of the words in the user's search 
            // match any of the names of the locations listed 
            // in the profiles in Airtable
            if (item2.fields.Location.includes(searchValueIndividualWords[0])) {
              findMusician = data.filter(
                (item) => item.fields.Location === searchValueIndividualWords[0]
              );
              // results += 1;
              if (findMusician.length !== 0) {
                results += 1;
              };
            };
            if (item2.fields.Location.includes(searchValueIndividualWords[1])) {
              findMusician2 = data.filter(
                (item) => item.fields.Location === searchValueIndividualWords[1]
              );
              // results += 1;
              if (findMusician2.length !== 0) {
                results += 1;
              };
            }
            if (item2.fields.Location.includes(searchValueIndividualWords[2])) {
              findMusician3 = data.filter(
                (item) => item.fields.Location === searchValueIndividualWords[2]
              );
              // results += 1;
              if (findMusician3.length !== 0) {
                results += 1;
              };
            }
            // This checks if any of the words in the user's search 
            // match what the musicians listed in Airtable said they 
            // were looking for 
            if (item2.fields.Looking_for.includes(searchValueIndividualWords[0])) {
              findMusician = data.filter(
                (item) => item.fields.Looking_for === searchValueIndividualWords[0]
              );
              // results += 1;
              if (findMusician.length !== 0) {
                results += 1;
              };
            }
            if (item2.fields.Looking_for.includes(searchValueIndividualWords[1])) {
              findMusician2 = data.filter(
                (item) => item.fields.Looking_for === searchValueIndividualWords[1]
              );
              // results += 1;
              if (findMusician2.length !== 0) {
                results += 1;
              };
            }
            if (item2.fields.Looking_for.includes(searchValueIndividualWords[2])) {
              findMusician3 = data.filter(
                (item) => item.fields.Looking_for === searchValueIndividualWords[2]
              );
              // results += 1;
              if (findMusician3.length !== 0) {
                results += 1;
              };
            }
            // This checks if any of the words in the user's search 
            // match any of the names listed in the profiles in Airtable
            if (item2.fields.Musician.includes(searchValueIndividualWords[0])) {
              findMusician = data.filter(
                (item) => item.fields.Musician === searchValueIndividualWords[0]
              );
              // results += 1;
              if (findMusician.length !== 0) {
                results += 1;
              };
            }
            if (item2.fields.Musician.includes(searchValueIndividualWords[1])) {
              findMusician2 = data.filter(
                (item) => item.fields.Musician === searchValueIndividualWords[1]
              );
              // results += 1;
              if (findMusician2.length !== 0) {
                results += 1;
              };
            }
            if (item2.fields.Musician.includes(searchValueIndividualWords[2])) {
              findMusician3 = data.filter(
                (item) => item.fields.Musician === searchValueIndividualWords[2]
              );
              // results += 1;
              if (findMusician3.length !== 0) {
                results += 1;
              };
              }
            }
          }
        )
    }
    // we update the values of 'searchResult1', 'searchResult2', 
    // and 'searchResult3' to hold the profiles that contain
    // information that matches the words in the user's search
    // I might've been able to use 'setSearchResults1' inside of 
    // 'doesitInclude' above.
    setSearchResult1(findMusician)
    setSearchResult2(findMusician2)
    setSearchResult3(findMusician3)
    setSearchValue(results);
    setNumberOfResults(results);
    // if there are no matches, we hear the 'ba dum tss' drum sound
    // if there are matches, we hear the violin sound.
    if (results > 0) {
      violinAudio.play()
    }
    else {
      drumAudio.play()
    }
  };

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
      {/* <header>
        <div className="headerBackground">
            <Link onClick={function (){ bassAudio.play() }} to="/"><p>Join the Band!</p></Link>
          <Link
        onClick={function () {
          bassAudioTwo.play();
        }}
        to="/form"
      >
        <p>Make a post!</p>
      </Link>
      <Link
        onClick={function () {
          guitarAudio.play();
        }}
        to="/profiles"
      >
            <p>View All Posts</p>
            
          </Link>
          <p>Search for musicians:</p>
          <div className="searchBarDiv">
          <label htmlFor="searchBar"></label>
        
          <input name="searchBar" type="text" placeholder="instrument,location,genre, etc" onChange={search} />
          <Link to="/search">
            <button id="search-button" onClick={searchSubmit}>Submit</button>
          </Link>
        </div>
        </div>
      </header> */}
      <main>
        
        <Route exact path="/">
          {/* <Home data={data}/> */}
          <Landing baseURL={baseURL} instruments={instruments} setInstruments={setInstruments} locations={locations} setLocations={setLocations} genres={genres} setGenres={setGenres} users={users} setUsers={setUsers} />
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/form">
          {/* setToggleFetch is passed as a prop to Form */}
          <Form data={data} refresh={setToggleFetch}/>
        </Route>
        <Route path="/profiles">
          <AllProfiles baseURL={baseURL} genres={genres} instruments={instruments} locations={locations} users={users} refresh={setToggleFetch} data={data}/>
        </Route>
        <Route path="/search">
          <SearchResults warningMessage={warningMessage} musician={searchResult1} numberOfResults={searchValue}/>
          <SearchResults warningMessage={warningMessage} musician={searchResult2} numberOfResults={searchValue} />
          <SearchResults warningMessage={warningMessage} musician={searchResult3} numberOfResults={searchValue} />
        </Route>
      </main>
      {/* <footer>
        <h3>copyright David Verghese</h3>
      </footer> */}
    </div>
  );
}

export default App;

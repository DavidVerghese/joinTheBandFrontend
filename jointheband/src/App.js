import logo from './logo.svg';
import './App.css';
import { baseURL, config } from "./services";
import { useEffect, useState } from "react";
import axios from "axios"
import { Route, Link } from "react-router-dom";
import Form from "./components/Form.js"
import Home from "./components/Home.js"
import Profiles from "./components/Profiles.js"


function App() {
  
   const [data, setData] = useState([])

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
      <p>Home</p>
      <nav>
      <Link to="/">Home</Link>
          <Link to="/form">Form</Link>
          <Link to="/profiles">Profiles</Link>
        </nav>
      </header>
      <main>
      <Route exact path="/">
      <Home />
        </Route>
        <Route path="/form">
          <Form data={data}/>
        </Route>
        <Route path="/profiles">
          <Profiles data={data}/>
        </Route>
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

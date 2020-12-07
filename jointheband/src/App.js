import logo from './logo.svg';
import './App.css';
import { baseURL, config } from "./services";
import { useEffect, useState } from "react";
import axios from "axios"
import { Route, Link } from "react-router-dom";
import Form from "./components/Form.js"

function App() {
  
   const [data, setData] = useState([])

  // const handleSubmit = async (e) => {
  //  // e.preventDefault();
  //   console.log(musician, instrument, lookingFor)
  //   let data = {
  //     Musician: musician,
  //     Picture: imageAddress,
  //     Instrument: instrument,
  //     Genre: genre,
  //     Looking_for: lookingFor,
  //     Location: location,
  //   }
  //   await axios.post(baseURL + '/Musicians', { fields: data }, config);
  // }

  // const handleDelete = async (e) => {
  //   console.log("deleted!");
  //   let data = {
  //     Musician: musician,
  //     Picture: imageAddress,
  //     Instrument: instrument,
  //     Genre: genre,
  //     Looking_for: lookingFor,
  //     Location: location,
  //   }

  //    await axios.delete(baseURL + '/Musicians', { fields: data }, config);
  //  }

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
        </nav>
      </header>
      <main>
      <Route exact path="/">
        {/* <Home /> */}
        </Route>
        <Route path="/form">
          <Form data={data}/>
      </Route>
        <div class="intro">
        <img src="https://media1.giphy.com/media/13QvN0u5j5SUj6/giphy.gif?cid=ecf05e47tsos9jw567r462i43oqpjho691ily093c8qurxiz&rid=giphy.gif"></img>
          <em><h2>Tired of doing it all on your own?</h2></em>
          <label htmlFor="search">Search</label>
          <input name="search" type="text" />
          <button>Submit</button>
          <button>View All Posts</button>
          <button>Make a post!</button>
        </div>
        <div>
          <h2>Profiles:</h2>
          {data.map((item) => {
            return (
              <div class="profile">
                <h2>{item.fields.Musician}</h2>
                <img src={item.fields.Picture}></img>
                <p>Instrument: {item.fields.Instrument}</p>
                <p>Genre: {item.fields.Genre}</p>
                <p>Looking for: {item.fields.Looking_for}</p>
                <p>Location: {item.fields.Location}</p>
                <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687495670&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div><a href="https://soundcloud.com/dabilliondollarbaby" title="Baby Jesus (DaBaby)" target="_blank" >Baby Jesus (DaBaby)</a> · <a href="https://soundcloud.com/dabilliondollarbaby/bop" title="BOP" target="_blank">BOP</a></div>
              </div>
            )
          })}
        </div>
      </main>
      {/* <div class="formSection">
      <form>
        <h2>Want to create a post!</h2>
        <img src="https://media1.giphy.com/media/ZKHHkPX8TnHyw/giphy.gif?cid=ecf05e47a86294fb3be83bb39fd07cdadcb0f9be07497609&rid=giphy.gif" />
        <em><p>Are you a musician looking to find someone to collaborate with? Just submit the form below to get started. </p></em>
      <label htmlFor="name">Name</label>
      <input name="name" type="text" onChange={(e) => setMusician(e.target.value)}/>
      <label htmlFor="picAddress">Picture URL</label>
      <input name="picAddress" type="text" onChange={(e) => setImageAddress(e.target.value)}/>
      <label htmlFor="instrument">Instrument</label>
        <input name="instrument" type="text" onChange={(e) => setInstrument(e.target.value)} />
        <label htmlFor="genre">Genre</label>
      <input name="genre" type="text" onChange={(e) => setGenre(e.target.value)}/>
      <label htmlFor="lookingFor">Looking For</label>
        <input name="lookingFor" type="text" onChange={(e) => setLookingFor(e.target.value)} />
        <label htmlFor="location">Location</label>
      <input name="location" type="text" onChange={(e) => setLocation(e.target.value)}/>
          <br></br> <button onClick={handleSubmit}>submit</button>
          <br></br> <button onClick={handleDelete}>undo</button>
        </form>
      </div> */}
      <footer>
        <h3>David Verghese's Website</h3>
      </footer>
    </div>
  );
}

export default App;

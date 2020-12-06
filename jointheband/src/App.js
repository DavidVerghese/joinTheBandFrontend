import logo from './logo.svg';
import './App.css';
import { baseURL, config } from "./services";
import { useEffect, useState } from "react";
import axios from "axios"

function App() {
  const [musician, setMusician] = useState('hello')
  const [instrument, setInstrument] = useState('hello')
  const [location, setLocation] = useState('')
  const [genre, setGenre] = useState('')
  const [lookingFor, setLookingFor] = useState('')
  const [imageAddress, setImageAddress] = useState('')
  const [data, setData] = useState([])

  const handleSubmit = async (e) => {
   // e.preventDefault();
    console.log(musician, instrument, lookingFor)
    let data = {
      Musician: musician,
      Picture: imageAddress,
      Instrument: instrument,
      Genre: genre,
      Looking_for: lookingFor,
      Location: location,
    }
    await axios.post(baseURL + '/Musicians', { fields: data }, config);
  }

  useEffect(() => {
    async function getData() {
      let response = await axios.get(baseURL + '/Musicians', config)
      setData(response.data.records)
      console.log(response)
      const req = await axios.post(baseURL + '/Musicians', { Musician: 'Drake' }, config)
      
    }
    getData();


  }, [])

  return (
    <div className="App">
      <header><h1>Join the Band!</h1></header>
      <main>
        <div>
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

      <form onSubmit={handleSubmit}>
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
        <button>submit</button>
        </form>
    </div>
  );
}

export default App;

import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import guitarsound from "../sounds/guitarsound.mp3";
import { Link } from "react-router-dom";

function Form(props) {
  // state variables
  const [musician, setMusician] = useState("");
  const [instrument, setInstrument] = useState("");
  const [location, setLocation] = useState("");
  const [genre, setGenre] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  const [imageAddress, setImageAddress] = useState("");
  const [facebookURL, setFacebookURL] = useState("");
  const [instagramURL, setInstagramURL] = useState("");
  const [soundcloudURL, setSoundcloudURL] = useState("");
  const [twitterURL, setTwitterURL] = useState("");
  const [message, setMessage] = useState("");
  const [counter, setCounter] = useState(0);
  const guitarAudio = new Audio(guitarsound);
  guitarAudio.volume = 0.02;

  const handleSubmit = async (e) => {
    guitarAudio.play();
    let data = {
      Musician: musician,
      Picture: imageAddress,
      Instrument: instrument,
      Genre: genre,
      Looking_for: lookingFor,
      Location: location,
      Facebook: facebookURL,
      Soundcloud: soundcloudURL,
      Twitter: twitterURL,
      Instagram: instagramURL,
    };
    if (musician !== "" && imageAddress !== "" && instrument !== "" && genre !== ""
      && lookingFor !== "" && location !== "" && facebookURL !== "" && soundcloudURL !== ""
    && twitterURL !== "" && instagramURL !== "") {
      await axios.post(baseURL + "/Musicians", { fields: data }, config);
      setMessage('');
      console.log(counter);
    } else {
      setMessage('* fill out all the fields');
      console.log(counter);
    }
    
    // see useEffect in App.js to see how the code below 
    // allows us to make another axios.get request
    props.refresh((prev) => !prev);
  };

  return (
    <div className="formSection">
  
      <div className="formSectionTextBackground">
        <form>
            <div id="form-pic-parent-div">
      <img id="form-pic" src="https://media4.giphy.com/media/3o6ZtdARd9exOTKPOo/giphy.gif?cid=ecf05e47950r5maaxhbkgga4kaofecmpvacc4a10f6kf7kzh&rid=giphy.gif&ct=g"/>
      </div>
          <em>
            <p>
              Are you a musician looking to find someone to collaborate with?
              Just submit the form below to get started.{" "}
            </p>
          </em>
          {/* storing the user inputs in the state variables */}
         <div className="input-parent-div">
          <div className="input-div">
              <label htmlFor="name"></label>
     
              <input
                name="name"
                placeholder='enter your name:'
                type="text"
                onChange={function (e) { setMusician(e.target.value); setCounter(counter+1) }}
                />
            </div>
           <div className="input-div">
          <label htmlFor="picAddress">
            {/* <p>
              Picture URL: <br></br>
              <em id="pictureURLText">
                (post a link to a picture of yourself) 
              </em>
            </p> */}
          </label>
          <input
                name="picAddress"
                placeholder = 'enter a link to a picture of yourself'
            type="text"
            onChange={function (e) { setImageAddress(e.target.value); setCounter(counter+1) }}
            /></div>
           <div className="input-div">
          <label htmlFor="instrument"></label>
          <input
                name="instrument"
                placeholder = 'enter instrument you play'
            type="text"
            onChange={function (e) { setInstrument(e.target.value); setCounter(counter+1) }}
            /></div>
           <div className="input-div">
          <label htmlFor="genre"></label>
          <input
            name="genre"
                type="text"
                placeholder = 'enter genre you play'
            onChange={function (e) { setGenre(e.target.value); setCounter(counter+1) }}
            /></div>
           <div className="input-div">
          <label htmlFor="lookingFor"></label>
          <input
                name="lookingFor"
                placeholder = 'write what you are looking for'
            type="text"
            onChange={function (e) { setLookingFor(e.target.value); setCounter(counter+1) }}
            /></div>
           <div className="input-div">
          <label htmlFor="location"></label>
          <input
                name="location"
                placeholder = 'enter your location'
            type="text"
            onChange={function (e) { setLocation(e.target.value); setCounter(counter+1) }}
            /></div>
           <div className="input-div">
          <label htmlFor="facebook"></label>
          <input
                name="facebook"
                placeholder = 'post your facebook url'
            type="text"
            onChange={function (e) { setFacebookURL(e.target.value); setCounter(counter+1) }}
            /></div>
           <div className="input-div">
          <label htmlFor="soundcloud"></label>
          <input
                name="soundcloud"
                placeholder = 'post your soundcloud url'
            type="text"
            onChange={function (e) { setSoundcloudURL(e.target.value); setCounter(counter+1) }}
            /></div>
           <div className="input-div">
          <label htmlFor="instagram"></label>
          <input
                name="instagram"
                placeholder = 'post your instagram url'
            type="text"
            onChange={function (e) { setInstagramURL(e.target.value); setCounter(counter+1)}}
            /></div>
           <div className="input-div">
          <label htmlFor="twitter"></label>
              <input
                placeholder = 'post your twitter url'
            name="twitter"
            type="text"
            onChange={function (e) { setTwitterURL(e.target.value); setCounter(counter+1) }}
              /></div>
          </div>
          <br></br>
          <p>{message}</p>
          <button onClick={function (e) { e.preventDefault(); handleSubmit() }}>Create a Post</button>
     
        </form>
      </div>
    </div>
  );
}

export default Form;

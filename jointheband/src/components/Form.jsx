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
    await axios.post(baseURL + "/Musicians", { fields: data }, config);
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
          <label htmlFor="name">Name: </label>
          <input
            name="name"
            type="text"
            onChange={(e) => setMusician(e.target.value)}
            /></div>
           <div className="input-div">
          <label htmlFor="picAddress">
            <p>
              Picture URL: <br></br>
              <em id="pictureURLText">
                (post a link to a picture of yourself) 
              </em>
            </p>
          </label>
          <input
            name="picAddress"
            type="text"
            onChange={(e) => setImageAddress(e.target.value)}
            /></div>
           <div className="input-div">
          <label htmlFor="instrument">Instrument that you play: </label>
          <input
            name="instrument"
            type="text"
            onChange={(e) => setInstrument(e.target.value)}
            /></div>
           <div className="input-div">
          <label htmlFor="genre">Genre: </label>
          <input
            name="genre"
            type="text"
            onChange={(e) => setGenre(e.target.value)}
            /></div>
           <div className="input-div">
          <label htmlFor="lookingFor">Looking For: </label>
          <input
            name="lookingFor"
            type="text"
            onChange={(e) => setLookingFor(e.target.value)}
            /></div>
           <div className="input-div">
          <label htmlFor="location">Location: </label>
          <input
            name="location"
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            /></div>
           <div className="input-div">
          <label htmlFor="facebook">Facebook URL: </label>
          <input
            name="facebook"
            type="text"
            onChange={(e) => setFacebookURL(e.target.value)}
            /></div>
           <div className="input-div">
          <label htmlFor="soundcloud">Soundcloud URL: </label>
          <input
            name="soundcloud"
            type="text"
            onChange={(e) => setSoundcloudURL(e.target.value)}
            /></div>
           <div className="input-div">
          <label htmlFor="instagram">Instagram URL: </label>
          <input
            name="instagram"
            type="text"
            onChange={(e) => setInstagramURL(e.target.value)}
            /></div>
           <div className="input-div">
          <label htmlFor="twitter">Twitter URL: </label>
          <input
            name="twitter"
            type="text"
            onChange={(e) => setTwitterURL(e.target.value)}
              /></div>
          </div>
          <br></br>
          <Link to="/">
            <button onClick={handleSubmit}>Create a Post</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Form;

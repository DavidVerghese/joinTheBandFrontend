import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import guitarsound from "../sounds/guitarsound.mp3";
import { Route, Link } from "react-router-dom";

function Form(props) {
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
    // e.preventDefault();
    guitarAudio.play();
    console.log(
      musician,
      imageAddress,
      instrument,
      genre,
      lookingFor,
      location,
      facebookURL,
      soundcloudURL,
      instagramURL,
      twitterURL
    );
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
    props.refresh((prev) => !prev);
  };

  return (
    <div className="formSection">
      <h1 id="formHeading">Want to create a post?</h1>
      <br></br>
      <div className="formSectionTextBackground">
        <form>
          <em>
            <p>
              Are you a musician looking to find someone to collaborate with?
              Just submit the form below to get started.{" "}
            </p>
          </em>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            onChange={(e) => setMusician(e.target.value)}
          />
          <label htmlFor="picAddress">Picture URL</label>
          <input
            name="picAddress"
            type="text"
            onChange={(e) => setImageAddress(e.target.value)}
          />
          <label htmlFor="instrument">Instrument</label>
          <input
            name="instrument"
            type="text"
            onChange={(e) => setInstrument(e.target.value)}
          />
          <label htmlFor="genre">Genre</label>
          <input
            name="genre"
            type="text"
            onChange={(e) => setGenre(e.target.value)}
          />
          <label htmlFor="lookingFor">Looking For</label>
          <input
            name="lookingFor"
            type="text"
            onChange={(e) => setLookingFor(e.target.value)}
          />
          <label htmlFor="location">Location</label>
          <input
            name="location"
            type="text"
            onChange={(e) => setLocation(e.target.value)}
          />
          <label htmlFor="facebook">Facebook URL</label>
          <input
            name="facebook"
            type="text"
            onChange={(e) => setFacebookURL(e.target.value)}
          />
          <label htmlFor="soundcloud">Soundcloud URL</label>
          <input
            name="soundcloud"
            type="text"
            onChange={(e) => setSoundcloudURL(e.target.value)}
          />
          <label htmlFor="instagram">Instagram URL</label>
          <input
            name="instagram"
            type="text"
            onChange={(e) => setInstagramURL(e.target.value)}
          />
          <label htmlFor="twitter">Twitter URL</label>
          <input
            name="twitter"
            type="text"
            onChange={(e) => setTwitterURL(e.target.value)}
          />
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

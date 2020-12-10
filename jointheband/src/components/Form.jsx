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
      location
    );
    let data = {
      Musician: musician,
      Picture: imageAddress,
      Instrument: instrument,
      Genre: genre,
      Looking_for: lookingFor,
      Location: location,
    };
    await axios.post(baseURL + "/Musicians", { fields: data }, config);
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

import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";

function Form(props) {
  const [musician, setMusician] = useState("");
  const [instrument, setInstrument] = useState("");
  const [location, setLocation] = useState("");
  const [genre, setGenre] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  const [imageAddress, setImageAddress] = useState("");

  const handleSubmit = async (e) => {
    // e.preventDefault();
    console.log(musician, instrument, lookingFor);
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
    <div class="formSection">
      <h2>Want to create a post!</h2>
      <img class="formPic" src="https://www.whatsonnetwork.co.uk/uploads/800x600/bbeb5efca7d6530eb5276df3d04faee8.jpg"/>
      <div class="formSectionTextBackground">
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
          <br></br> <button onClick={handleSubmit}>submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;

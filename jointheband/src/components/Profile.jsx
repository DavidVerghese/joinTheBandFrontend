import SocialMedia from "./SocialMedia.jsx";
import { useState } from "react";
import bongo from "../sounds/bongo.mp3";
import jazzkeys from "../sounds/jazzkeys.wav";
import vibraphone from "../sounds/vibraphone.wav";
import syntharpeggio from "../sounds/syntharpeggio.wav";
import axios from "axios";
import { baseURL, config } from "../services";

function Profile(props) {
  let profileInfo = props.item.fields

  const [toEdit, setToEdit] = useState(false);
  const [editSound, setEditSound] = useState(true);
  const [deleteSound, setDeleteSound] = useState(true);

  const [musician, setMusician] = useState(profileInfo.Musician);
  const [instrument, setInstrument] = useState(profileInfo.Instrument);
  const [location, setLocation] = useState(profileInfo.Location);
  const [genre, setGenre] = useState(profileInfo.Genre);
  const [lookingFor, setLookingFor] = useState(profileInfo.Looking_for);
  const [imageAddress, setImageAddress] = useState(profileInfo.Picture);
  const [facebookURL, setFacebookURL] = useState(profileInfo.FacebookURL);
  const [instagramURL, setInstagramURL] = useState(profileInfo.InstagramURL);
  const [soundcloudURL, setSoundcloudURL] = useState(profileInfo.SoundcloudURL);
  const [twitterURL, setTwitterURL] = useState(profileInfo.TwitterURL);

  const edit = async (e) => {
    syntharpeggioAudio.play();
    let response = await axios.get(baseURL + `/Musicians/${props.item.id}`, config);
    let fields = {
      Musician: musician,
      Picture: imageAddress,
      Instrument: instrument,
      Genre: genre,
      Looking_for: lookingFor,
      Location: location,
      Facebook: facebookURL,
      Soundcloud: soundcloudURL,
      Twitter: twitterURL,
      Instagram: instagramURL
    };

    axios.put(baseURL + `/Musicians/${props.item.id}`, { fields }, config);
    
    props.refresh((prev) => !prev);
  };

  const deleteFunction = async (e) => {
    axios.delete(baseURL + `/Musicians/${props.item.id}`, config);
    props.refresh((prev) => !prev);
    console.log("clicked!");
  }
  const bongoAudio = new Audio(bongo);
  bongoAudio.volume = 0.02;

  const jazzkeysAudio = new Audio(jazzkeys);
  jazzkeysAudio.volume = 0.02;
  const vibraphoneAudio = new Audio(vibraphone);
  vibraphoneAudio.volume = 0.02;
  const syntharpeggioAudio = new Audio(syntharpeggio);
  syntharpeggioAudio.volume = 0.02;
  // the function below allows us to hide and show the social 
  // media icon. When you click the button, you set the 
  // socialMediaDisplay value, which is a boolean value to be the 
  // opposite of what it previously was. This is then passed as 
  // a prop to <SocialMedia/>. The social media icons only 
  // display when socialMediaDisplay is true, thus allowing us 
  // to display or hide them by clicking on them.
  const socialMediaButton = () => {
    setSocialMediaDisplay(!socialMediaDisplay);
    if (!socialMediaDisplay) {
      bongoAudio.play();
    }
  };
  const [socialMediaDisplay, setSocialMediaDisplay] = useState(false);

  return (
    <div className="profile">
      <div className="profilebackground">
        <h2>{props.item.fields.Musician}</h2>
        <img alt="profile photo of musician" src={props.item.fields.Picture}></img>
        <p>Instrument: {props.item.fields.Instrument}</p>
        <p>Genre: {props.item.fields.Genre}</p>
        <p>Looking for: {props.item.fields.Looking_for}</p>
        <p>Location: {props.item.fields.Location}</p>
        <div id="socialMediaButtons">
          <button onClick={function (e) { e.preventDefault(); setToEdit(!toEdit); setEditSound(!editSound); if(editSound){jazzkeysAudio.play()}  }}>Edit</button>
          <button onClick={function (e) { e.preventDefault(); deleteFunction(); setDeleteSound(!deleteSound); if (deleteSound) { vibraphoneAudio.play() }}}>Delete</button>
        <button onClick={socialMediaButton}>Social Media</button>
        </div>
        
        <div>
          <div className={toEdit ? "edit-section" : "edit-section-hide"}>
          <div>
          <label htmlFor="name">Name: </label>
          <input
            name="name"
            type="text"
            value={musician}
            onChange={(e) => setMusician(e.target.value)}
          />
          <label htmlFor="pictureURL">Picture URL: </label>
          <input
            name="pictureURL"
            value={imageAddress}
            type="text"
            onChange={(e) => setImageAddress(e.target.value)}
          />
          <label htmlFor="instrument">Instrument: </label>
          <input
            name="instrument"
            value={instrument}
            type="text"
            onChange={(e) => setInstrument(e.target.value)}
          />
          <label htmlFor="genre">Genre: </label>
          <input
            name="genre"
            value={genre}
            type="text"
            onChange={(e) => setGenre(e.target.value)}
          />
          <label htmlFor="name">Looking for: </label>
          <input
            name="looking for"
            value={lookingFor}
            type="text"
            onChange={(e) => setLookingFor(e.target.value)}
          />
          <label htmlFor="location">Location: </label>
          <input
            name="location"
            value={location}
            type="text"
            onChange={(e) => setLocation(e.target.value)}
          />
           </div>
          <button onClick={edit}>Submit</button>
          </div>
        </div>
        <SocialMedia item={props.item} todisplay={socialMediaDisplay} />
        <br></br>
      </div>
    </div>
  );
}

export default Profile;

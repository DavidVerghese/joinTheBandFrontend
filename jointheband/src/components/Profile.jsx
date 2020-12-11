import SocialMedia from "./SocialMedia.jsx";
import { useState } from "react";
import bongo from "../sounds/bongo.mp3";

function Profile(props) {
  const bongoAudio = new Audio(bongo);
  bongoAudio.volume = 0.02;
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
        <div id="socialMediaButton">
          <button onClick={socialMediaButton}>Social Media</button>
        </div>
        <SocialMedia item={props.item} todisplay={socialMediaDisplay} />
        <br></br>
      </div>
    </div>
  );
}

export default Profile;

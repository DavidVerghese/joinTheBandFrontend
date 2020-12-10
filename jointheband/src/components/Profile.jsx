import SocialMedia from "./SocialMedia.jsx";
import { useEffect, useState } from "react";

function Profile(props) {
  const socialMediaButton = () => {
    setSocialMediaDisplay(!socialMediaDisplay);
  };
  const [socialMediaDisplay, setSocialMediaDisplay] = useState(false);
  return (
    <div>
      <div class="profile">
        <div class="profilebackground">
          <h2>{props.item.fields.Musician}</h2>
          <img src={props.item.fields.Picture}></img>
          <p>Instrument: {props.item.fields.Instrument}</p>
          <p>Genre: {props.item.fields.Genre}</p>
          <p>Looking for: {props.item.fields.Looking_for}</p>
          <p>Location: {props.item.fields.Location}</p>
          <div id="socialMediaButton">
          <button onClick={socialMediaButton}>Social Media</button></div>
          <SocialMedia item={props.item} todisplay={socialMediaDisplay} />
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Profile;

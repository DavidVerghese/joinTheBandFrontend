import SocialMedia from "./SocialMedia.jsx";
import { useEffect, useState } from "react";

function Profile(props) {
  const socialMediaButton = () => {
    setSocialMedia(props.item.fields.Facebook);
  };
  const [socialMedia, setSocialMedia] = useState("");
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
          {/* <SocialMedia /> */}
          <button onClick={socialMediaButton}>Social Media</button>
          <br></br>
          <div class="socialMediaSection">
            <div class="socialMedia">
              <a href={props.item.fields.Facebook} target="_blank">
                <img src="https://www.smartenergydecisions.com/upload/images/company_images/facebook.jpg" />
              </a>
            </div>
            <div class="socialMedia">
              <a href={props.item.fields.Soundcloud} target="_blank">
                <img src="https://edm.com/.image/t_share/MTU5NDY5Nzk2NTUzOTI1OTA1/soundcloud.png" />
              </a>
            </div>
            <div class="socialMedia">
              <a href={props.item.fields.Instagram} target="_blank">
                <img src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-app-logo.jpg" />
              </a>
            </div>
            <div class="socialMedia">
              <a href={props.item.fields.Twitter} target="_blank">
                <img src="https://www.creativefreedom.co.uk/wp-content/uploads/2017/06/Twitter-logo-2012.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

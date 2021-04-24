import Profile from "./Profile.jsx";
import axios from "axios";
import { baseURL, config } from "../services";
import drumfill from "../sounds/drumfill.mp3";

function AllProfiles(props) {
  const drumFillAudio = new Audio(drumfill);
  drumFillAudio.volume = 0.02;

  return (
    <div>
      <a href="top" name="top">
        <h2>Profiles:</h2>
      </a>
      <div id="all-profiles-parent-div">
      {props.data.map((item) => {
        // item stores data of musician's profile
        return (
          <div>
            {/* pass item as prop to Profile */}
            <Profile item={item} />
          </div>
        );
      })}</div>
      <a href="#top">
        <button
          onClick={function () {
            drumFillAudio.play();
          }}
        >
          Back to Top
        </button>
      </a>
    </div>
  );
}

export default AllProfiles;

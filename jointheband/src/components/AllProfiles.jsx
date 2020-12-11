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
      {props.data.map((item) => {
        return (
          <div>
            <Profile item={item} />
          </div>
        );
      })}
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

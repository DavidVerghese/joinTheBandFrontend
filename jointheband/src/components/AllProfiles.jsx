import Profile from "./Profile.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import drumfill from "../sounds/drumfill.mp3";

function AllProfiles(props) {

  const drumFillAudio = new Audio(drumfill);
  drumFillAudio.volume = 0.02;

  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      let response = await axios.get(baseURL + "/Musicians", config);
      setData(response.data.records);
    }
    getData();
  }, []);

  return (
    <div>
      <a name ="top"></a>
      <h2>Profiles:</h2>
      {data.map((item) => {
        return (
          <div>
            <Profile item={item} />
          </div>
        );
      })}
      <a href="#top"><button onClick={function (){drumFillAudio.play()}}>Back to Top</button></a>
    </div>
  );
}

export default AllProfiles;

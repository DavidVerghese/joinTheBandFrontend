import Profile from "./Profile.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";

function AllProfiles(props) {
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
      <a href="#top"><button>Back to Top</button></a>
    </div>
  );
}

export default AllProfiles;

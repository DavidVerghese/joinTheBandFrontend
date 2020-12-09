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

  console.log(data);

  return (
    <div>
      <h2>Profiles:</h2>
      {data.map((item) => {
        return (
          <div>
            <Profile item={item} />
          </div>
        );
      })}
    </div>
  );
}

export default AllProfiles;

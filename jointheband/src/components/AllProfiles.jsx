import Profile from "./Profile.jsx";

function AllProfiles(props) {
  return (
    <div>
      <h2>Profiles:</h2>
      {props.data.map((item) => {
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

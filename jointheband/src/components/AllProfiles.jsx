import Profile from "./Profile.jsx";
import drumfill from "../sounds/drumfill.mp3";

function AllProfiles(props) {
  const drumFillAudio = new Audio(drumfill);
  drumFillAudio.volume = 0.02;
  const { users } = props;

  function alterDate(UTCString) {
    return Date(UTCString).split(' ').slice(0,3).join(' ')
  }
  return (
    <div>
      <a href="top" name="top">
        <h2>Profiles:</h2>
      </a>
      <div id="all-profiles-parent-div">
        {users.map((item, key) => {
        
        // item stores data of musician's profile
        return (
          <div>
            <p>{item.name}</p>
            <img src={item.picture_url} />
            <p>email: {item.email_address}</p>
            <p>genre: {item.genre.name}</p>
            <p>joined: {alterDate(item.created_at)}</p>
            <p>location: {item.location.name}</p>
            <p>instrument: {item.instrument.name}</p>
            <p>looking for: {item.looking_for.name}</p>
            {/* pass item as prop to Profile */}
            {/* <Profile  key={key} item={item} refresh={props.refresh} /> */}
          </div>
        );
      })}</div>
      {/* <a href="#top">
        <button
          onClick={function () {
            drumFillAudio.play();
          }}
        >
          Back to Top
        </button>
      </a> */}
    </div>
  );
}

export default AllProfiles;

import "../App.css";
import Profile from "./Profile.jsx";

function SearchResults(props) {
  if (props.numberOfResults > 0) {
    return (
      <div>
        <div class="profile">
          <div class="profilebackground">
            {props.musician.map((item) => {
              return <Profile item={item} />;
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
export default SearchResults;

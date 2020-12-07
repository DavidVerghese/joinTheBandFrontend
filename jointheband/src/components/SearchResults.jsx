import "../App.css";
import Profile from "./Profile.jsx";

function SearchResults(props) {
  console.log("hey dude", props.musician);
  return (
    <div>
      {props.musician.map((item) => {
        return (
          <div>
            <Profile item={item} />
          </div>
        );
      })}
    </div>
  );
}
export default SearchResults;

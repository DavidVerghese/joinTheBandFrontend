import "../App.css";
import Profile from "./Profile.jsx";

function SearchResults(props) {
  if (props.numberOfResults > 0) {
    return (
      <div className="allResults">
        {props.musician.map((item) => {
          return <Profile item={item} />;
        })}
      </div>
    );
  } else {
    return <div className="allResults"></div>;
  }
}
export default SearchResults;

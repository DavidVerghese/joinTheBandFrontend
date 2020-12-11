import "../App.css";
import Profile from "./Profile.jsx";

function SearchResults(props) {
  // this checks to make sure the number of results isn't zero. 
  // search searchSubmit in App.js to see how we 
  // determine the number of results.
  if (props.numberOfResults > 0) {
    return (
      <div className="allResults">
        {props.musician.map((item) => {
          return <Profile item={item} />;
        })}
      </div>
    );
  }
  else {
    return <div className="allResults"></div>;
  }
}

export default SearchResults;

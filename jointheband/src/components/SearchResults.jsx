import "../App.css";
import Profile from "./Profile.jsx";

function SearchResults(props) {
  console.log(props);
  if (props.musician.length > 0) {
    return (
      <div class="profile">
        <div class="profilebackground">
          {props.musician.map((item) => {
            return <Profile item={item} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>No Results Found!</h1>
        <img src="https://media0.giphy.com/media/5x89XRx3sBZFC/giphy.gif" />
      </div>
    );
  }
}
export default SearchResults;

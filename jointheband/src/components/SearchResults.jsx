import "../App.css";
import Profile from "./Profile.jsx";

function SearchResults(props) {
  return (
    <div class="profile">
      <div class="profilebackground">
        {props.musician.map((item) => {
          return (<Profile item={item} />)
        })}
      </div>
    </div>
  );
}
export default SearchResults;

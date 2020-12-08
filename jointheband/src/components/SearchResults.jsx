import "../App.css";
import Profile from "./Profile.jsx";

function SearchResults(props) {
  return (
    <div>
      {console.log(typeof props.musician.fields)}
      {/* {props.musician.fields.map((item) => {
        console.log(item);
      })} */}
      {/* {props.musician.map((item) => {
        return (
          <div>
            <Profile item={item} />
          </div>
        );
      })} */}
    </div>
  );
}
export default SearchResults;

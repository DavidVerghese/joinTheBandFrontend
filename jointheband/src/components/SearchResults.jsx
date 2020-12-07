import "../App.css";
import Profile from "./Profile.jsx";

function SearchResults(props) {
  console.log("hey dude", props.musician);
  return (
    <div>
      {props.musician.map((item) => {
        return (
          <div>
            {/* <h2>{item.fields.Musician}</h2>
            <img src={item.fields.Picture}></img>
            <p>Instrument: {item.fields.Instrument}</p>
            <p>Genre: {item.fields.Genre}</p>
            <p>Looking for: {item.fields.Looking_for}</p>
            <p>Location: {item.fields.Location}</p> */}
            <Profile item={item} />
          </div>
        );
      })}
    </div>
  );
}
export default SearchResults;

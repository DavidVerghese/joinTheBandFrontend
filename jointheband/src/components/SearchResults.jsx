import "../App.css";
import Profile from "./Profile.jsx";

function SearchResults(props) {
  return (
    <div>
      {console.log(props.musician)}

      <h2>{props.musician.fields.Musician}</h2>
      <img src={props.musician.fields.Picture}></img>
      <p>Instrument: {props.musician.fields.Instrument}</p>
      <p>Genre: {props.musician.fields.Genre}</p>
      <p>Looking for: {props.musician.fields.Looking_for}</p>
      <p>Location: {props.musician.fields.Location}</p>
    </div>
  );
}
export default SearchResults;

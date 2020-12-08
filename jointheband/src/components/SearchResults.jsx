import "../App.css";
import Profile from "./Profile.jsx";

function SearchResults(props) {
  return (
    <div class="profile">
      <div class="profilebackground">
        {props.musician.map((item) => {
          return (
            <div>
              <h2>{item.fields.Musician}</h2>
              <img src={item.fields.Picture}></img>
              <p>Instrument: {item.fields.Instrument}</p>
              <p>Genre: {item.fields.Genre}</p>
              <p>Looking for: {item.fields.Looking_for}</p>
              <p>Location: {item.fields.Location}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default SearchResults;

import "../App.css";
import Profile from "./Profile.jsx";

function SearchResults(props) {
  return (
    <div class="profile">
      <div class="profilebackground">
        {/* {console.log(props.musician[0])} */}
        {/* <p>{props.musician[0].fields.Musician}</p>
        <p>{props.musician[1].fields.Musician}</p> */}
        {/* {console.log(props.musician[1])} */}
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
        {/* {props.musician.map((item) => {
          console.log(item.fields.Musician);
          <h2>{item.fields.Musician}</h2>;
        })} */}

        {/* <h2>{props.musician.fields.Musician}</h2>
        <img src={props.musician.fields.Picture}></img>
        <p>Instrument: {props.musician.fields.Instrument}</p>
        <p>Genre: {props.musician.fields.Genre}</p>
        <p>Looking for: {props.musician.fields.Looking_for}</p>
        <p>Location: {props.musician.fields.Location}</p> */}
      </div>
    </div>
  );
}
export default SearchResults;

import "../App.css";

function SearchResults(props) {
  console.log("hey dude", props.musician);
  return (
    <div class="search">
      <p>
        {props.musician.map((index) => {
          return index.fields.Musician;
        })}
      </p>
    </div>
  );
}
export default SearchResults;

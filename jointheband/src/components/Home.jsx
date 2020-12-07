import { Route, Link } from "react-router-dom";
import SearchResults from "./SearchResults.jsx";
import { useState } from "react";
import Form from "./Form.jsx";

function Home(props) {
  
  return (
    <div class="intro">
      <img src="https://media1.giphy.com/media/13QvN0u5j5SUj6/giphy.gif?cid=ecf05e47tsos9jw567r462i43oqpjho691ily093c8qurxiz&rid=giphy.gif"></img>
      <em>
        <h2>Tired of doing it all on your own?</h2>
      </em>
     

      <label htmlFor="search">Search</label>
      <input name="search" type="text" />
      <button>Submit</button>
      <Link to="/form">
        <button>Make a post!</button>
      </Link>
      <Link to="/profiles">
        <button>View All Posts</button>
      </Link>
    </div>
  );
}

export default Home;

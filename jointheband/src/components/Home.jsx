import { Route, Link } from "react-router-dom";
import SearchResults from "./SearchResults.jsx";
import { useState } from "react";
import Form from "./Form.jsx";

function Home(props) {
  return (
    <div class="intro">
      <img class="homePic" src="https://blog.loopearplugs.com/wp-content/uploads/2019/05/applause-audience-band-167636.jpg"/>
      <em>
        <h2>This could be you</h2>
      </em>

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

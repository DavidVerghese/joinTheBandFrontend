import { Link } from "react-router-dom";
import basssoundtwo from "../sounds/harpsound.mp3";
import guitarsound from "../sounds/guitarstrum.mp3";

function Home(props) {
  const bassAudioTwo = new Audio(basssoundtwo);
  bassAudioTwo.volume = 0.02;
  const guitarAudio = new Audio(guitarsound);
  guitarAudio.volume = 0.02;

  return (
    <div className="home">
      <h2>Join The Band: find musicians in your area</h2>
      <img
        alt="a band on stage"
        id="homePic"
        src="https://blog.loopearplugs.com/wp-content/uploads/2019/05/applause-audience-band-167636.jpg"
      />
      <em>
        <h2>This could be you</h2>
      </em>
      {/* <Link
        onClick={function () {
          bassAudioTwo.play();
        }}
        to="/form"
      >
        <button>Make a post!</button>
      </Link>
      <Link
        onClick={function () {
          guitarAudio.play();
        }}
        to="/profiles"
      >
        <button>View All Posts</button>
      </Link> */}
    </div>
  );
}

export default Home;

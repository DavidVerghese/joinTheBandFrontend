import Profile from "./Profile.jsx";
import drumfill from "../sounds/drumfill.mp3";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useEffect } from 'react';
function AllProfiles({users,genres}) {
  const drumFillAudio = new Audio(drumfill);
  drumFillAudio.volume = 0.02;

  const [displayedUsers, setDisplayedUsers] = useState([]);
  useEffect(() => {
    setDisplayedUsers(users)
  },[users])
  function filterUsersByGenre(genre) {

    if (genre === 'All genres') {
      return users;
    }
    else {
      console.log(users,genre)
      return users.filter((user) => user.genre_name === genre);
    }
    
  }
  function alterDate(UTCString) {
    return Date(UTCString).split(' ').slice(0,3).join(' ')
  }
  const genresPlusAllGenres = [{ name: "All genres" },...genres]
  return (
    <div>
        <h2>Users:</h2>

        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter by Genre
      </Dropdown.Toggle>

        <Dropdown.Menu>
          {genresPlusAllGenres.map((genre) => <Dropdown.Item onClick={()=>setDisplayedUsers(filterUsersByGenre(genre.name))}>{genre.name}</Dropdown.Item>)}
      </Dropdown.Menu>
      </Dropdown>
      
    <div className="profiles">
      
        {displayedUsers.map((item, key) => {
        
        //  item stores data of musician's profile
          return (
          
            <Card style={{ width: '18rem', backgroundColor: 'black',boxShadow: '1px 1px 1px 1px white', margin: '10px', textAlign: 'center' }}>
            <Card.Body>
                 <Card.Header>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{item.instrument_name}</Card.Subtitle>
                </Card.Header>

                <Card.Img style={{ width: '5rem'}} variant="top" src={item.picture_url}  />

               
                
                <Card.Text>
                  email: {item.email_address}
                </Card.Text>
                <Card.Text>
                genre: {item.genre_name}
                </Card.Text>
                <Card.Text>
                <p>joined: {alterDate(item.created_at)}</p>
                </Card.Text>
                <Card.Text>
                <p>location: {item.location_name}</p>
                </Card.Text>
                <Card.Text>
                <p>instrument: {item.instrument_name}</p>
                </Card.Text>
                <Card.Text>
                <p>looking for: {item.looking_for}</p>
                </Card.Text>
           
            </Card.Body>
            </Card>
        );
        })}
  
      {/* <a href="#top">
        <button
          onClick={function () {
            drumFillAudio.play();
          }}
        >
          Back to Top
        </button>
      </a> */}
      </div>
      </div>
  );
}

export default AllProfiles;

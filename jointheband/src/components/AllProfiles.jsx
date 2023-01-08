import Profile from "./Profile.jsx";
import drumfill from "../sounds/drumfill.mp3";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function AllProfiles(props) {
  const drumFillAudio = new Audio(drumfill);
  drumFillAudio.volume = 0.02;
  const { users } = props;

  function alterDate(UTCString) {
    return Date(UTCString).split(' ').slice(0,3).join(' ')
  }
  return (
    <div>
        <h2>Users:</h2>
        
    <div className="profiles">
      
        {users.map((item, key) => {
        
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

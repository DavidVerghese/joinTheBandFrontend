import drumfill from "../sounds/drumfill.mp3";
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import { useState, useEffect } from 'react';
function AllProfiles({users,genres,instruments,locations}) {
  const drumFillAudio = new Audio(drumfill);
  drumFillAudio.volume = 0.02;

  const [displayedUsers, setDisplayedUsers] = useState([]);
  useEffect(() => {
    setDisplayedUsers(users)
  },[users])
  function filterUsersByGenre(genre) {
    const filterResults =  users.filter((user) => user.genre_name === genre);
    if (genre === 'All genres') {
      setDescribeDisplayedUsers(`all users`)
      return users;
    }
    else if (filterResults.length == 0){
      alert(`no users found with the genre "${genre}"`);
      setDescribeDisplayedUsers(`all users`);
      return users;
    }
    else {
      setDescribeDisplayedUsers(`users whose genre is "${genre}"`)
      return filterResults;
    }
  }
  function filterUsersByInstrument(instrument) {

    const filterResults = users.filter((user) => user.instrument_name === instrument);
    if (instrument === 'All instruments') {
      setDescribeDisplayedUsers(`all users`)
      return users;
    }
    else if (filterResults.length == 0){
      alert(`no users found with the instrument "${instrument}"`);
      setDescribeDisplayedUsers(`all users`);
      return users;
    }
    else {
      setDescribeDisplayedUsers(`users whose instrument is "${instrument}"`)
      return filterResults;
    }
  }
  function filterUsersByLocation(location) {
    const filterResults = users.filter((user) => user.location_name === location);
    if (location === 'All locations') {
      setDescribeDisplayedUsers(`all users`)
      return users;
    }
    else if (filterResults.length == 0){
      alert(`no users found with location "${location}"`);
      setDescribeDisplayedUsers(`all users`);
      return users;
    }
    else {
      setDescribeDisplayedUsers(`users whose location is "${location}"`)
      return filterResults;
    }
  }
  function alterDate(UTCString) {
    return Date(UTCString).split(' ').slice(0,3).join(' ')
  }
  const genresPlusAllGenres = [{ name: "All genres" }, ...genres]
  const instrumentsPlusAllInstruments = [{ name: "All instruments" }, ...instruments]
  const locationsPlusAllLocations = [{ name: "All locations" }, ...locations]
  
  const [searchTerm,setSearchTerm] = useState('')

  function handleSearch() {
    const searchResults = users.filter((user) => user.name.includes(searchTerm));

    if (searchResults.length == 0) {
      alert(`there are no users named "${searchTerm}" or whose name contains "${searchTerm}"`)
    }
    else {
      setDisplayedUsers(searchResults)
      setDescribeDisplayedUsers(`users named "${searchTerm}" or whose name contains "${searchTerm}"`)
    }
  }
  const [describeDisplayedUsers, setDescribeDisplayedUsers] = useState('all users');

  return (
    <div className="profiles-parent">
        <h2>Users:</h2>
        
  
      <ButtonGroup style={{ width: '100%', display: 'flex', justifyContent:'space-between' }} className="mb-2">
        <InputGroup style={{ maxWidth: '50%', marginLeft:'50px' }} className="mb-3">
        <Form.Control
            placeholder="search for users by name"
            value={searchTerm}
            onChange={(e) => {  setSearchTerm(e.target.value) }}
          aria-label="search for users"
          aria-describedby="basic-addon2"
        />
          <Button  onClick={handleSearch} variant="outline-secondary" id="button-addon2">
          Submit
        </Button>
        </InputGroup>
        <Button variant="secondary" onClick={() => { setDisplayedUsers(users); setDescribeDisplayedUsers(`all users`) }} style={{maxWidth: '20%',marginRight: '50px',padding: '5px'}} >See all users</Button>
        </ButtonGroup>

      <ButtonGroup style={{ width: '100%', display: 'flex', justifyContent:'space-around' }}  className="mb-2">

     <div>
        <Dropdown>
      <Dropdown.Toggle>
        Filter by Instrument
      </Dropdown.Toggle>

          
        <Dropdown.Menu>
          {instrumentsPlusAllInstruments.map((instrument) => <Dropdown.Item onClick={()=>setDisplayedUsers(filterUsersByInstrument(instrument.name))}>{instrument.name}</Dropdown.Item>)}
          </Dropdown.Menu>
    
        </Dropdown>
       </div>

        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter by Genre
      </Dropdown.Toggle>

        <Dropdown.Menu>
          {genresPlusAllGenres.map((genre) => <Dropdown.Item onClick={()=>setDisplayedUsers(filterUsersByGenre(genre.name))}>{genre.name}</Dropdown.Item>)}
      </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter by Location
      </Dropdown.Toggle>

        <Dropdown.Menu>
          {locationsPlusAllLocations.map((location) => <Dropdown.Item onClick={()=>setDisplayedUsers(filterUsersByLocation(location.name))}>{location.name}</Dropdown.Item>)}
      </Dropdown.Menu>
        </Dropdown>
        </ButtonGroup>
      <p>Currently displaying {describeDisplayedUsers}</p>
    <div className="profiles">
  
        {displayedUsers && displayedUsers.length > 0 ? displayedUsers.map((item, key) => {
        
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
        }) : <>
            <h2>Loading</h2>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
        </>}
  
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

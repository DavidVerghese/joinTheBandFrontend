import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function NoAuthorization() {
  return (<div className="no-auth">

          <Card style={{ backgroundColor: 'black',boxShadow: '1px 1px 1px 1px white',textAlign: 'center', margin: '10px' }}>
          <Card.Body>
  <Card.Title><h1>ERROR 504!</h1></Card.Title>
  <Card.Text>
  <Card.Text style={{color: 'red'}}><h2>Sorry!</h2></Card.Text>You need to be logged in to access this page
    </Card.Text>
      <Link to="/login"><Button style={{ margin: '0 auto' }} variant="primary">Login</Button></Link>
  </Card.Body>
  </Card>

</div>)
}
export default NoAuthorization;
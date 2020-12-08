function Profile(props) {
  return (
    <div>
      <div class="profile">
        <div class="profilebackground">
          <h2>{props.item.fields.Musician}</h2>
          <img src={props.item.fields.Picture}></img>
          <p>Instrument: {props.item.fields.Instrument}</p>
          <p>Genre: {props.item.fields.Genre}</p>
          <p>Looking for: {props.item.fields.Looking_for}</p>
          <p>Location: {props.item.fields.Location}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;

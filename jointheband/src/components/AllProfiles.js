function AllProfiles(props) {
  return (
    <div>
      <h2>Profiles:</h2>
          {props.data.map((item) => {
            return (
              <div class="profile">
                <h2>{item.fields.Musician}</h2>
                <img src={item.fields.Picture}></img>
                <p>Instrument: {item.fields.Instrument}</p>
                <p>Genre: {item.fields.Genre}</p>
                <p>Looking for: {item.fields.Looking_for}</p>
                <p>Location: {item.fields.Location}</p>
                <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687495670&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div><a href="https://soundcloud.com/dabilliondollarbaby" title="Baby Jesus (DaBaby)" target="_blank" >Baby Jesus (DaBaby)</a> · <a href="https://soundcloud.com/dabilliondollarbaby/bop" title="BOP" target="_blank">BOP</a></div>
              </div>
            )
          })}
    </div>
  )
}

export default AllProfiles
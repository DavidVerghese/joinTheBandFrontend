function SocialMedia(props) {
  if (props.todisplay) {
    return (
      <div class="socialMediaSection">
        <div class="socialMedia">
          <a href={props.item.fields.Facebook} target="_blank">
            <img src="https://www.smartenergydecisions.com/upload/images/company_images/facebook.jpg" />
          </a>
        </div>
        <div class="socialMedia">
          <a href={props.item.fields.Soundcloud} target="_blank">
            <img src="https://edm.com/.image/t_share/MTU5NDY5Nzk2NTUzOTI1OTA1/soundcloud.png" />
          </a>
        </div>
        <div class="socialMedia">
          <a href={props.item.fields.Instagram} target="_blank">
            <img src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-app-logo.jpg" />
          </a>
        </div>
        <div class="socialMedia">
          <a href={props.item.fields.Twitter} target="_blank">
            <img src="https://www.creativefreedom.co.uk/wp-content/uploads/2017/06/Twitter-logo-2012.png" />
          </a>
        </div>
      </div>
    );
  }
  else {
    return (<div></div>)
  }
}

export default SocialMedia;

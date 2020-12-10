function NoResults(props) {
  
  if (props.numberOfResults === 0) {
    return (
      <div>
        <h1>No Results Found!</h1>
        <img id="noResultsPic" src="https://media0.giphy.com/media/5x89XRx3sBZFC/giphy.gif" />
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default NoResults;

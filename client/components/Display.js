import React from 'react';

const Display = (props) => {
  return (
  <div id="apiDisplay">
  	<h1>New Display</h1>
    <p>{props.name}</p>
    <p>{props.weight}</p>
    {/* <img className="images" src={props.img}></img> */}
  </div>
  );   
};

export default Display;
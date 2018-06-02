const feed = require('./Feed'); 

const Display = (props) => { 
  <div id="apiDisplay">
    <p>{props.name}</p>
    <p>{props.weight}</p>
    {/* <img className="images" src={props.img}></img> */}
  </div>     
}

export default Display; 
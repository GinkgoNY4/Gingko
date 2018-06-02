/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import Display from './Display';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    console.log('Feed props are', props);
  }

  render() {
    let username = this.props.location.state.referrer.username;
    let interests = this.props.location.state.referrer.interests;
    let apiData = this.props.location.state.referrer.apiData;
    let displayArr = []; 
    for (let i = 0; i < interests.length; i++) { 
      if (interest[i] === 0) displayArr.push(<Display info={apiData[i]}/>);
    }//end for
    return (
      <div>{displayArr}</div>
    )
  }
}

export default Feed;
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

import Login from './Login.js';
import Feed from './Feed.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/feed" component={Feed} />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('contents'));

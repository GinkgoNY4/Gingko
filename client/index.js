/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

console.log(BrowserRouter);

const Home = () => <div>Home</div>
const Home2 = () => <div>Home2</div>
const Home3 = () => <div>Home3</div>

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    console.log(this.state)
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={Home2} />
          <Route path='/route42' component={Home3} />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('contents'));
